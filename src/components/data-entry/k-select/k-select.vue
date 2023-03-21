<template>
    <div :class="classes">
        <label v-if="hasLabel" :for="id">
            <slot v-if="hasSlot('label')" name="label" />
            <template v-else>{{ label }}</template>

            <span v-if="required" class="font-bold text-danger ml-1">*</span>
            <template v-if="firstError">
                <k-tooltip hover :title="firstError">
                    <k-icon icon="triangle-exclamation" class="ml-2" />
                </k-tooltip>
            </template>
        </label>

        <select
            :id="id"
            v-model="model"
            :required="required"
            :disabled="disabled"
            :multiple="multiple"
            :size="visibleOptions > 1 ? visibleOptions : undefined"
        >
            <k-select-option value="">{{ placeholder }}</k-select-option>
            <slot></slot>
        </select>
    </div>
</template>

<script lang="ts">
    import { uid } from '@/helpers/utils'
    import { ErrorObject } from '@vuelidate/core'
    import { computed, defineComponent, PropType } from 'vue'

    export default defineComponent({
        name: 'KSelect',
        props: {
            modelValue: {
                type: [String, Number],
                required: false,
                default: '',
                description: 'Valor del componente'
            },
            label: {
                type: String,
                default: ''
            },
            required: {
                type: Boolean,
                default: false
            },
            errors: {
                type: Array as PropType<ErrorObject[]>,
                required: false,
                default: () => [],
                description: 'Errores de validación'
            },
            size: {
                type: String,
                default: 'md',
                options: ['xs', 'sm', 'md', 'lg']
            },
            placeholder: {
                type: String,
                required: false,
                default: 'Selecciona una opción',
                description: 'Texto explicativo'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            visibleOptions: {
                type: Number,
                default: 1
            }
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const id = uid()

            const hasSlot = (name: string) => !!ctx.slots[name]

            const model = computed({
                get() {
                    return props.modelValue
                },
                set(value) {
                    ctx.emit('update:modelValue', value)
                }
            })

            const hasLabel = computed(() => {
                return props.label || hasSlot('label')
            })

            const firstError = computed(() => {
                const error =
                    props.errors.length > 0 ? props.errors[0].$message : ''
                return error.toString()
            })

            const classes = computed(() => {
                const classes = ['k-select']

                if (props.size) {
                    classes.push(`k-select-${props.size}`)
                }

                return classes
            })

            return { id, hasLabel, hasSlot, firstError, classes, model }
        }
    })
</script>

<style scoped lang="scss">
    .k-select {
        label {
            @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
        }

        select {
            @apply bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary focus:border-primary block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary;
        }

        &.k-select-xs {
            label {
                @apply text-xs;
            }

            select {
                @apply h-9 rounded-md pl-2 pr-6 py-1.5 text-xs;
            }
        }

        &.k-select-sm {
            label {
                @apply text-sm;
            }

            select {
                @apply h-10 rounded-md pl-2.5 pr-7 py-2 text-sm;
            }
        }

        &.k-select-md {
            label {
                @apply text-base;
            }

            select {
                @apply h-12 rounded-lg pl-3 pr-8 py-2.5 text-base;
            }
        }

        &.k-select-lg {
            label {
                @apply text-lg;
            }

            select {
                @apply h-14 rounded-xl pl-4 pr-9  py-3 text-lg;
            }
        }
    }
</style>
