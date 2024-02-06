<template>
    <div :class="[classes]">
        <label v-if="hasLabel && !float" :for="uuid">
            <slot v-if="hasSlot('default')" />
            <template v-else>{{ label }}</template>

            <span v-if="required" class="font-bold text-danger ml-1">*</span>
            <template v-if="firstError">
                <k-tooltip :content="firstError">
                    <k-icon icon="triangle-exclamation" class="ml-2" />
                </k-tooltip>
            </template>
        </label>

        <input
            :id="uuid"
            :type="type"
            :maxlength="maxLength"
            :placeholder="placeholderText"
            :required="required"
            :value="model"
            :min="min"
            :max="max"
            :style="style"
            :autofocus="autofocus"
            :disabled="disabled"
            :autocomplete="autocomplete"
            @input="change"
            @blur="validate"
        />

        <div v-if="type === 'number'" class="k-input-control">
            <div @click="sum()">
                <k-icon
                    icon="plus"
                    type="fas"
                    class="k-input-icon"
                    :size="12"
                />
            </div>
            <div @click="subtract()">
                <k-icon
                    icon="minus"
                    type="fas"
                    class="k-input-icon"
                    :size="12"
                />
            </div>
        </div>

        <label v-if="hasLabel && float" :for="uuid">
            <slot v-if="hasSlot('default')" />
            <template v-else>{{ label || placeholder }}</template>

            <span v-if="required" class="font-bold text-danger ml-1">*</span>

            <template v-if="firstError">
                <k-tooltip hover :content="firstError">
                    <k-icon icon="triangle-exclamation" class="ml-2" />
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
        name: 'KInput',
        props: {
            modelValue: {
                type: [String, Number],
                required: false,
                default: '',
                description: 'Valor del componente'
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
            status: {
                type: String,
                default: '',
                options: ['warning', 'success', 'danger'],
                description: 'Color de estado del input'
            },
            type: {
                type: String,
                default: 'text',
                options: ['text', 'password', 'number', 'email']
            },
            width: {
                type: Number,
                default: 0,
                description: 'Ancho del input'
            },
            min: {
                type: Number,
                required: false,
                description: 'Valor mínimo si el input es `number`'
            },
            max: {
                type: Number,
                required: false,
                description: 'Valor máximo si el input es `number`'
            },
            autofocus: {
                type: Boolean,
                default: false,
                description: 'Indica si el input se enfoca automáticamente'
            },
            disabled: {
                type: Boolean,
                default: false,
                description: 'Indica si el input está deshabilitado'
            },
            autocomplete: {
                type: String,
                default: 'off',
                description: 'Indica si el input tiene autocompletado'
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
                const classes = ['k-input-text', `k-input-text-${props.size}`]

                if (props.float) {
                    classes.push('k-input-text-floating')
                } else if (props.fieldset) {
                    classes.push('k-input-text-fieldset')
                }

                if (props.type === 'number') {
                    classes.push('k-input-number')
                }

                if (props.errors.length > 0) {
                    classes.push('k-input-text-danger')
                } else if (props.status) {
                    classes.push(`k-input-text-${props.status}`)
                }

                return classes
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

            const change = (e: any) => {
                model.value = e.target.value
            }

            const validate = () => {
                let value = model.value

                if (props.type === 'number') {
                    value = Number(value)

                    if (props.min !== undefined && value < props.min) {
                        value = props.min
                    }

                    if (props.max !== undefined && value > props.max) {
                        value = props.max
                    }

                    model.value = value
                }
            }

            const firstError = computed(() => {
                const error =
                    props.errors.length > 0 ? props.errors[0].$message : ''
                return error.toString()
            })

            const sum = () => {
                const value = parseInt(props.modelValue.toString()) || 0
                const newValue = value + 1

                if (props.max !== undefined && newValue <= props.max) {
                    model.value = newValue
                } else if (props.max !== undefined && newValue > props.max) {
                    model.value = props.max
                } else {
                    model.value = newValue
                }
            }

            const subtract = () => {
                const value = parseInt(props.modelValue.toString()) || 0
                const newValue = value - 1

                if (props.min !== undefined && newValue >= props.min) {
                    model.value = newValue
                } else if (props.min !== undefined && newValue < props.min) {
                    model.value = props.min
                } else {
                    model.value = newValue
                }
            }

            return {
                maxLength,
                uuid,
                classes,
                change,
                firstError,
                hasSlot,
                hasLabel,
                placeholderText,
                sum,
                subtract,
                style,
                model,
                validate
            }
        }
    })
</script>

<style lang="scss">
    @import './k-input.scss';
</style>
