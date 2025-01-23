<template>
    <k-tooltip
        arrow
        interactive
        :hide-on-click="false"
        trigger="mouseenter"
        theme="dropdown"
        tag="li"
        :placement="placement"
    >
        <template #default>
            <div class="flex flex-row items-center">
                <slot></slot>
                <div class="ml-auto"></div>
                <k-icon
                    icon="chevron-right"
                    class="ml-2"
                    type="fas"
                    :size="12"
                ></k-icon>
            </div>
        </template>

        <template #content="{ hide }">
            <ul
                class="k-dropdown-items text-base text-gray-700 dark:text-gray-200 text-left"
                :style="ulStyle"
                @click="hide"
            >
                <slot name="content"></slot>
            </ul>
        </template>
    </k-tooltip>
</template>

<script lang="ts">
    import { computed, defineComponent } from 'vue'
    import {
        KTooltipPlacement,
        KTooltipPlacementOptions
    } from './k-dropdown.vue'

    export default defineComponent({
        name: 'KDropdownSubmenu',
        props: {
            placement: {
                type: String as () => KTooltipPlacement,
                default: 'right-start',
                options: KTooltipPlacementOptions
            },
            trigger: {
                type: String,
                default: 'focusin',
                options: ['click', 'mouseenter', 'focus', 'manual', 'focusin']
            },
            tag: {
                type: String,
                default: 'div'
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
        setup(props) {
            // const onStateChange = (state: boolean) => {
            //     console.log('state', state)
            // }

            const ulStyle = computed((): Record<string, any> => {
                return {
                    maxHeight: props.maxHeight
                        ? `${props.maxHeight}px`
                        : 'auto',
                    overflowY: props.maxHeight ? 'auto' : 'visible'
                }
            })

            return { ulStyle }
        }
    })
</script>

<style scoped></style>
