<template>
    <div id="kt_header" class="header align-items-stretch">
        <div class="header-brand">
            <router-link to="/">
                <k-logo side dark :height="25" />
            </router-link>

            <div
                v-if="asideDisplay"
                id="kt_aside_toggle"
                class="btn btn-icon w-auto px-0 btn-active-color-primary aside-minimize"
                :class="{ active: asideMinimized }"
                data-kt-toggle="true"
                data-kt-toggle-state="active"
                data-kt-toggle-target="body"
                data-kt-toggle-name="aside-minimize"
            >
                <span class="svg-icon svg-icon-1 me-n1 minimize-default">
                    <i class="fa-duotone fa-arrow-right-to-bracket"></i>
                </span>

                <span class="svg-icon svg-icon-1 minimize-active">
                    <i class="fa-duotone fa-arrow-right-from-bracket"></i>
                </span>
            </div>

            <div
                class="flex align-items-center d-lg-none ms-n3 me-1"
                title="Show aside menu"
            >
                <div
                    id="kt_aside_mobile_toggle"
                    class="btn btn-icon btn-active-color-primary w-30px h-30px"
                >
                    <span class="svg-icon svg-icon-1">
                        <i class="fa-duotone fa-bars"></i>
                    </span>
                </div>
            </div>
        </div>

        <div
            class="toolbar flex align-items-stretch"
            :class="{
                'container-fluid': headerWidthFluid,
                'container-xxl': !headerWidthFluid
            }"
        >
            <div
                id="kt_toolbar_container"
                class="container-fluid py-6 px-0 py-lg-0 flex flex-row align-items-center justify-content-between"
            >
                <div
                    class="page-title flex justify-content-center flex-column me-5"
                >
                    <h1
                        class="flex align-items-center text-gray-900 fw-bolder my-1 fs-3"
                    >
                        {{ pageTitle }}
                    </h1>

                    <ul
                        v-if="breads"
                        class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
                    >
                        <li class="breadcrumb-item pe-3">
                            <router-link
                                to="/"
                                class="text-muted text-hover-primary"
                            >
                                Inicio
                            </router-link>
                        </li>

                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>

                        <template
                            v-for="(item, index) in parsedBreads"
                            :key="index"
                        >
                            <li class="breadcrumb-item">
                                <router-link
                                    :to="item.route"
                                    class="text-muted"
                                >
                                    {{ item.text }}
                                </router-link>
                            </li>

                            <li class="breadcrumb-item">
                                <span
                                    class="bullet bg-gray-200 w-5px h-2px"
                                ></span>
                            </li>
                        </template>

                        <li class="breadcrumb-item pe-3 text-gray-900">
                            {{ pageTitle }}
                        </li>
                    </ul>
                </div>

                <div class="d-none d-lg-flex">
                    <slot name="topbar"> </slot>
                </div>

                <div class="flex d-lg-none">
                    <slot name="topbar-mobile"> </slot>
                </div>
            </div>
        </div>
    </div>

    <div id="kt_content" class="content flex flex-column flex-column-fluid">
        <div class="post flex flex-column-fluid">
            <div
                id="kt_content_container"
                :class="{
                    'container-fluid': contentWidthFluid,
                    'container-xxl': !contentWidthFluid
                }"
            >
                <slot></slot>
            </div>
        </div>
    </div>

    <k-footer />
</template>

<script lang="ts">
    import { defineComponent, computed, PropType } from 'vue'
    import KFooter from './footer.vue'
    import { RouteLocationRaw, useRoute } from 'vue-router'

    import {
        headerWidthFluid,
        contentWidthFluid,
        asideDisplay,
        asideMinimized
    } from '../../../helpers/config'

    interface Bread {
        text: string
        route: RouteLocationRaw
    }

    export default defineComponent({
        name: 'KLayout',
        autoload: true,
        components: {
            KFooter
        },
        props: {
            title: {
                type: String,
                required: true
            },
            breads: {
                type: [Array, Boolean] as PropType<Bread[] | Boolean>,
                default: false
            }
        },
        setup(props) {
            const route = useRoute()

            const pageTitle = computed(() => {
                return props.title || route.meta.title || ''
            })

            const parsedBreads = computed(() => {
                if (props.breads && Array.isArray(props.breads)) {
                    return props.breads
                }

                return []
            })

            return {
                pageTitle,
                headerWidthFluid,
                contentWidthFluid,
                asideDisplay,
                asideMinimized,
                parsedBreads
            }
        }
    })
</script>

<style scoped></style>
