<template>
    <span
        v-if="hasSlot('default')"
        class="relative -translate-y-3.5 h-7 text-xs"
        :title="value.toString()"
    >
        <slot />
        <span :class="badgeClasses" :style="badgeStyles">
            {{ text }}
        </span>
    </span>
    <span
        v-else
        :class="badgeClasses"
        :style="badgeStyles"
        :title="value.toString()"
    >
        {{ text }}
    </span>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import props from './k-count.props'
    import { parseBadgeClasses, parseBadgeStyles } from './k-count.utils'

    export default defineComponent({
        name: 'KCount',
        autoload: true,
        props: props,
        setup(props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]
            const badgeClasses = computed(() => parseBadgeClasses(props, slots))
            const badgeStyles = computed(() => parseBadgeStyles(props, slots))

            const text = computed(() => {
                if (props.value > 99) {
                    return '+99'
                }
                return props.value
            })

            return { hasSlot, badgeClasses, badgeStyles, text }
        }
    })
</script>

<style scoped lang="scss">
    .text-xxxs {
        font-size: 0.5rem;
        line-height: 0.75rem;
    }

    .text-xxs {
        font-size: 0.6rem;
        line-height: 0.8rem;
    }
</style>
