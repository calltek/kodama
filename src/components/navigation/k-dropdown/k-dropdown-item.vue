<template>
    <li class="">
        <a @click="$emit('click')">
            <slot></slot>
        </a>
    </li>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KDropdownItem',
        emits: ['click'],
        setup() {
            return {}
        }
    })
</script>

<style scoped></style>
