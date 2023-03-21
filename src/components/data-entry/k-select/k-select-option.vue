<template>
    <option :value="value" :selected="selected">
        <slot></slot>
    </option>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KSelectOption',
        props: {
            value: {
                required: true,
                description: 'Valor del elemento'
            },
            selected: {
                type: Boolean,
                default: false,
                description: 'Indica si el elemento está seleccionado'
            }
        },
        setup() {
            return {}
        }
    })
</script>

<style scoped></style>
