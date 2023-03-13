<template>
    <div
        :id="drawerId"
        class="fixed z-40 max-w-full p-4 transition-transform bg-white dark:bg-gray-800"
        tabindex="-1"
        :class="classes"
        :style="styles"
    >
        <div class="flex flex-col h-full">
            <div
                class="flex flex-row items-center border-b dark:border-gray-600 mb-4 pb-4 justify-between -mx-4 px-4"
            >
                <template v-if="hasSlot('header')">
                    <slot name="header"></slot>
                </template>
                <h5
                    v-else
                    class="text-base font-semibold text-gray-500 dark:text-gray-400 overflow-hidden"
                >
                    {{ title }}
                </h5>

                <k-button
                    icon="times"
                    color="black"
                    neon
                    size="md"
                    @click="hide"
                />
            </div>

            <div class="flex flex-1">
                <slot></slot>
            </div>

            <div
                v-if="hasSlot('footer')"
                class="flex flex-row items-center border-t dark:border-gray-600 justify-between p-4 -mx-4 mt-auto"
            >
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { uid } from '@/helpers/utils'
    import { computed } from '@vue/reactivity'
    import { Drawer, DrawerOptions } from 'flowbite'
    import { defineComponent, onMounted, Ref, ref, watch } from 'vue'

    export default defineComponent({
        name: 'KDrawer',
        props: {
            modelValue: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: 'Drawer'
            },
            placement: {
                type: String as () => DrawerOptions['placement'],
                default: 'right',
                options: ['right', 'left', 'top', 'bottom']
            },
            backdrop: {
                type: Boolean,
                default: true
            },
            width: {
                type: Number,
                default: 360,
                description: 'Ancho del drawer en `px`'
            }
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const drawerId = uid()
            const drawer: Ref<Drawer | null> = ref(null)
            const hasSlot = (name: string) => !!ctx.slots[name]

            // options with default values
            const options: DrawerOptions = {
                placement: props.placement,
                backdrop: props.backdrop,
                bodyScrolling: false,
                edge: false,
                edgeOffset: '',
                backdropClasses:
                    'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
                onShow: () => {
                    ctx.emit('update:modelValue', true)
                },
                onHide: () => {
                    ctx.emit('update:modelValue', false)
                }
            }

            const classes = computed(() => {
                if (props.placement === 'right') {
                    return 'top-0 right-0 h-screen overflow-y-auto translate-x-full'
                } else if (props.placement === 'left') {
                    return 'top-0 left-0 h-screen overflow-y-auto -translate-x-full'
                } else if (props.placement === 'top') {
                    return 'top-0 left-0 right-0 w-full -translate-y-full '
                } else if (props.placement === 'bottom') {
                    return 'bottom-0 left-0 right-0 w-full overflow-y-auto transform-none'
                }
            })

            const styles = computed(() => {
                if (props.placement === 'right' || props.placement === 'left') {
                    return {
                        width: `${props.width}px`
                    }
                }

                return {}
            })

            const hide = () => {
                ctx.emit('update:modelValue', false)
            }

            onMounted(() => {
                const $targetEl = document.getElementById(drawerId)
                if ($targetEl) {
                    const $parentEl = $targetEl.parentNode

                    if ($parentEl) {
                        $parentEl.removeChild($targetEl)
                        document
                            .getElementsByTagName('body')[0]
                            .appendChild($targetEl)

                        drawer.value = new Drawer($targetEl, options)

                        if (props.modelValue) {
                            drawer.value?.show()
                        }
                    }
                }
            })

            watch(
                () => props.modelValue,
                (value) => {
                    if (value) {
                        drawer.value?.show()
                    } else {
                        drawer.value?.hide()
                    }

                    ctx.emit('update:modelValue', value)
                }
            )

            return { drawerId, hide, hasSlot, classes, styles }
        }
    })
</script>

<style scoped></style>
