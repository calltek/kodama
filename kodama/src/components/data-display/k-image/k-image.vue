<template>
    <div class="rounded-4" :class="$style.image" :style="style">
        <img ref="img" :src="src" data-zoom />
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
                default: ''
            },
            height: {
                type: Number,
                default: 50
            },
            shadow: {
                type: Boolean,
                default: true
            },
            zoom: {
                type: Boolean,
                default: true
            }
        },
        setup(props) {
            const img = ref()

            const style = computed(() => {
                const s: any = {}

                s.height = `${props.height}px`

                if (props.shadow) {
                    s.boxShadow =
                        'box-shadow: 0px 0px 8px 1px var(--bs-gray-300);'
                }

                return s
            })

            onMounted(() => {
                if (props.zoom) mediumZoom(img.value)
            })

            return { img, style }
        }
    })
</script>

<style module lang="scss">
    .image {
        background-color: white;
        padding: 3px;
        transition: transform 0.2s;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .image:hover {
        transform: scale(1.1);
    }
</style>
