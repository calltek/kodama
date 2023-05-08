<template>
    <k-price :value="value" />
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KTablePrice',
        props: {
            value: {
                type: [String, Number],
                default: ''
            }
        },
        setup() {
            return {}
        }
    })
</script>

<style scoped></style>
