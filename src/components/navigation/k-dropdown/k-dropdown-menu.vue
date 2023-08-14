<template>
    <li :class="{ selected: selected }">
        <slot></slot>
    </li>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KDropdownMenu',
        props: {
            selected: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            return {}
        }
    })
</script>

<style scoped></style>
