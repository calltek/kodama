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
            :color="themeColor"
            :z-index="zIndex"
            :blur="`${blur}px`"
            :on-cancel="$emit('cancel')"
        />

        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType } from 'vue'

    import 'vue-loading-overlay/dist/vue-loading.css'
    import Loading from 'vue-loading-overlay'
    import { useStyle } from '@/store'

    type Loader = 'spinner' | 'bars' | 'dots'

    export default defineComponent({
        name: 'KLoading',
        components: { Loading },
        autoload: true,
        props: {
            active: {
                type: Boolean,
                default: false,
                description: 'Show or hide the loader'
            },
            type: {
                type: String as PropType<Loader>,
                default: 'bars',
                description: 'Type of loader',
                options: ['spinner', 'bars', 'dots'],
                validator: (value: Loader) => {
                    return ['spinner', 'bars', 'dots'].includes(value)
                },
                control: 'inline-radio'
            },
            fullpage: {
                type: Boolean,
                default: false,
                description: 'Show the loader as full page'
            },
            color: {
                type: String,
                default: '',
                description: 'Color del spinner'
            },
            blur: {
                type: Number,
                default: 2,
                description: 'Aplica efecto desenfocado'
            },
            height: {
                type: Number,
                default: 0,
                description: 'Altura mínima del contenedor'
            },
            zIndex: {
                type: Number,
                default: 99,
                description: 'ZIndex del loader'
            }
        },
        emits: ['cancel'],
        setup(props, ctx) {
            const style = useStyle()

            const hasCancel = computed(() => {
                if (ctx?.attrs?.onCancel) return true
                return false
            })

            const themeColor = computed(() => {
                const color = style.getColor(props.color)

                if (color) return color
                return '#000'
            })

            return { hasCancel, themeColor }
        }
    })
</script>

<style scoped></style>
