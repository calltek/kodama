<template>
    <span
        v-if="value && value === 'asc'"
        class="cursor-pointer"
        @click="order(null)"
    >
        <slot />

        <div class="inline-block">
            <k-button size="sm" icon="sort-up" link color="primary" />
        </div>
    </span>

    <span
        v-else-if="value && value === 'desc'"
        class="cursor-pointer"
        @click="order('asc')"
    >
        <slot />

        <div class="inline-block">
            <k-button size="sm" icon="sort-down" link color="primary" />
        </div>
    </span>

    <span v-else class="cursor-pointer" @click="order('desc')">
        <slot />
        <div class="inline-block">
            <k-button size="sm" icon="sort" link color="gray" />
        </div>
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
