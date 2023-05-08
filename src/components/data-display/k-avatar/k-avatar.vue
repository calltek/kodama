<template>
    <img
        v-tooltip="{ content: tooltip ? name : undefined, placement: 'top' }"
        :src="src"
        :width="size"
        :height="size"
        :class="{
            'rounded-xl overflow-hidden': geo === 'square',
            'rounded-full overflow-hidden': geo === 'circle'
        }"
        :style="{
            backgroundColor: bgColor || undefined
        }"
    />
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'

    import { useConfig } from '@/store'

    export default defineComponent({
        name: 'KAvatar',
        autoload: true,
        props: {
            name: {
                type: String,
                default: '???',
                required: true,
                description: 'Nombre del avatar'
            },
            size: {
                type: Number,
                default: 120,
                description: 'Tamaño del avatar'
            },
            square: {
                type: Boolean,
                default: true,
                description: 'Define un estilo cuadrado'
            },
            circle: {
                type: Boolean,
                default: false,
                description: 'Define un estilo circular'
            },
            bgColor: {
                default: '',
                type: String,
                description: 'Color de fondo del avatar',
                control: 'color'
            },
            tooltip: {
                type: Boolean,
                default: true,
                description: 'Define si se muestra el tooltip'
            },
            tag: {
                type: String,
                default: 'span',
                description: 'Define el tag del componente'
            },
            type: {
                type: String,
                default: 'auto',
                description: 'Define el tipo de avatar'
            }
        },
        setup(props) {
            const config = useConfig()

            const geo = computed(() => {
                return props.circle ? 'circle' : 'square'
            })

            const src = computed(() => {
                let type = props.type

                if (props.type === 'auto') {
                    type = config.get('avatarType')
                }

                const baseUrl = `https://avatar.gestios.es/6.x/${type}/svg?seed=${props.name}`
                return baseUrl
            })

            return { geo, src }
        }
    })
</script>

<style scoped></style>
