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
            <template v-for="(item, i) in filteredMenu" :key="i">
                <div v-if="item.heading" class="menu-item">
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
                    <template v-if="!menuItem.pages">
                        <div class="menu-item">
                            <!-- <router-link
                                :class="[
                                    'menu-link',
                                    menuItem.disabled
                                        ? 'opacity-40 cursor-not-allowed'
                                        : ''
                                ]"
                                active-class="active"
                                :to="!menuItem.disabled ? menuItem.route : {}"
                            >
                                <span v-if="menuItem.icon" class="menu-icon">
                                    <i
                                        :class="[menuItem.icon]"
                                        class="bi fs-3"
                                    ></i>
                                </span>
                                <span class="menu-title">{{
                                    menuItem.title
                                }}</span>
                            </router-link> -->

                            <menu-item :item="menuItem" :parent="true" />
                        </div>
                    </template>
                    <div
                        v-else
                        :class="{ show: hasActiveChildren(menuItem.route) }"
                        class="menu-item menu-accordion"
                        data-kt-menu-sub="accordion"
                        data-kt-menu-trigger="click"
                    >
                        <span class="menu-link">
                            <span v-if="menuItem.icon" class="menu-icon">
                                <i :class="[menuItem.icon]" class="bi fs-3"></i>
                            </span>
                            <span class="menu-title">{{ menuItem.title }}</span>
                            <span
                                v-if="menuItem.pages"
                                class="menu-arrow"
                            ></span>
                        </span>

                        <div
                            :class="{ show: hasActiveChildren(menuItem.route) }"
                            class="menu-sub menu-sub-accordion"
                        >
                            <template
                                v-for="(item2, k) in menuItem.pages"
                                :key="k"
                            >
                                <div
                                    v-if="item2.title"
                                    :class="{
                                        show: hasActiveChildren(item2.route)
                                    }"
                                    class="menu-item menu-accordion"
                                    data-kt-menu-sub="accordion"
                                    data-kt-menu-trigger="click"
                                >
                                    <!-- <router-link
                                        v-if="!item2.pages"
                                        :class="[
                                            'menu-link',
                                            item2.disabled
                                                ? 'opacity-40 cursor-not-allowed'
                                                : ''
                                        ]"
                                        active-class="active"
                                        :to="!item2.disabled ? item2.route : {}"
                                    >
                                        <span class="menu-bullet">
                                            <span
                                                class="bullet bullet-dot"
                                            ></span>
                                        </span>
                                        <span class="menu-title">{{
                                            item2.title
                                        }}</span>
                                        <span
                                            v-if="item2.pages"
                                            class="menu-arrow"
                                        ></span>
                                    </router-link>
                                    <span v-else class="menu-link">
                                        <span class="menu-bullet">
                                            <span
                                                class="bullet bullet-dot"
                                            ></span>
                                        </span>
                                        <span class="menu-title">{{
                                            item2.title
                                        }}</span>
                                        <span
                                            v-if="item2.pages"
                                            class="menu-arrow"
                                        ></span>
                                    </span> -->

                                    <menu-item :item="item2" />

                                    <div
                                        :class="{
                                            show: hasActiveChildren(item2.route)
                                        }"
                                        class="menu-sub menu-sub-accordion"
                                    >
                                        <template
                                            v-for="(item3, k) in item2.pages"
                                            :key="k"
                                        >
                                            <div class="menu-item">
                                                <!-- <router-link
                                                    :class="[
                                                        'menu-link',
                                                        item3.disabled
                                                            ? 'opacity-40 cursor-not-allowed'
                                                            : ''
                                                    ]"
                                                    active-class="active"
                                                    :to="
                                                        !item3.disabled
                                                            ? item3.route
                                                            : {}
                                                    "
                                                >
                                                    <span class="menu-bullet">
                                                        <span
                                                            class="bullet bullet-dot"
                                                        ></span>
                                                    </span>
                                                    <span class="menu-title">{{
                                                        item3.title
                                                    }}</span>
                                                </router-link> -->

                                                <menu-item :item="item3" />
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
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

    import { useAuth, useMenu } from '../../../../../store'
    import { version } from '../../../../../helpers/config'

    import MenuItem from './menu-item.vue'

    export default defineComponent({
        name: 'KdMenu',
        components: { MenuItem },
        setup() {
            const route = useRoute()
            const scrollElRef = ref<null | HTMLElement>(null)

            const auth = useAuth()
            const menu = useMenu()

            onMounted(() => {
                if (scrollElRef.value) {
                    scrollElRef.value.scrollTop = 0
                }
            })

            const hasActiveChildren = (match: RouteLocationRaw) => {
                return route.path.indexOf(match.toString()) !== -1
            }

            const filteredMenu = menu.filter((menu) => {
                if (menu.pages) {
                    const pages = (menu.pages = menu.pages.filter((page) => {
                        if (page.auth) {
                            const strict = page.auth.strict || true
                            const roles = page.auth.roles || []

                            const hasAccess = auth.checkRoles(strict, roles)
                            if (hasAccess) {
                                return page
                            }
                        } else {
                            return page
                        }
                    }))

                    if (pages.length > 0) {
                        menu.pages = pages

                        if (menu.auth) {
                            const strict = menu.auth.strict || true
                            const roles = menu.auth.roles || []

                            const hasAccess = auth.checkRoles(strict, roles)

                            if (hasAccess) {
                                return menu
                            }
                        } else {
                            return menu
                        }
                    }
                } else {
                    return menu
                }
            })

            return {
                hasActiveChildren,
                menu,
                version,
                scrollElRef,
                filteredMenu
            }
        }
    })
</script>
