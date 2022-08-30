<template>
    <div class="KDatePicker">
        <el-date-picker
            v-model="value"
            :disabled="disabled"
            type="daterange"
            range-separator="-"
            start-placeholder="Fecha inicio"
            end-placeholder="Fecha fin"
            :size="inputSize"
            :class="block ? 'w-100' : ''"
            @change="onChange"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, watch, computed } from 'vue'

    export default defineComponent({
        name: 'KDaterange',
        autoload: true,
        props: {
            modelValue: {
                type: Array,
                default: () => [new Date(), new Date()],
                description: 'Valor del campo'
            },
            size: {
                type: String,
                options: ['sm', 'md', 'lg'],
                validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
                default: 'md',
                description: 'Tamaño del botón'
            },
            disabled: {
                type: Boolean,
                default: false,
                description: 'Deshabilitar el componente'
            },
            block: {
                type: Boolean,
                default: false,
                description: 'Ajustar el componente a la anchura del contenedor'
            }
        },
        emits: ['update:modelValue', 'change'],
        setup(props, ctx) {
            const value = ref(props.modelValue)

            const inputSize = computed(() => {
                if (props.size === 'sm') return 'small'
                if (props.size === 'md') return ''
                if (props.size === 'lg') return 'large'
                return ''
            })

            const onChange = (value: any) => {
                ctx.emit('update:modelValue', value)
                ctx.emit('change', value)
            }

            // const shortcuts = [
            //     {
            //         text: 'Hoy',
            //         value: [new Date(), new Date()]
            //     },
            //     {
            //         text: 'Hace 1 semana',
            //         value: () => {
            //             const date = new Date()
            //             date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            //             return date
            //         }
            //     },
            //     {
            //         text: 'Hace 1 mes',
            //         value: () => {
            //             const date = new Date()
            //             date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            //             return date
            //         }
            //     },
            //     {
            //         text: 'Hace 1 año',
            //         value: () => {
            //             const date = new Date()
            //             date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            //             return date
            //         }
            //     },
            //     {
            //         text: 'Esta semana',
            //         value: () => {
            //             const date = new Date()
            //             date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            //             return date
            //         }
            //     },
            //     {
            //         text: 'Este mes',
            //         value: () => {
            //             const date = new Date()
            //             date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            //             return date
            //         }
            //     },
            //     {
            //         text: 'Este año',
            //         value: () => {
            //             const date = new Date()
            //             date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            //             return date
            //         }
            //     }
            // ]

            watch(
                () => props.modelValue,
                (newVal) => {
                    value.value = newVal
                }
            )

            return { value, inputSize, onChange }
        }
    })
</script>

<style lang="scss">
    .KDatePicker {
        .el-picker-panel__sidebar {
            padding: 10px;
        }

        .el-range-editor {
            padding: 0.75rem 1rem;

            .el-range-input {
                font-weight: 500;
                line-height: 1.5;
                color: var(--bs-gray-700);
            }
        }

        .el-range-editor.el-range-editor--large {
            padding: 3px 10px;
            min-height: calc(1.5em + 1.65rem + 2px);
            padding: 0.825rem 1.5rem;
            border-radius: 0.625rem;

            .el-range-input {
                line-height: 1.5;
                font-size: 1.15rem;
            }
        }

        .el-range-separator {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--bs-gray-700);
        }
    }
</style>
