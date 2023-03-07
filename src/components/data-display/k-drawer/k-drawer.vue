<template>
    <div
        :id="drawerId"
        class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800 flex flex-col"
        tabindex="-1"
        data-drawer-placement="bottom"
    >
        <div
            class="flex flex-row items-center border-b dark:border-gray-600 mb-4 pb-4 justify-between -mx-4 px-4"
        >
            <div v-if="hasSlot('header')">
                <slot name="header"></slot>
            </div>
            <h5
                v-else
                class="text-base font-semibold text-gray-500 dark:text-gray-400"
            >
                {{ title }}
            </h5>

            <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 text-sm flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                @click="hide"
            >
                <k-icon icon="times" />
                <span class="sr-only">Close menu</span>
            </button>
        </div>

        <div>
            <slot></slot>
        </div>

        <div
            v-if="hasSlot('footer')"
            class="flex flex-row items-center border-t dark:border-gray-600 justify-between px-4 pt-4 -mx-4 mt-auto"
        >
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { uid } from '@/helpers/utils'
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
            }
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const drawerId = uid()
            const drawer: Ref<Drawer | null> = ref(null)
            const hasSlot = (name: string) => !!ctx.slots[name]

            // options with default values
            const options = {
                placement: props.placement,
                backdrop: props.backdrop,
                bodyScrolling: false,
                edge: false,
                edgeOffset: '',
                backdropClasses:
                    'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30'
            }

            const hide = () => {
                ctx.emit('update:modelValue', false)
            }

            onMounted(() => {
                const $targetEl = document.getElementById(drawerId)

                drawer.value = new Drawer($targetEl, options)
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

            return { drawerId, hide, hasSlot }
        }
    })
</script>

<style scoped></style>
