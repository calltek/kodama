<template>
    <div :class="classes">
        <label v-if="hasLabel && !float" :for="uuid">
            <slot v-if="hasSlot('default')" />
            <template v-else>{{ label }}</template>

            <span v-if="required" class="font-bold text-danger ml-1">*</span>
            <template v-if="firstError">
                <k-tooltip :text="firstError" class="ml-2">
                    <k-icon icon="triangle-exclamation" />
                </k-tooltip>
            </template>
        </label>

        <input
            :id="uuid"
            type="text"
            :maxlength="maxLength"
            :placeholder="placeholderText"
            :required="required"
            :value="modelValue"
            @input="change"
        />

        <label v-if="hasLabel && float" :for="uuid">
            <slot v-if="hasSlot('default')" />
            <template v-else>{{ label || placeholder }}</template>

            <span v-if="required" class="font-bold text-danger ml-1">*</span>

            <template v-if="firstError">
                <k-tooltip :text="firstError" class="ml-2">
                    <k-icon icon="triangle-exclamation" />
                </k-tooltip>
            </template>
        </label>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType } from 'vue'
    import { ErrorObject } from '@vuelidate/core'
    import { uid } from '@/helpers/utils'

    export default defineComponent({
        name: 'KInputText',
        props: {
            modelValue: {
                type: String,
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
            float: {
                type: Boolean,
                default: false,
                description: 'Indica si el input tiene estilo flotante'
            },
            fieldset: {
                type: Boolean,
                default: false,
                description: 'Indica si el input tiene estilo fieldset'
            },
            errors: {
                type: Array as PropType<ErrorObject[]>,
                required: false,
                default: () => [],
                description: 'Errores de validación'
            },
            color: {
                type: String,
                default: '',
                options: ['warning', 'success', 'danger'],
                description: 'Color del input'
            }
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const maxLength = props.maxlength > 0 ? props.maxlength : undefined
            const uuid = props.id || uid()
            const hasSlot = (name: string) => !!ctx.slots[name]

            const classes = computed(() => {
                const classes = ['k-input-text', `k-input-text-${props.size}`]

                if (props.float) {
                    classes.push('k-input-text-floating')
                } else if (props.fieldset) {
                    classes.push('k-input-text-fieldset')
                }

                if (props.errors.length > 0) {
                    classes.push('k-input-text-danger')
                } else if (props.color) {
                    classes.push(`k-input-text-${props.color}`)
                }

                return classes
            })

            const hasLabel = computed(() => {
                return props.label || hasSlot('default')
            })

            const placeholderText = computed(() => {
                if (props.float) {
                    return (
                        props.placeholder ||
                        props.label ||
                        ctx.slots.default?.().toString()
                    )
                }

                return props.placeholder
            })

            const change = (e: any) => {
                const value = e.target.value

                ctx.emit('update:modelValue', value)
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
                placeholderText
            }
        }
    })
</script>

<style lang="scss">
    .k-input-text {
        input {
            @apply block w-full border border-gray-200 bg-gray-50 text-gray-500 outline-none ring-0 focus:border-gray-200 focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white;
        }

        label {
            @apply mb-2 block select-none text-sm text-gray-500 dark:text-white;
        }

        /// /////////////////
        /// ERROR
        /// /////////////////

        &.k-input-text-danger {
            input {
                @apply ring-2 ring-danger focus:ring-danger;
            }

            label {
                @apply text-danger;
            }
        }

        &.k-input-text-success {
            input {
                @apply ring-2 ring-success focus:ring-success;
            }

            label {
                @apply text-success;
            }
        }

        &.k-input-text-warning {
            input {
                @apply ring-2 ring-warning focus:ring-warning;
            }

            label {
                @apply text-warning;
            }
        }

        /// /////////////////
        /// SIZES
        /// /////////////////

        &.k-input-text-xs {
            label {
                @apply text-xs;
            }

            input {
                @apply h-9 rounded-md px-2 py-1.5 text-xs;
            }
        }

        &.k-input-text-sm {
            label {
                @apply text-sm;
            }

            input {
                @apply h-10 rounded-md px-2.5 py-2 text-sm;
            }
        }

        &.k-input-text-md {
            label {
                @apply text-base;
            }

            input {
                @apply h-12 rounded-lg px-3 py-2.5 text-base;
            }
        }

        &.k-input-text-lg {
            label {
                @apply text-lg;
            }

            input {
                @apply h-14 rounded-xl px-4 py-3 text-lg;
            }
        }

        // /////////////////
        /// STYLES
        /// ////////////////

        &.k-input-text-floating {
            @apply relative;

            input {
                &:focus,
                &:not(:placeholder-shown),
                &:-webkit-autofill {
                    & + label {
                        @apply -ml-0.5 -translate-y-3 -translate-x-6 scale-75 opacity-60;
                    }
                }

                &::placeholder {
                    color: transparent;
                }
            }

            label {
                @apply pointer-events-none absolute top-0 left-0 m-0 flex h-full w-full items-center text-ellipsis whitespace-nowrap border border-gray-300 border-opacity-0 text-start text-gray-300 transition-all;
            }

            &.k-input-text-danger {
                label {
                    @apply text-danger;
                }
            }

            &.k-input-text-success {
                label {
                    @apply text-success;
                }
            }

            &.k-input-text-warning {
                label {
                    @apply text-warning;
                }
            }

            &.k-input-text-xs {
                input {
                    @apply py-1.5;

                    &:focus,
                    &:not(:placeholder-shown),
                    &:-webkit-autofill {
                        @apply pt-5;

                        & + label {
                            @apply -translate-y-2 -translate-x-4;
                        }
                    }
                }

                label {
                    @apply px-2 py-1.5;
                }
            }

            &.k-input-text-sm {
                input {
                    @apply py-1.5 px-3.5;

                    &:focus,
                    &:not(:placeholder-shown),
                    &:-webkit-autofill {
                        @apply pt-5;

                        & + label {
                            @apply -translate-y-2 -translate-x-4;
                        }
                    }
                }

                label {
                    @apply px-2.5 py-2;
                }
            }

            &.k-input-text-md {
                input {
                    @apply py-3 px-3.5;

                    &:focus,
                    &:not(:placeholder-shown),
                    &:-webkit-autofill {
                        @apply pt-7;

                        & + label {
                            @apply -translate-y-2.5 -translate-x-5;
                        }
                    }
                }

                label {
                    @apply px-3 py-3;
                }
            }

            &.k-input-text-lg {
                input {
                    @apply py-4;

                    &:focus,
                    &:not(:placeholder-shown),
                    &:-webkit-autofill {
                        @apply pt-8;
                    }
                }

                label {
                    @apply p-4;
                }
            }
        }

        &.k-input-text-fieldset {
            @apply relative;

            label {
                @apply absolute top-0  text-ellipsis whitespace-nowrap bg-white dark:bg-dark font-medium text-gray-400;
            }

            input {
                @apply bg-opacity-0;
            }

            &.k-input-text-danger {
                label {
                    @apply text-danger;
                }
            }

            &.k-input-text-success {
                label {
                    @apply text-success;
                }
            }

            &.k-input-text-warning {
                label {
                    @apply text-warning;
                }
            }

            &.k-input-text-xs {
                label {
                    @apply ml-2.5 -mt-2 px-1;
                }
            }

            &.k-input-text-sm {
                label {
                    @apply ml-3 -mt-2.5 px-1.5;
                }
            }

            &.k-input-text-md {
                label {
                    @apply ml-4 -mt-3 px-2;
                }
            }

            &.k-input-text-lg {
                label {
                    @apply ml-5 -mt-4 px-3;
                }
            }
        }
    }
</style>
