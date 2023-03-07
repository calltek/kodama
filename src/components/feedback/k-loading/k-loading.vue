<template>
    <div
        :style="{
            'position': 'relative',
            'min-height': `${height}px`
        }"
    >
        <loading
            :active="active"
            :is-full-page="fullpage"
            :loader="type"
            color="#1A56DB"
            :z-index="zIndex"
            :on-cancel="$emit('cancel')"
            :background-color="backgroundColor"
        />

        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType } from 'vue'

    import 'vue-loading-overlay/dist/vue-loading.css'
    import Loading from 'vue-loading-overlay'
    import { useConfig } from '@/store'

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
                default: 'primary',
                description: 'Color del spinner'
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
            const config = useConfig()

            const backgroundColor = computed(() => {
                const darkMode = config.get('darkMode')

                if (darkMode.value) {
                    return '#1f2937'
                } else {
                    return '#F3F4F6'
                }
            })

            return { backgroundColor }
        }
    })
</script>

<style scoped></style>
