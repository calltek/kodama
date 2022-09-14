<template>
    <div
        :style="{
            'position': 'relative',
            'min-height': `${height}px`
        }"
    >
        <loading
            :active="active"
            :can-cancel="hasCancel"
            :is-full-page="fullpage"
            :loader="type"
            :color="realColor"
            :z-index="zIndex"
            :blur="`${blur}px`"
            :on-cancel="$emit('cancel')"
        />

        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType } from 'vue'
    import { getCSSVariableValue } from '../../../assets/ts/_utils'

    type Loader = 'spinner' | 'bars' | 'dots'

    export default defineComponent({
        name: 'KLoading',
        autoload: true,
        props: {
            active: {
                type: Boolean,
                default: false
            },
            type: {
                type: String as PropType<Loader>,
                default: 'bars'
            },
            fullpage: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: ''
            },
            blur: {
                type: Number,
                default: 2
            },
            height: {
                type: Number,
                default: 0
            },
            zIndex: {
                type: Number,
                default: 99
            }
        },
        emits: ['cancel'],
        setup(props, ctx) {
            const realColor = computed(() => {
                if (props.color) return props.color
                return getCSSVariableValue('--bs-primary')
            })

            const hasCancel = computed(() => {
                if (ctx?.attrs?.onCancel) return true
                return false
            })

            return { realColor, hasCancel }
        }
    })
</script>

<style scoped></style>
