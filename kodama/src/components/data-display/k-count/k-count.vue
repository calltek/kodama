<template>
    <span v-if="hasSlot('default')" class="position-relative">
        <slot />
        <span :class="badgeClasses">
            {{ value }}
        </span>
    </span>
    <span v-else :class="badgeClasses">
        {{ value }}
    </span>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import props from './k-count.props'
    import { parseBadgeClasses } from './k-count.utils'

    export default defineComponent({
        name: 'KCount',
        autoload: true,
        props: props,
        setup(props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]
            const badgeClasses = parseBadgeClasses(props, slots)

            return { hasSlot, badgeClasses }
        }
    })
</script>

<style scoped></style>
