<template>
    <div class="menu-item px-3" @click="$emit('click')">
        <div class="menu-link px-3">
            <template v-if="!hasSlot('default')">{{ title }}</template>
            <slot v-else></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KDropdownMenu',
        autoload: true,
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        emits: ['click'],
        setup(_props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]
            return { hasSlot }
        }
    })
</script>

<style scoped></style>
