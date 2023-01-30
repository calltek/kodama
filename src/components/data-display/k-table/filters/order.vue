<template>
    <span class="cursor-pointer">
        <a v-if="value && value === 'asc'" @click="order(null)">
            <slot />

            <k-icon icon="sort-up" class="ml-2" />
        </a>

        <a v-else-if="value && value === 'desc'" @click="order('asc')">
            <slot />

            <k-icon icon="sort-down" class="ml-2" />
        </a>

        <a v-else @click="order('desc')">
            <slot />

            <k-icon icon="sort" class="ml-2" />
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
