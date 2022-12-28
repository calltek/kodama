<template>
    <span class="price">{{ price }} €</span>
</template>

<script lang="ts">
    import { computed, defineComponent } from 'vue'

    export default defineComponent({
        name: 'KTablePrice',
        props: {
            value: {
                type: [String, Number],
                default: ''
            }
        },
        setup(props) {
            const price = computed(() => {
                let price = props.value
                if (typeof price === 'string') price = parseFloat(price)

                return price.toFixed(2).replace('.', ',')
            })

            return { price }
        }
    })
</script>

<style scoped></style>
