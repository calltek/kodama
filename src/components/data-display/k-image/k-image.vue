<template>
    <div class="k-image" :style="style" :class="{ 'k-image-zoom': zoom }">
        <img ref="img" :src="src" data-zoom :style="styleImg" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, onMounted, ref } from 'vue'
    import mediumZoom from 'medium-zoom'

    export default defineComponent({
        name: 'KImage',
        autoload: true,
        props: {
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
            }
        },
        setup(props) {
            const img = ref()

            const style = computed(() => {
                const s: any = {}

                s.height = `${props.size}px`
                s.width = `${props.size}px`

                return s
            })

            const styleImg = computed(() => {
                const s: any = {}

                s.maxHeight = `${props.size * 2}px`
                s.maxWidth = `${props.size * 2}px`

                return s
            })

            onMounted(() => {
                if (props.zoom)
                    mediumZoom(img.value, {
                        background: 'rgba(0, 0, 0, 0.8)'
                    })
            })

            return { img, style, styleImg }
        }
    })
</script>

<style lang="scss">
    .k-image {
        @apply overflow-hidden rounded-xl flex items-center justify-center transition-all aspect-square max-w-full;

        img {
            @apply h-full object-cover;
        }

        &.k-image-zoom:hover {
            transform: scale(1.1);
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
