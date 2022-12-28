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
                description: 'Color del logo'
            },
            side: {
                type: Boolean,
                default: false,
                description: 'Tipo de logo'
            },
            height: {
                type: Number,
                default: 40,
                description: 'Altura del logo'
            }
        },
        setup(props) {
            const src = computed(() => {
                const config = useConfig()

                const logo_dark = config.get('logo.dark')
                const logo = config.get('logo.light')
                const sidelogo_dark = config.get('logo.side_dark')
                const sidelogo = config.get('logo.side_light')

                if (props.side && props.dark) {
                    return sidelogo_dark
                } else if (props.side && !props.dark) {
                    return sidelogo
                } else if (!props.side && props.dark) {
                    return logo_dark
                } else {
                    return logo
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
