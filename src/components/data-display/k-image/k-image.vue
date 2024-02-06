<template>
    <div
        class="k-image"
        :style="style"
        :class="{ 'k-image-zoom': zoom, 'k-image-circle': circle }"
    >
        <img
            ref="img"
            :src="thumb"
            data-zoom
            :data-zoom-src="src"
            :style="style"
            class="object-cover"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, onMounted, ref } from 'vue'
    import mediumZoom from 'medium-zoom'

    export default defineComponent({
        name: 'KImage',
        autoload: true,
        props: {
            thumbnail: {
                type: String,
                default: '',
                description: 'Thumbnail de la imagen'
            },
            src: {
                type: String,
                default: '',
                description: 'Url de la imagen'
            },
            size: {
                type: Number,
                default: 80,
                description: 'Tamaño en px'
            },
            zoom: {
                type: Boolean,
                default: true,
                description: 'Zoom'
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
            }
        },
        setup(props) {
            const img = ref()

            const thumb = computed(() => {
                if (props.thumbnail) return props.thumbnail
                return props.src
            })

            const style = computed(() => {
                const s: any = {}

                s.height = `${props.size}px`
                s.width = `${props.size}px`

                return s
            })

            onMounted(() => {
                if (props.zoom) {
                    const zoom = mediumZoom(img.value, {
                        background: 'rgba(0, 0, 0, 0.8)'
                    })

                    zoom.on('open', (event: any) => {
                        event.target.style.height = 'auto'
                        event.target.style.width = 'auto'
                    })
                    zoom.on('opened', (event: any) => {
                        event.target.style.height = `${props.size}px`
                        event.target.style.width = `${props.size}px`
                    })
                }
            })

            return { img, style, thumb }
        }
    })
</script>

<style lang="scss">
    .k-image {
        @apply overflow-hidden rounded-xl flex items-center justify-center transition-all  max-w-full;

        // img {
        //     @apply object-cover;
        // }

        &.k-image-zoom:hover {
            transform: scale(1.1);
        }

        &.k-image-circle {
            @apply rounded-full;
        }
    }

    .medium-zoom-overlay {
        z-index: 99;
    }

    .medium-zoom-image--opened {
        z-index: 100;
        // width: auto !important;
    }
</style>
