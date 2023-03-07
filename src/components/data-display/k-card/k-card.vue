<template>
    <div :class="classes">
        <div v-if="hasSlot('header')" class="v-card-header">
            <slot name="header" />
        </div>

        <div class="v-card-body">
            <slot />
        </div>

        <div v-if="hasSlot('footer')" class="v-card-footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'KCard',
        props: {
            bordered: {
                type: Boolean,
                default: false
            },
            shadow: {
                type: Boolean,
                default: true
            }
        },
        setup(props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]

            const classes = computed(() => {
                let classes = ['v-card']

                if (props.bordered) {
                    classes.push('border border-gray-200')
                }

                if (props.shadow) {
                    classes.push('shadow-xl')
                }

                return classes
            })

            return { hasSlot, classes }
        }
    })
</script>

<style scoped lang="scss">
    .v-card {
        @apply bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl flex flex-col p-0;

        .v-card-header {
            @apply border-b border-b-gray-200 dark:border-b-gray-700 px-5 py-4 font-semibold;
        }

        .v-card-body {
            @apply p-5;
        }

        .v-card-footer {
            @apply border-t border-t-gray-200 px-5 py-4 dark:border-t-gray-700;
        }
    }
</style>
