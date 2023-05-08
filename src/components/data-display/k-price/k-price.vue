<template>
    <k-badge :size="size" color="gray" class="font-consola text-gray-900" neon>
        {{ price }}{{ currency }}
    </k-badge>
</template>

<script lang="ts">
    import { computed, defineComponent } from 'vue'

    export default defineComponent({
        name: 'KPrice',
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            decimals: {
                type: Number,
                default: 2
            },
            currency: {
                type: String,
                default: '€'
            },
            size: {
                type: String,
                default: 'xs'
            }
        },
        setup(props) {
            const price = computed(() => {
                let price = props.value
                if (typeof price === 'string') price = parseFloat(price)

                return price.toFixed(props.decimals).replace('.', ',')
            })

            return { price }
        }
    })
</script>

<style scoped></style>
