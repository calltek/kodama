<template>
    <component :is="tag" :id="buttonId" v-bind="$attrs">
        <slot></slot>
    </component>

    <div
        :id="tooltipId"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
        <template v-if="hasSlot('content')">
            <slot name="content"></slot>
        </template>
        <template v-else>
            {{ title }}
        </template>

        <div v-if="arrow" class="tooltip-arrow" data-popper-arrow></div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref, Ref, watch } from 'vue'
    import { Tooltip } from 'flowbite'
    import type { TooltipOptions } from 'flowbite'
    import { uid } from '../../../helpers/utils'

    export default defineComponent({
        name: 'KTooltip',
        props: {
            title: {
                type: String,
                default: 'Tooltip'
            },
            placement: {
                type: String as () => TooltipOptions['placement'],
                default: 'top',
                options: ['top', 'bottom', 'left', 'right']
            },
            hover: {
                type: Boolean,
                default: true
            },
            click: {
                type: Boolean,
                default: false
            },
            arrow: {
                type: Boolean,
                default: true
            },
            visible: {
                type: Boolean,
                default: undefined
            },
            disabled: {
                type: Boolean,
                default: false
            },
            tag: {
                type: String,
                default: 'span'
            }
        },
        setup(props, { slots }) {
            const tooltipId = uid()
            const buttonId = uid()

            const tooltip: Ref<Tooltip | null> = ref(null)
            const hasSlot = (name: string) => !!slots[name]

            const method =
                props.visible !== undefined
                    ? 'none'
                    : props.click
                    ? 'click'
                    : props.hover
                    ? 'hover'
                    : 'none'

            const options: TooltipOptions = {
                placement: props.placement,
                triggerType: method,
                onShow: () => {
                    if (props.disabled) {
                        tooltip.value?.hide()
                    }
                }
            }

            const init = () => {
                const $targetEl = document.getElementById(tooltipId)
                const $triggerEl = document.getElementById(buttonId)

                tooltip.value = new Tooltip($targetEl, $triggerEl, options)
            }

            onMounted(() => {
                init()
            })

            watch(
                () => props.visible,
                (value) => {
                    if (value) {
                        tooltip.value?.show()
                    } else {
                        tooltip.value?.hide()
                    }
                }
            )

            return { tooltipId, buttonId, hasSlot }
        }
    })
</script>

<style scoped></style>
