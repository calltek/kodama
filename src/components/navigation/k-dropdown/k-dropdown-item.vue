<template>
    <li>
        <a
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
            @click="$emit('click')"
        >
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
