<template>
    <span class="cursor-pointer user-select-none">
        <a v-if="value && value === 'asc'" @click="order(null)">
            <slot />

            <i class="fad fa-sort-up ms-2"></i>
        </a>

        <a v-else-if="value && value === 'desc'" @click="order('asc')">
            <slot />

            <i class="fad fa-sort-down ms-2"></i>
        </a>

        <a v-else @click="order('desc')">
            <slot />

            <i class="fal fa-sort ms-2"></i>
        </a>
    </span>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue'

    export default defineComponent({
        name: 'KTableOrderFilter',
        props: {
            value: {
                type: [String, null] as PropType<'asc' | 'desc' | null>,
                default: null
            }
        },
        emits: ['order'],
        setup(props, ctx) {
            const order = (order: 'asc' | 'desc' | null = null) => {
                ctx.emit('order', order)
            }

            return { order }
        }
    })
</script>

<style scoped></style>
