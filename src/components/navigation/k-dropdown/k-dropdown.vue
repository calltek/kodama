<template>
    <div :id="buttonId" class="inline-flex flex-row items-center">
        <slot></slot>
        <k-icon
            v-if="submenu"
            icon="chevron-right"
            type="fas"
            class="ml-auto"
            :size="10"
        ></k-icon>
    </div>

    <div :id="menuId" class="k-dropdown">
        <div
            v-if="hasSlot('header')"
            class="px-4 py-3 text-sm text-gray-900 dark:text-white"
        >
            <slot name="header"></slot>
        </div>

        <ul
            class="k-dropdown-items text-sm text-gray-700 dark:text-gray-200 text-left"
            :style="ulStyle"
        >
            <slot name="content"></slot>
        </ul>

        <div
            v-if="hasSlot('footer')"
            class="px-4 py-3 text-sm text-gray-900 dark:text-white"
        >
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { uid } from '@/helpers/utils'
    import { defineComponent, ref, Ref, onMounted, watch, computed } from 'vue'
    import { Dropdown } from 'flowbite'
    import type { DropdownOptions } from 'flowbite'

    export default defineComponent({
        name: 'KDropdown',
        autoload: true,
        props: {
            placement: {
                type: String as () => DropdownOptions['placement'],
                default: 'bottom',
                options: [
                    'top',
                    'bottom',
                    'left',
                    'left-start',
                    'left-end',
                    'right',
                    'right-start',
                    'right-end'
                ]
            },
            visible: {
                type: Boolean,
                default: undefined
            },
            hover: {
                type: Boolean,
                default: false
            },
            click: {
                type: Boolean,
                default: true
            },
            submenu: {
                type: Boolean,
                default: false
            },
            height: {
                type: Number,
                default: 0
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        emits: ['click'],
        setup(props, { slots }) {
            const menuId = uid()
            const buttonId = uid()

            const dropdown: Ref<Dropdown | null> = ref(null)
            const hasSlot = (name: string) => !!slots[name]

            const ulStyle = computed((): Record<string, any> => {
                return {
                    maxHeight: props.height ? `${props.height}px` : 'auto',
                    overflowY: props.height ? 'auto' : 'visible'
                }
            })

            const method =
                props.visible !== undefined
                    ? 'none'
                    : props.hover
                    ? 'hover'
                    : props.click
                    ? 'click'
                    : 'none'

            const options: DropdownOptions = {
                placement: props.placement,
                triggerType: method,
                offsetSkidding: 0,
                offsetDistance: props.submenu ? 30 : 10,
                delay: 300,
                onShow: () => {
                    if (props.disabled) {
                        dropdown.value?.hide()
                    }
                }
            }

            onMounted(() => {
                const $targetEl = document.getElementById(menuId)
                const $triggerEl = document.getElementById(buttonId)

                dropdown.value = new Dropdown($targetEl, $triggerEl, options)
            })

            watch(
                () => props.visible,
                (value) => {
                    if (value) {
                        if (!props.disabled) dropdown.value?.show()
                    } else {
                        dropdown.value?.hide()
                    }
                }
            )

            return { dropdown, menuId, buttonId, hasSlot, ulStyle }
        }
    })
</script>

<style lang="scss">
    .k-dropdown {
        min-width: 11rem;
        max-width: 20rem;

        @apply z-10 hidden bg-white divide-y divide-gray-100 dark:divide-gray-600  rounded-lg shadow dark:bg-gray-700 overflow-hidden;

        .k-dropdown-items {
            li {
                @apply border-b border-gray-200 dark:border-gray-600 last:border-0;
            }
        }
    }
</style>
