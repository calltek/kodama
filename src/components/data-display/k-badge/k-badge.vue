<template>
    <span :id="id" :class="badgeClasses">
        <slot />
    </span>
</template>

<script lang="ts">
    import { defineComponent, computed, onMounted } from 'vue'
    import props from './k-badge.props'

    export default defineComponent({
        name: 'KBadge',
        autoload: true,
        props: props,
        setup(props) {
            const badgeClasses = computed(() => {
                const classes: string[] = ['badge']

                if (props.light) {
                    classes.push(`badge-light-${props.color}`)
                } else {
                    classes.push(`badge-${props.color}`)
                }

                classes.push(`badge-${props.size}`)

                return classes
            })

            onMounted(() => {
                if (props.title) {
                    // tooltip
                }
            })

            return { badgeClasses }
        }
    })
</script>

<style scoped></style>
