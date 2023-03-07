<template>
    <div class="" :class="classes">
        <k-icon :icon="icon" :type="iconType" class="mr-2" />

        <div>
            <div v-if="title" class="font-bold">{{ title }}</div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed } from '@vue/reactivity'
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KAlert',
        autoload: true,
        props: {
            title: {
                type: String,
                default: '',
                description: 'Texto de la ayuda'
            },
            icon: {
                type: String,
                default: 'seal-question',
                description: 'Icono'
            },
            iconType: {
                type: String,
                default: 'fad',
                description: 'Icono'
            },
            type: {
                type: String,
                default: 'info',
                options: ['info', 'success', 'warning', 'danger'],
                description: 'Tipo de alerta'
            },
            outline: {
                type: Boolean,
                default: false,
                description: 'Aplica el estilo `outline`'
            },
            neon: {
                type: Boolean,
                default: false,
                description: 'Aplica el estilo `neon`'
            }
        },
        setup(props) {
            const classes = computed(() => {
                const className: string[] = ['k-alert']

                if (props.type) {
                    className.push(`k-alert-${props.type}`)
                }

                if (props.outline) {
                    className.push('k-alert-outline')
                } else if (props.neon) {
                    className.push('k-alert-neon')
                }

                return className
            })

            return {
                classes
            }
        }
    })
</script>

<style lang="scss">
    .k-alert {
        @apply flex w-full p-4 mb-4 text-sm border rounded-lg text-white;

        &-info {
            @apply border-primary bg-primary;
        }

        &-success {
            @apply border-success bg-success;
        }

        &-warning {
            @apply border-warning bg-warning;
        }

        &-danger {
            @apply border-danger bg-danger;
        }

        // OUTLINE
        &.k-alert-outline {
            @apply bg-transparent;
        }

        &-info.k-alert-outline {
            @apply text-primary border-primary;
        }

        &-success.k-alert-outline {
            @apply text-success border-success;
        }

        &-warning.k-alert-outline {
            @apply text-warning border-warning;
        }

        &-danger.k-alert-outline {
            @apply text-danger border-danger;
        }

        // NEON
        &.k-alert-neon {
            @apply bg-opacity-20 dark:bg-opacity-10 border-opacity-0;
        }

        &-info.k-alert-neon {
            @apply text-primary;
        }

        &-success.k-alert-neon {
            @apply text-success;
        }

        &-warning.k-alert-neon {
            @apply text-warning;
        }

        &-danger.k-alert-neon {
            @apply text-danger;
        }
    }
</style>
