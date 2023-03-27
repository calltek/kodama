<template>
    <div :class="classes">
        <transition
            name="animated_fade"
            enter-active-class="animate__animated animate__faster animate__fadeIn"
            leave-active-class="animate__animated animate__faster animate__fadeOut"
        >
            <div
                v-if="loading"
                class="flex z-50 absolute top-0 left-0 w-full h-full items-center justify-center bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 cursor-progress"
            >
                <k-icon
                    icon="spinner-third"
                    spin
                    class="text-primary"
                    :size="40"
                />
            </div>
        </transition>

        <div v-if="hasSlot('header')" class="k-card-header">
            <slot name="header" />
        </div>

        <div class="k-card-body">
            <slot />
        </div>

        <div v-if="hasSlot('footer')" class="k-card-footer">
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
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        setup(props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]

            const classes = computed(() => {
                let classes = ['k-card']

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
    .k-card {
        @apply bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl flex flex-col p-0 relative;

        .k-card-header {
            @apply border-b border-b-gray-200 dark:border-b-gray-700 px-5 py-4 font-semibold;
        }

        .k-card-body {
            @apply p-5 w-full flex-1;
        }

        .k-card-footer {
            @apply border-t border-t-gray-200 px-5 py-4 dark:border-t-gray-700;
        }
    }
</style>
