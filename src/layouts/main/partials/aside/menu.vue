<template>
    <ul class="k-menu" :class="{ 'k-menu-collapsed': collapsed }">
        <template v-for="(item, i) in menu" :key="i">
            <template v-if="checkRoles(item)">
                <li
                    v-if="item.heading && hasOneAccess(item)"
                    class="k-menu-header"
                >
                    <template v-if="!collapsed">{{ item.heading }}</template>
                </li>
                <li v-else-if="item.separator" class="k-menu-separator"></li>
                <template v-for="(menuItem, j) in item.pages" :key="j">
                    <template v-if="checkRoles(menuItem)">
                        <li v-if="!menuItem.pages">
                            <k-tooltip
                                :hover="menuItem.title"
                                placement="right"
                                :arrow="false"
                                :disabled="!collapsed"
                            >
                                <router-link
                                    v-if="!menuItem.pages"
                                    v-slot="{ href, navigate, isActive }"
                                    active-class="active"
                                    :to="
                                        !menuItem.disabled ? menuItem.route : {}
                                    "
                                >
                                    <button
                                        class="k-menu-item"
                                        :data-href="href"
                                        :class="{
                                            'k-menu-item-active': isActive,
                                            'k-menu-item-disabled':
                                                menuItem.disabled
                                        }"
                                        @click="navigate"
                                    >
                                        <span
                                            v-if="menuItem.icon"
                                            class="k-menu-icon"
                                        >
                                            <k-icon
                                                :icon="menuItem.icon"
                                                type="fal"
                                            />
                                        </span>

                                        <span
                                            v-if="!collapsed"
                                            class="k-menu-title"
                                        >
                                            {{ menuItem.title }}
                                        </span>

                                        <k-icon
                                            v-if="menuItem.pages && !collapsed"
                                            icon="chevron-down"
                                            type="fal"
                                            class="k-menu-chevron"
                                        />
                                    </button>
                                </router-link>
                            </k-tooltip>
                        </li>

                        <li
                            v-else-if="hasOneAccess(menuItem)"
                            :class="{
                                show: hasActiveChildren(menuItem.route)
                            }"
                        >
                            <k-tooltip
                                :content="menuItem.title"
                                placement="right"
                                :arrow="false"
                                :disabled="!collapsed"
                            >
                                <button
                                    :id="`k-menu-dropdown-${menuItem.title}`"
                                    class="k-menu-item"
                                >
                                    <span
                                        v-if="menuItem.icon"
                                        class="k-menu-icon"
                                    >
                                        <k-icon
                                            :icon="menuItem.icon"
                                            type="fal"
                                        />
                                    </span>
                                    <span
                                        v-if="!collapsed"
                                        class="k-menu-title"
                                    >
                                        {{ menuItem.title }}
                                    </span>

                                    <k-icon
                                        v-if="menuItem.pages && !collapsed"
                                        icon="chevron-down"
                                        type="fal"
                                        class="k-menu-chevron"
                                    />
                                </button>
                            </k-tooltip>

                            <ul
                                :id="`k-menu-dropdown-${menuItem.title}-body`"
                                class="k-menu-sub hidden"
                            >
                                <template
                                    v-for="(item2, k) in menuItem.pages"
                                    :key="k"
                                >
                                    <li v-if="item2.title && checkRoles(item2)">
                                        <k-tooltip
                                            :content="item2.title"
                                            placement="right"
                                            :arrow="false"
                                            :disabled="!collapsed"
                                        >
                                            <router-link
                                                v-if="!item2.pages"
                                                v-slot="{
                                                    href,
                                                    navigate,
                                                    isActive
                                                }"
                                                active-class="active"
                                                :to="
                                                    !item2.disabled
                                                        ? item2.route
                                                        : {}
                                                "
                                            >
                                                <button
                                                    class="k-menu-item"
                                                    :class="{
                                                        'k-menu-item-active':
                                                            isActive,
                                                        'k-menu-item-disabled':
                                                            item2.disabled
                                                    }"
                                                    :data-href="href"
                                                    @click="navigate"
                                                >
                                                    <span
                                                        v-if="item2.icon"
                                                        class="k-menu-icon"
                                                        type="fal"
                                                    >
                                                        <k-icon
                                                            :icon="item2.icon"
                                                            type="fal"
                                                        />
                                                    </span>

                                                    <span
                                                        v-if="!collapsed"
                                                        class="k-menu-title"
                                                    >
                                                        {{ item2.title }}
                                                    </span>

                                                    <!-- <k-icon
                                                        v-if="item2.pages"
                                                        icon="chevron-down"
                                                        class="k-menu-chevron"
                                                    /> -->
                                                </button>
                                            </router-link>
                                        </k-tooltip>

                                        <!-- <div
                                            class="menu-sub menu-sub-accordion"
                                        >
                                            <template
                                                v-for="(
                                                    item3, k
                                                ) in item2.pages"
                                                :key="k"
                                            >
                                                <div
                                                    v-if="checkRoles(item3)"
                                                    class="menu-item"
                                                >
                                                    <menu-item :item="item3" />
                                                </div>
                                            </template>
                                        </div> -->
                                    </li>
                                </template>
                            </ul>
                        </li>
                    </template>
                </template>
            </template>
        </template>
    </ul>
</template>

<script lang="ts">
    import { computed, defineComponent, inject, onMounted } from 'vue'
    import { RouteLocationRaw, useRoute } from 'vue-router'
    import { Accordion } from 'flowbite'

    import { version } from '@/helpers/config'
    import { Menu, SysMenu } from '@/config/_menu'

    export default defineComponent({
        name: 'KMenu',
        props: {
            collapsed: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            const route = useRoute()
            const $menu: () => Menu[] = inject('$menu') || (() => [])

            const SeparatorMenu: Menu[] = [{ separator: true }]

            const menu = computed(() => {
                const FrontMenu: Menu[] = $menu()
                return [...FrontMenu, ...SeparatorMenu, ...SysMenu]
            })

            const hasActiveChildren = (match: RouteLocationRaw) => {
                return route.path.indexOf(match.toString()) !== -1
            }

            const checkRoles = (item: any) => {
                if (item.auth !== undefined) return !!item.auth
                return true
            }

            const hasOneAccess = (item: any) => {
                if (item.auth) return item.auth

                if (item.pages) {
                    for (let i = 0; i < item.pages.length; i++) {
                        const page = item.pages[i]

                        if (page.auth) return page.auth

                        if (page.pages) {
                            for (let j = 0; j < page.pages.length; j++) {
                                const subpage = page.pages[j]

                                const subpageAccess = checkRoles(subpage)
                                if (subpageAccess) return true
                            }
                        }
                    }
                }

                return false
            }

            const initCollapse = () => {
                // create an array of objects with the id, trigger element (eg. button), and the content element
                let accordionItems: any[] = []
                let i = 0
                menu.value.forEach((item) => {
                    if (item.pages) {
                        item.pages.forEach((page) => {
                            if (page.pages) {
                                const triggerEl = document.getElementById(
                                    `k-menu-dropdown-${page.title}`
                                )

                                const targetEl = document.getElementById(
                                    `k-menu-dropdown-${page.title}-body`
                                )

                                if (triggerEl && targetEl) {
                                    accordionItems.push({
                                        id: `k-menu-dropdown-${page.title}`,
                                        triggerEl: triggerEl,
                                        targetEl: targetEl,
                                        active: false
                                    })
                                }
                            }
                        })
                    }
                    i++
                })

                const options = {
                    alwaysOpen: true,
                    activeClasses: 'bg-gray-800 text-gray-200',
                    inactiveClasses: 'text-gray-200'
                }

                new Accordion(accordionItems, options)
            }

            onMounted(() => {
                initCollapse()
            })

            return {
                hasActiveChildren,
                hasOneAccess,
                menu,
                version,
                checkRoles
            }
        }
    })
</script>

<style lang="scss" scoped>
    .k-menu {
        // COLLAPSED
        &.k-menu-collapsed {
            li:not(.k-menu-sub) {
                @apply space-y-0;
            }

            .k-menu-header {
                @apply border-b border-gray-700 mb-4 pb-4 mt-0;
            }

            .k-menu-item {
                @apply w-12 h-12 justify-center m-0;

                .k-menu-icon {
                    @apply m-0 w-auto;
                }
            }

            .k-menu-sub {
                @apply w-12 justify-center m-0;
            }
        }

        & > .k-menu-header {
            @apply text-gray-400 uppercase font-bold text-sm mt-6 mb-2 font-title;
        }

        .k-menu-icon {
            @apply mr-2 w-5 inline-flex;
        }

        .k-menu-item {
            @apply flex items-center w-full rounded-md px-2 py-2 mb-1 hover:bg-gray-800 text-left text-gray-400 hover:text-gray-200;

            .k-menu-title {
                @apply text-sm font-semibold;
            }

            .k-menu-chevron {
                @apply ml-auto;
            }

            &.k-menu-item-active {
                @apply bg-primary text-white;
            }

            &.k-menu-item-disabled {
                @apply hover:bg-transparent hover:text-gray-700 text-gray-700 bg-transparent cursor-not-allowed;
            }

            &[aria-expanded='true'] {
                @apply mb-0;
            }
        }

        .k-menu-item[aria-expanded='true'] {
            @apply rounded-bl-none rounded-br-none;
        }

        .k-menu-sub {
            margin-top: 0 !important;

            @apply bg-gray-800 rounded-br-md rounded-bl-md pt-1 transition-all mb-1;

            .k-menu-item {
                @apply mb-0;
            }
        }
    }
</style>
