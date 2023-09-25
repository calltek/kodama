<template>
    <v-swatches
        v-model="model"
        class="k-input-color"
        :swatches="options.length > 0 ? options : undefined"
        :close-on-select="closeOnSelect"
        :disabled="disabled || readonly"
        :fallback-input-type="fallback"
        :row-length="rowLength"
        :show-fallback="fallback !== 'none'"
        :trigger-style="{
            cursor: cursor
        }"
    >
        <template #trigger>
            <div :class="[classes]">
                <label v-if="hasLabel" :for="uuid">
                    <slot v-if="hasSlot('default')" />
                    <template v-else>{{ label }}</template>

                    <span v-if="required" class="font-bold text-danger ml-1">
                        *
                    </span>
                    <template v-if="firstError">
                        <k-tooltip :content="firstError">
                            <k-icon icon="triangle-exclamation" class="ml-2" />
                        </k-tooltip>
                    </template>
                </label>

                <input
                    :id="uuid"
                    type="text"
                    :placeholder="placeholder"
                    :required="required"
                    :value="model"
                    :style="style"
                    :autofocus="autofocus"
                    :disabled="disabled"
                    readonly
                />

                <label v-if="hasLabel && float" :for="uuid">
                    <slot v-if="hasSlot('default')" />
                    <template v-else>{{ label || placeholder }}</template>

                    <span v-if="required" class="font-bold text-danger ml-1"
                        >*</span
                    >

                    <template v-if="firstError">
                        <k-tooltip hover :content="firstError">
                            <k-icon icon="triangle-exclamation" class="ml-2" />
                        </k-tooltip>
                    </template>
                </label>
            </div>
        </template>
    </v-swatches>
</template>

<script lang="ts">
    import { PropType, computed, defineComponent } from 'vue'
    import { ErrorObject } from '@vuelidate/core'
    import { VSwatches } from 'vue3-swatches'
    import 'vue3-swatches/dist/style.css'
    import { uid } from '@/helpers/utils'

    export default defineComponent({
        name: 'KInputColor',
        components: { VSwatches },
        props: {
            id: {
                type: String,
                default: ''
            },
            modelValue: {
                type: String,
                default: ''
            },
            options: {
                type: Array as () => string[],
                default: () => []
            },
            closeOnSelect: {
                type: Boolean,
                default: true
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            fallback: {
                type: String as () => 'input' | 'none' | 'color',
                default: 'color'
            },
            rowLength: {
                type: Number,
                default: 4
            },
            size: {
                type: String,
                default: 'md',
                options: ['xs', 'sm', 'md', 'lg']
            },
            placeholder: {
                type: String,
                default: ''
            },
            width: {
                type: Number,
                default: 0,
                description: 'Ancho del input'
            },
            status: {
                type: String,
                default: '',
                options: ['warning', 'success', 'danger'],
                description: 'Color de estado del input'
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
            label: {
                type: String,
                required: false,
                default: '',
                description: 'Etiqueta de definición'
            },
            errors: {
                type: Array as PropType<ErrorObject[]>,
                required: false,
                default: () => [],
                description: 'Errores de validación'
            }
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const uuid = props.id || uid()
            const hasSlot = (name: string) => !!ctx.slots[name]

            const model = computed({
                get() {
                    return props.modelValue
                },
                set(value) {
                    ctx.emit('update:modelValue', value)
                }
            })

            const cursor = computed(() => {
                if (props.disabled) return 'not-allowed'
                if (props.readonly) return 'initial'
                return 'pointer'
            })

            const style = computed(() => {
                const style: any = {}

                if (props.width > 0) {
                    style['width'] = props.width + 'px'
                }

                return style
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

            const classes = computed(() => {
                const classes = ['k-input-text', `k-input-text-${props.size}`]

                if (props.float) {
                    classes.push('k-input-text-floating')
                } else if (props.fieldset) {
                    classes.push('k-input-text-fieldset')
                }

                if (props.errors.length > 0) {
                    classes.push('k-input-text-danger')
                } else if (props.status) {
                    classes.push(`k-input-text-${props.status}`)
                }

                return classes
            })

            const firstError = computed(() => {
                const error =
                    props.errors.length > 0 ? props.errors[0].$message : ''
                return error.toString()
            })

            return {
                model,
                cursor,
                uuid,
                style,
                hasLabel,
                placeholderText,
                classes,
                firstError,
                hasSlot
            }
        }
    })
</script>

<style lang="scss">
    .vue-swatches.k-input-color {
        @apply block;

        .vue-swatches__trigger__wrapper {
            display: block;
        }
    }

    .k-input-text {
        @apply relative h-full;

        input {
            @apply block w-full border border-gray-200 bg-gray-100 text-gray-500 ring-inset outline-none ring-0 focus:border-gray-200 focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white;

            min-width: 4rem;

            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }
        }

        label {
            @apply mb-2 flex flex-row select-none text-sm text-gray-500 dark:text-white font-semibold;
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

            .k-input-control {
                @apply h-9 rounded-r-md;

                .k-input-icon {
                    @apply text-xs;
                }
            }
        }

        &.k-input-text-sm {
            label {
                @apply text-sm;
            }

            input {
                @apply h-10 rounded-md px-2.5 py-2 text-sm;
            }

            .k-input-control {
                @apply h-10 rounded-r-md;

                .k-input-icon {
                    @apply text-xs;
                }
            }
        }

        &.k-input-text-md {
            label {
                @apply text-base;
            }

            input {
                @apply h-12 rounded-lg px-3 py-2.5 text-base;
            }

            .k-input-control {
                @apply h-12 rounded-r-lg;

                .k-input-icon {
                    @apply text-base;
                }
            }
        }

        &.k-input-text-lg {
            label {
                @apply text-lg;
            }

            input {
                @apply h-14 rounded-xl px-4 py-3 text-lg;
            }

            .k-input-control {
                @apply h-14 rounded-r-xl;

                .k-input-icon {
                    @apply text-base;
                }
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
                @apply absolute top-0  text-ellipsis whitespace-nowrap bg-white dark:bg-gray-900 rounded-lg font-medium text-gray-400;
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
                    font-size: 0.5rem;
                    line-height: 0.75rem;

                    @apply ml-2.5 -mt-1.5 px-1;
                }
            }

            &.k-input-text-sm {
                label {
                    @apply ml-2.5 -mt-2 px-1.5 text-xs;
                }
            }

            &.k-input-text-md {
                label {
                    @apply ml-2.5 -mt-2.5 px-2 text-sm;
                }
            }

            &.k-input-text-lg {
                label {
                    @apply ml-2.5 -mt-3 px-2 text-base;
                }
            }
        }
    }
</style>
