<template>
    <div id="k-layout" class="flex bg-sidebar">
        <div
            class="py-4 px-4 flex flex-row items-center dark:bg-gray-800 bg-white w-full rounded-tl-3xl h-16 overflow-hidden text-gray-800 dark:text-gray-200"
        >
            <div class="flex justify-center flex-row">
                <div id="k-layout-title">
                    <k-title :size="5" class="" bolder uppercase>
                        {{ pageTitle }}
                    </k-title>
                </div>
            </div>

            <div
                class="hidden lg:flex border-l border-gray-100 dark:border-gray-700 ml-5 pl-5 font-semibold"
            >
                <slot name="topbar"> </slot>
            </div>

            <div
                class="flex lg:hidden border-l border-gray-100 dark:border-gray-700 ml-5 pl-5 font-semibold"
            >
                <slot name="topbar-mobile"> </slot>
            </div>
        </div>
    </div>

    <div id="k-content" class="flex flex-1 p-5">
        <slot></slot>
    </div>

    <k-footer />
</template>

<script lang="ts">
    import { defineComponent, computed, PropType } from 'vue'
    import KFooter from '../layout/footer.vue'
    import { RouteLocationRaw, useRoute } from 'vue-router'

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
                type: [Array, Boolean] as PropType<Bread[] | boolean>,
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
                parsedBreads
            }
        }
    })
</script>

<style lang="scss" scoped>
    #k-layout {
    }
</style>
