<template>
    <div :class="classes">
        <label v-if="hasLabel" :for="uuid">
            <slot v-if="hasSlot('default')" />
            <template v-else>{{ label }}</template>

            <span v-if="required" class="font-bold text-danger ml-1">*</span>
            <template v-if="firstError">
                <k-tooltip hover :title="firstError">
                    <k-icon icon="triangle-exclamation" class="ml-2" />
                </k-tooltip>
            </template>
        </label>

        <textarea
            v-model="model"
            :disabled="disabled"
            :maxlength="maxLength"
            :placeholder="placeholder"
            :required="required"
            :style="style"
        >
        </textarea>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType } from 'vue'
    import { ErrorObject } from '@vuelidate/core'
    import { uid } from '@/helpers/utils'

    export default defineComponent({
        name: 'KInput',
        props: {
            modelValue: {
                type: [String, Number],
                required: false,
                default: '',
                description: 'Valor del input'
            },
            id: {
                type: String,
                required: false,
                default: '',
                description: 'ID único'
            },
            maxlength: {
                type: Number,
                required: false,
                default: 0,
                description: 'Longitud máxima'
            },
            placeholder: {
                type: String,
                required: false,
                default: '',
                description: 'Texto explicativo'
            },
            required: {
                type: Boolean,
                default: false,
                description: 'Indica si el campo es requerido'
            },
            label: {
                type: String,
                required: false,
                default: '',
                description: 'Etiqueta de definición'
            },
            size: {
                type: String,
                default: 'md',
                options: ['xs', 'sm', 'md', 'lg']
            },
            errors: {
                type: Array as PropType<ErrorObject[]>,
                required: false,
                default: () => [],
                description: 'Errores de validación'
            },
            status: {
                type: String,
                default: '',
                options: ['warning', 'success', 'danger'],
                description: 'Color de estado del input'
            },
            disabled: {
                type: Boolean,
                default: false,
                description: 'Indica si el control está deshabilitado'
            },
            width: {
                type: Number,
                default: 0,
                description: 'Ancho del control'
            },
            minHeight: {
                type: Number,
                default: 0,
                description: 'Altura mínima del control'
            }
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const maxLength = props.maxlength > 0 ? props.maxlength : undefined
            const uuid = props.id || uid()
            const hasSlot = (name: string) => !!ctx.slots[name]

            const model = computed({
                get() {
                    return props.modelValue
                },
                set(value: any) {
                    ctx.emit('update:modelValue', value)
                }
            })

            const classes = computed(() => {
                const classes = [
                    'k-input-textarea',
                    `k-input-textarea-${props.size}`
                ]

                if (props.errors.length > 0) {
                    classes.push('k-input-textarea-danger')
                } else if (props.status) {
                    classes.push(`k-input-textarea-${props.status}`)
                }

                return classes
            })

            const style = computed(() => {
                const style: any = {}

                if (props.width > 0) {
                    style.width = `${props.width}px`
                }

                if (props.minHeight > 0) {
                    style.minHeight = `${props.minHeight}px`
                }

                return style
            })

            const hasLabel = computed(() => {
                return props.label || hasSlot('default')
            })

            const change = (e: any) => {
                model.value = e.target.value
            }

            const firstError = computed(() => {
                const error =
                    props.errors.length > 0 ? props.errors[0].$message : ''
                return error.toString()
            })

            return {
                maxLength,
                uuid,
                classes,
                change,
                firstError,
                hasSlot,
                hasLabel,
                model,
                style
            }
        }
    })
</script>

<style lang="scss">
    .k-input-textarea {
        label {
            @apply mb-2 block select-none text-sm text-gray-500 dark:text-white font-semibold;
        }

        textarea {
            @apply block w-full border border-gray-200 bg-gray-100 text-gray-500 ring-inset outline-none ring-0 focus:border-gray-200 focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white;
        }

        /// /////////////////
        /// ERROR
        /// /////////////////

        &.k-input-textarea-danger {
            textarea {
                @apply ring-2 ring-danger focus:ring-danger;
            }

            label {
                @apply text-danger;
            }
        }

        &.k-input-textarea-success {
            textarea {
                @apply ring-2 ring-success focus:ring-success;
            }

            label {
                @apply text-success;
            }
        }

        &.k-input-textarea-warning {
            textarea {
                @apply ring-2 ring-warning focus:ring-warning;
            }

            label {
                @apply text-warning;
            }
        }

        /// /////////////////
        /// SIZES
        /// /////////////////

        &.k-input-textarea-xs {
            label {
                @apply text-xs;
            }

            textarea {
                @apply h-9 rounded-md px-2 py-1.5 text-xs;
            }
        }

        &.k-input-textarea-sm {
            label {
                @apply text-sm;
            }

            textarea {
                @apply h-10 rounded-md px-2.5 py-2 text-sm;
            }
        }

        &.k-input-textarea-md {
            label {
                @apply text-base;
            }

            textarea {
                @apply h-12 rounded-lg px-3 py-2.5 text-base;
            }
        }

        &.k-input-textarea-lg {
            label {
                @apply text-lg;
            }

            textarea {
                @apply h-14 rounded-xl px-4 py-3 text-lg;
            }
        }
    }
</style>
