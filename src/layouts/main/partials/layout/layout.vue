<template>
    <k-loading
        :active="loading"
        :fullpage="loadingFullpage"
        overlay-classes="rounded-tl-3xl"
        class="flex-1 flex flex-col"
    >
        <div id="k-layout">
            <div id="k-layout-wrapper">
                <div id="k-layout-leftbar">
                    <div
                        v-if="breads || parsedBreads.length > 0"
                        id="k-layout-breads"
                    >
                        <router-link :to="homepage">
                            <k-title :size="5" class="k-layout-bread">
                                <k-icon icon="home" />
                            </k-title>
                        </router-link>

                        <div class="k-layout-separator">
                            <k-icon icon="chevron-right" />
                        </div>

                        <template v-for="(b, i) in parsedBreads" :key="i">
                            <router-link :to="b.route">
                                <k-title :size="5" class="k-layout-bread">
                                    {{ b.title }}
                                </k-title>
                            </router-link>

                            <div class="k-layout-separator">
                                <k-icon icon="chevron-right" />
                            </div>
                        </template>
                    </div>

                    <k-title :size="5" class="k-layout-title">
                        {{ pageTitle }}
                    </k-title>
                </div>

                <div id="k-layout-topbar">
                    <slot name="topbar"> </slot>
                </div>

                <div id="k-layout-topbar-mobile">
                    <slot name="topbar-mobile"> </slot>
                </div>
            </div>
        </div>

        <div id="k-layout-content">
            <div class="flex flex-1">
                <slot></slot>
            </div>

            <div class="mt-4 -mb-5 -mx-5">
                <slot v-if="hasSlot('footer')" name="footer"></slot>
                <k-footer v-else />
            </div>
        </div>
    </k-loading>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType } from 'vue'
    import KFooter from '../layout/footer.vue'
    import { RouteLocationRaw, useRoute } from 'vue-router'
    import { homepage } from '@/helpers/config'

    type Bread = {
        title: string
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
                type: [Array, Boolean] as PropType<Bread[] | boolean>,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingFullpage: {
                type: Boolean,
                default: false
            }
        },
        setup(props, ctx) {
            const route = useRoute()

            const hasSlot = (name: string) => !!ctx.slots[name]

            const pageTitle = computed(() => {
                return props.title || route.meta.title || ''
            })

            const parsedBreads = computed(() => {
                if (props.breads && Array.isArray(props.breads)) {
                    return props.breads
                        .map((b) => {
                            return {
                                title: b.title,
                                route: b.route
                            }
                        })
                        .filter((b) => b.title && b.route)
                }

                return []
            })

            return {
                pageTitle,
                parsedBreads,
                homepage,
                hasSlot
            }
        }
    })
</script>

<style lang="scss" scoped>
    #k-layout {
        @apply flex bg-sidebar;

        #k-layout-wrapper {
            @apply py-4 px-4 flex flex-row items-center dark:bg-gray-800 bg-white w-full rounded-tl-3xl h-16 overflow-hidden text-gray-800 dark:text-gray-200;

            #k-layout-leftbar {
                @apply flex justify-center flex-row select-none;

                #k-layout-breads {
                    @apply flex flex-row items-center;

                    .k-layout-bread {
                        @apply text-gray-400 hover:text-gray-700 dark:text-gray-600 dark:hover:text-white;
                    }

                    .k-layout-separator {
                        @apply text-gray-400 dark:text-gray-600 px-2;
                    }
                }

                .k-layout-title {
                    @apply text-gray-600 dark:text-gray-300;
                }
            }

            #k-layout-topbar {
                @apply hidden lg:flex border-l flex-1 border-gray-100 dark:border-gray-700 ml-5 pl-5 font-semibold items-center;
            }

            #k-layout-topbar-mobile {
                @apply flex lg:hidden border-l flex-1 border-gray-100 dark:border-gray-700 ml-5 pl-5 font-semibold items-center;
            }
        }
    }

    #k-layout-content {
        @apply flex flex-1 flex-col p-5 overflow-x-auto;
    }
</style>
