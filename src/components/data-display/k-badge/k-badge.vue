<template>
    <span :id="id" :class="badgeClasses">
        <slot />
    </span>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import props from './k-badge.props'
    import { parseClasses } from './k-badge.utils'

    export default defineComponent({
        name: 'KBadge',
        autoload: true,
        props: props,
        setup(props) {
            const badgeClasses = computed(() => {
                return parseClasses(props)
            })

            return { badgeClasses }
        }
    })
</script>

<style scoped></style>
