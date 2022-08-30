<template>
    <div class="rounded-4" :class="$style.image">
        <img ref="img" :src="value" data-zoom />
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue'
    import mediumZoom from 'medium-zoom'

    export default defineComponent({
        name: 'KTableImage',
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        setup(props) {
            const img = ref()

            onMounted(() => {
                mediumZoom(img.value)
            })

            return { props, img }
        }
    })
</script>

<style module lang="scss">
    .image {
        width: 50px;
        height: 50px;
        background-color: white;
        box-shadow: 0px 0px 8px 1px var(--bs-gray-300);
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
