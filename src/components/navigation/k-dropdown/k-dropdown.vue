<template>
    <k-tooltip
        ref="tooltip"
        arrow
        interactive
        :hide-on-click="false"
        :trigger="trigger"
        :placement="placement"
        theme="dropdown"
        :tag="tag"
        class="select-none"
    >
        <template #default>
            <slot></slot>
        </template>

        <template #content="{ hide }">
            <ul
                class="k-dropdown-items text-base text-gray-700 dark:text-gray-200 text-left"
                :style="ulStyle"
                @click="hide"
            >
                <k-dropdown-menu
                    v-if="hasSlot('header')"
                    class="px-4 py-3 text-gray-900 dark:text-white"
                >
                    <slot name="header"></slot>
                </k-dropdown-menu>

                <slot name="content"></slot>

                <k-dropdown-menu
                    v-if="hasSlot('footer')"
                    class="px-4 py-3 text-gray-900 dark:text-white"
                >
                    <slot name="footer"></slot>
                </k-dropdown-menu>
            </ul>
        </template>
    </k-tooltip>
</template>

<script lang="ts">
    import { computed, defineComponent, ref } from 'vue'

    export type KTooltipPlacement =
        | 'top'
        | 'top-start'
        | 'top-end'
        | 'right'
        | 'right-start'
        | 'right-end'
        | 'bottom'
        | 'bottom-start'
        | 'bottom-end'
        | 'left'
        | 'left-start'
        | 'left-end'
        | 'auto'
        | 'auto-start'
        | 'auto-end'

    export const KTooltipPlacementOptions = [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'auto',
        'auto-start',
        'auto-end'
    ]

    export default defineComponent({
        name: 'KDropdown',
        autoload: true,
        props: {
            placement: {
                type: String as () => KTooltipPlacement,
                default: 'bottom-end',
                options: KTooltipPlacementOptions
            },
            trigger: {
                type: String,
                default: 'focusin',
                options: ['click', 'mouseenter', 'focus', 'manual', 'focusin']
            },
            tag: {
                type: String,
                default: 'button'
            },
            maxHeight: {
                type: Number,
                default: 0
            },
            minWidth: {
                type: Number,
                default: 0
            },
            maxWidth: {
                type: Number,
                default: 0
            }
        },
        setup(props, { slots }) {
            const tooltip = ref()
            const hasSlot = (name: string) => !!slots[name]

            const hide = () => {
                if (tooltip.value) {
                    tooltip.value.hide()
                }
            }

            const show = () => {
                if (tooltip.value) {
                    tooltip.value.show()
                }
            }

            const ulStyle = computed((): Record<string, any> => {
                return {
                    maxHeight: props.maxHeight
                        ? `${props.maxHeight}px`
                        : 'auto',
                    overflowY: 'auto'
                }
            })

            return { hasSlot, ulStyle, tooltip, hide, show }
        }
    })
</script>

<style lang="scss"></style>
