<template>
    <!--begin::Menu wrapper-->
    <div
        id="kt_aside_menu_wrapper"
        ref="scrollElRef"
        class="hover-scroll-overlay-y px-2 my-5 my-lg-5"
        data-kt-scroll="true"
        data-kt-scroll-height="auto"
        data-kt-scroll-dependencies="{default: '#kt_aside_toolbar, #kt_aside_footer', lg: '#kt_header, #kt_aside_toolbar, #kt_aside_footer'}"
        data-kt-scroll-wrappers="#kt_aside_menu"
        data-kt-scroll-offset="5px"
    >
        <!--begin::Menu-->
        <div
            id="#kt_aside_menu"
            class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
            data-kt-menu="true"
        >
            <template v-for="(item, i) in menu" :key="i">
                <template v-if="checkRoles(item)">
                    <div
                        v-if="item.heading && hasOneAccess(item)"
                        class="menu-item"
                    >
                        <div class="menu-content pt-8 pb-2">
                            <span
                                class="menu-section text-muted text-uppercase fs-8 ls-1"
                            >
                                {{ item.heading }}
                            </span>
                        </div>
                    </div>
                    <div v-else-if="item.separator" class="menu-item">
                        <div class="menu-item">
                            <div class="menu-content">
                                <div class="separator mx-1 mt-4 pb-0"></div>
                            </div>
                        </div>
                    </div>
                    <template v-for="(menuItem, j) in item.pages" :key="j">
                        <template v-if="checkRoles(menuItem)">
                            <template v-if="!menuItem.pages">
                                <div class="menu-item">
                                    <menu-item
                                        :item="menuItem"
                                        :parent="true"
                                    />
                                </div>
                            </template>
                            <div
                                v-else-if="hasOneAccess(menuItem)"
                                :class="{
                                    show: hasActiveChildren(menuItem.route)
                                }"
                                class="menu-item menu-accordion"
                                data-kt-menu-sub="accordion"
                                data-kt-menu-trigger="click"
                            >
                                <span class="menu-link">
                                    <span
                                        v-if="menuItem.icon"
                                        class="menu-icon"
                                    >
                                        <i
                                            :class="[menuItem.icon]"
                                            class="bi fs-3"
                                        ></i>
                                    </span>
                                    <span class="menu-title">{{
                                        menuItem.title
                                    }}</span>
                                    <span
                                        v-if="menuItem.pages"
                                        class="menu-arrow"
                                    ></span>
                                </span>

                                <div
                                    :class="{
                                        show: hasActiveChildren(menuItem.route)
                                    }"
                                    class="menu-sub menu-sub-accordion"
                                >
                                    <template
                                        v-for="(item2, k) in menuItem.pages"
                                        :key="k"
                                    >
                                        <div
                                            v-if="
                                                item2.title && checkRoles(item2)
                                            "
                                            :class="{
                                                show: hasActiveChildren(
                                                    item2.route
                                                )
                                            }"
                                            class="menu-item menu-accordion"
                                            data-kt-menu-sub="accordion"
                                            data-kt-menu-trigger="click"
                                        >
                                            <menu-item :item="item2" />

                                            <div
                                                :class="{
                                                    show: hasActiveChildren(
                                                        item2.route
                                                    )
                                                }"
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
                                                        <menu-item
                                                            :item="item3"
                                                        />
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </template>
                    </template>
                </template>
            </template>
        </div>
        <!--end::Menu-->
    </div>
    <!--end::Menu wrapper-->
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue'
    import { RouteLocationRaw, useRoute } from 'vue-router'

    import { useMenu } from '../../../../../store'
    import { version } from '../../../../../helpers/config'

    import MenuItem from './menu-item.vue'

    export default defineComponent({
        name: 'KdMenu',
        components: { MenuItem },
        setup() {
            const route = useRoute()
            const scrollElRef = ref<null | HTMLElement>(null)

            const menu = useMenu()

            onMounted(() => {
                if (scrollElRef.value) {
                    scrollElRef.value.scrollTop = 0
                }
            })

            const hasActiveChildren = (match: RouteLocationRaw) => {
                return route.path.indexOf(match.toString()) !== -1
            }

            const checkRoles = (menu: any) => {
                if (menu.auth) return menu.auth
                return true
            }

            const hasOneAccess = (menu: any) => {
                if (menu.auth) return menu.auth

                if (menu.pages) {
                    for (let i = 0; i < menu.pages.length; i++) {
                        const page = menu.pages[i]

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

            return {
                hasActiveChildren,
                hasOneAccess,
                menu,
                version,
                scrollElRef,
                checkRoles
            }
        }
    })
</script>
