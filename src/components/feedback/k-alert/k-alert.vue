<template>
    <div v-show="!closed" :class="classes">
        <k-icon :icon="icon" :type="iconType" :size="iconSize" class="mr-2" />

        <div class="w-full">
            <div v-if="title" class="font-bold">{{ title }}</div>
            <slot></slot>
        </div>

        <slot v-if="hasSlot('close')" name="close"></slot>
        <div
            v-else-if="closable"
            class="ml-auto cursor-pointer self-start"
            @click="$emit('close')"
        >
            <button
                type="button"
                class="ml-4 -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 hover:bg-gray-200 hover:bg-opacity-20 justify-center items-center"
                @click="close"
            >
                <k-icon icon="times" type="fas"></k-icon>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, ref } from 'vue'

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
            iconSize: {
                type: Number,
                default: 0,
                description: 'Tamaño del icono'
            },
            type: {
                type: String,
                default: 'primary',
                options: ['primary', 'success', 'warning', 'danger'],
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
            },
            closable: {
                type: Boolean,
                default: false,
                description: 'Permite cerrar la alerta'
            }
        },
        setup(props, ctx) {
            const closed = ref(false)
            const hasSlot = (name: string) => !!ctx.slots[name]

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

            const close = () => {
                closed.value = true
                ctx.emit('close')
            }

            return {
                closed,
                classes,
                close,
                hasSlot
            }
        }
    })
</script>

<style lang="scss">
    .k-alert {
        @apply flex w-full p-4 mb-4 text-sm border rounded-lg text-white items-center;

        &-primary {
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

        &-primary.k-alert-outline {
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

        &-primary.k-alert-neon {
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
