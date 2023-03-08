<template>
    <div
        :id="modalId"
        tabindex="-1"
        aria-hidden="true"
        :class="defaultModalClasses"
    >
        <div class="relative w-full h-full md:h-auto" :class="contentClasses">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div
                    v-if="header && (title || hasSlot('header'))"
                    class="flex items-center px-6 py-5 border-b rounded-t dark:border-gray-600"
                >
                    <template v-if="hasSlot('header')">
                        <slot name="header"></slot>
                    </template>
                    <template v-else>
                        <k-title :size="5" class="font-semibold">
                            {{ title }}
                        </k-title>
                    </template>

                    <button
                        v-if="closable"
                        type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 text-sm flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white ml-auto"
                        @click="hide"
                    >
                        <k-icon icon="times" />
                        <span class="sr-only">Close menu</span>
                    </button>
                </div>

                <div class="p-6">
                    <slot></slot>
                </div>

                <div
                    v-if="hasSlot('footer')"
                    class="flex items-center px-6 py-5 border-t border-gray-200 rounded-b dark:border-gray-600"
                >
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, ref, Ref, watch } from 'vue'
    import { Modal, ModalOptions } from 'flowbite'
    import { uid } from '../../../helpers/utils'

    export default defineComponent({
        name: 'KModal',
        props: {
            modelValue: {
                type: Boolean,
                default: false,
                description: 'Controla la apertura del modal'
            },
            title: {
                type: String,
                default: '',
                description: 'Título del modal'
            },
            placement: {
                type: String as () => ModalOptions['placement'],
                default: 'top',
                options: [
                    'top-left',
                    'top-center',
                    'top-right',
                    'center-left',
                    'center-center',
                    'center-right',
                    'bottom-left',
                    'bottom-center',
                    'bottom-right'
                ],
                description: 'Posición del modal'
            },
            header: {
                type: Boolean,
                default: true,
                description: 'Permite mostrar u ocultar el header del modal'
            },
            closable: {
                type: Boolean,
                default: true,
                description:
                    'Permite cerrar el modal desde el backdrop o clicando en el botón de cerrar'
            },
            backdropClose: {
                type: Boolean,
                default: true,
                description: 'Permite cerrar el modal desde el backdrop'
            },
            size: {
                type: String,
                default: 'lg',
                options: ['sm', 'md', 'lg', 'xl'],
                description: 'Tamaño del modal'
            }
        },
        emits: ['update:modelValue', 'show', 'hide', 'toggle'],
        setup(props, ctx) {
            const modalId = uid()

            const modal: Ref<Modal | null> = ref(null)
            const hasSlot = (name: string) => !!ctx.slots[name]

            const renderOptions = () => {
                const options: ModalOptions = {
                    placement: props.placement,
                    backdrop: props.backdropClose ? 'dynamic' : 'static',
                    backdropClasses:
                        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
                    closable: props.closable,
                    onHide: () => {
                        ctx.emit('update:modelValue', false)
                        ctx.emit('hide')
                    },
                    onShow: () => {
                        ctx.emit('update:modelValue', true)
                        ctx.emit('show')
                    },
                    onToggle: () => {
                        ctx.emit('toggle')
                    }
                }

                return options
            }

            const init = () => {
                const $targetEl = document.getElementById(modalId)
                const options = renderOptions()

                modal.value = new Modal($targetEl, options)

                if (props.modelValue) {
                    modal.value.show()
                } else {
                    modal.value.hide()
                }
            }

            const hide = () => {
                ctx.emit('update:modelValue', false)
            }

            watch(
                () => props.modelValue,
                (value) => {
                    if (value) {
                        modal.value?.show()
                    } else {
                        modal.value?.hide()
                    }
                    ctx.emit('update:modelValue', value)
                }
            )

            watch(
                () => props.placement,
                (value) => {
                    const $targetEl = document.getElementById(modalId)
                    if ($targetEl) {
                        $targetEl.className = defaultModalClasses
                    }

                    init()
                }
            )

            const defaultModalClasses =
                'fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full'

            const contentClasses = computed(() => {
                const classes = []

                if (props.size === 'xs') {
                    classes.push('max-w-md')
                } else if (props.size === 'sm') {
                    classes.push('max-w-xl')
                } else if (props.size === 'md') {
                    classes.push('max-w-2xl')
                } else if (props.size === 'lg') {
                    classes.push('max-w-4xl')
                } else if (props.size === 'xl') {
                    classes.push('max-w-5xl')
                }

                return classes
            })

            onMounted(() => {
                init()
            })

            return {
                modalId,
                hasSlot,
                hide,
                defaultModalClasses,
                contentClasses
            }
        }
    })
</script>

<style scoped></style>
