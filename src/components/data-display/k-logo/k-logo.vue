<template>
    <img :src="src" :style="{ height: `${height}px` }" :class="$style.logo" />
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import { useConfig } from '../../../store'

    export default defineComponent({
        name: 'KLogo',
        autoload: true,
        props: {
            dark: {
                type: Boolean,
                default: false,
                description: 'Define el modo oscuro'
            },
            light: {
                type: Boolean,
                default: false,
                description: 'Define el modo claro'
            },
            side: {
                type: Boolean,
                default: false,
                description: 'Degine el modo alargado'
            },
            height: {
                type: Number,
                default: 40,
                description: 'Altura especificada'
            }
        },
        setup(props) {
            const config = useConfig()

            const darkMode = computed(() => {
                return config.get('darkMode')
            })

            const src = computed(() => {
                const logo_dark = config.get('logo.dark')
                const logo = config.get('logo.light')
                const sidelogo_dark = config.get('logo.side_dark')
                const sidelogo = config.get('logo.side_light')

                if (props.dark) {
                    if (props.side) return sidelogo_dark
                    return logo_dark
                } else if (props.light) {
                    if (props.side) return sidelogo
                    return logo
                } else {
                    if (darkMode.value) {
                        if (props.side) return sidelogo_dark
                        return logo_dark
                    } else {
                        if (props.side) return sidelogo
                        return logo
                    }
                }
            })

            return { src }
        }
    })
</script>

<style lang="scss" module>
    .logo {
        object-fit: contain;
    }
</style>
