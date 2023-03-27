<template>
    <div class="relative">
        <transition
            name="animated_fade"
            enter-active-class="animate__animated animate__faster animate__fadeIn"
            leave-active-class="animate__animated animate__faster animate__fadeOut"
        >
            <div
                v-if="active"
                class="flex z-50 top-0 left-0 w-full h-full items-center justify-center bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 cursor-progress"
                :class="{
                    fixed: fullpage,
                    absolute: !fullpage
                }"
            >
                <k-icon
                    icon="spinner-third"
                    spin
                    class="text-primary"
                    :size="40"
                />
            </div>
        </transition>

        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType } from 'vue'

    import { useConfig } from '@/store'

    type Loader = 'spinner' | 'bars' | 'dots'

    export default defineComponent({
        name: 'KLoading',
        // components: { Loading },
        autoload: true,
        props: {
            active: {
                type: Boolean,
                default: false,
                description: 'Show or hide the loader'
            },
            type: {
                type: String as PropType<Loader>,
                default: 'bars',
                description: 'Type of loader',
                options: ['spinner', 'bars', 'dots'],
                validator: (value: Loader) => {
                    return ['spinner', 'bars', 'dots'].includes(value)
                },
                control: 'inline-radio'
            },
            fullpage: {
                type: Boolean,
                default: false,
                description: 'Show the loader as full page'
            }
        },
        setup() {
            const config = useConfig()

            const backgroundColor = computed(() => {
                const darkMode = config.get('darkMode')

                if (darkMode.value) {
                    return '#1f2937'
                } else {
                    return '#F3F4F6'
                }
            })

            return { backgroundColor }
        }
    })
</script>

<style scoped></style>
