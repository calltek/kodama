<template>
    <div :class="wrapperClasses">
        <label v-if="hasLabel">
            <slot v-if="hasSlot('default')" />
            <template v-else>{{ label }}</template>

            <span v-if="required" class="font-bold text-danger ml-1">*</span>
            <template v-if="firstError">
                <k-tooltip hover :title="firstError">
                    <k-icon icon="triangle-exclamation" class="ml-2" />
                </k-tooltip>
            </template>
        </label>

        <Datepicker
            v-bind="args"
            ref="dp"
            v-model="model"
            menu-class-name="k-datepicker-menu"
            @update:modelValue="onChange"
        >
            <template #input-icon>
                <k-icon icon="calendar" />
            </template>

            <template #clear-icon="{ clear }">
                <k-icon
                    icon="times"
                    color="danger"
                    :size="2"
                    class="mt-1"
                    @click="clear"
                />
            </template>

            <template #clock-icon>
                <k-icon icon="clock" />
            </template>

            <template #arrow-left>
                <k-icon icon="arrow-left" />
            </template>

            <template #arrow-right>
                <k-icon icon="arrow-right" />
            </template>

            <template #arrow-up>
                <k-icon icon="chevron-up" />
            </template>

            <template #arrow-down>
                <k-icon icon="chevron-down" />
            </template>

            <template #calendar-icon>
                <k-icon icon="calendar" />
            </template>

            <template #action-preview="{ value }">
                <k-date :value="value" />
                <!-- {{ value }} -->
            </template>

            <template #action-select>
                <k-button
                    v-if="clearable"
                    color="danger"
                    icon="brush"
                    size="sm"
                    title="Resetear"
                    class="ml-2"
                    @click="resetDate"
                >
                </k-button>

                <k-button
                    color="success"
                    icon="check"
                    size="sm"
                    title="Aceptar"
                    class="ml-2"
                    @click="selectDate"
                >
                </k-button>
            </template>
        </Datepicker>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, ref } from 'vue'
    import { dayjs } from '../../../plugins'
    import Datepicker from '@vuepic/vue-datepicker'

    import props from './k-datepicker.props'
    import { parseWrapperClasses } from './k-datepicker.utils'

    export default defineComponent({
        name: 'KDatepicker',
        components: {
            Datepicker
        },
        autoload: true,
        props: props,
        emits: ['change', 'update:modelValue'],
        setup(props, ctx) {
            const dp = ref()
            const value = ref(props.value)

            const hasSlot = (name: string) => !!ctx.slots[name]

            const model = computed({
                get() {
                    const data: string | string[] =
                        props.modelValue || value.value || ''
                    return data
                },
                set(val) {
                    if (props.modelValue) {
                        ctx.emit('update:modelValue', val)
                        value.value = val
                    } else {
                        value.value = val
                    }

                    ctx.emit('change', val)
                }
            })

            const hasLabel = computed(() => {
                return props.label || hasSlot('default')
            })

            const onChange = (newVal: string | string[]) => {
                if (props.modelValue) {
                    ctx.emit('update:modelValue', newVal)
                } else {
                    value.value = newVal
                }

                ctx.emit('change', newVal)
            }

            const selectDate = () => {
                dp.value.selectDate()
            }

            const resetDate = () => {
                value.value = ''
                onChange('')
            }

            const isSimpleRange = computed(() => {
                return typeof props.range === 'boolean'
            })

            const isNumericRange = computed(() => {
                return typeof props.range === 'number'
            })

            const wrapperClasses = parseWrapperClasses(props)

            const args = computed(() => {
                const opts: Record<string, any> = {
                    format: 'yyyy-MM-dd',
                    modelType: 'format',
                    modeHeight: props.height,
                    selectText: 'Aceptar',
                    cancelText: 'Cancelar',
                    clearable: props.clearable,
                    //enableSeconds: true,
                    locale: 'es-ES',
                    multiCalendars: props.multi,

                    // MISC
                    placeholder: props.placeholder,
                    disabled: props.disabled,
                    readonly: props.readonly,
                    required: props.required,
                    inline: props.inline,

                    // RANGES
                    fixedStart: props.fixedStart,
                    fixedEnd: props.fixedEnd,
                    minRange:
                        props.range && props.minRange
                            ? props.minRange
                            : undefined,
                    maxRange:
                        props.range && props.maxRange
                            ? props.maxRange
                            : undefined,

                    // TIME
                    enableTimePicker: props.time,
                    is24: true,

                    // VALIDATIONS
                    minDate: props.minDate,
                    maxDate: props.maxDate
                }

                if (
                    (Array.isArray(props.presets) &&
                        props.presets.length === 0) ||
                    props.presets === true
                ) {
                    opts.presetRanges = [
                        {
                            label: 'Ayer',
                            range: [
                                dayjs().subtract(1, 'days'),
                                dayjs().subtract(1, 'days')
                            ]
                        },
                        {
                            label: 'Hoy',
                            range: [dayjs(), dayjs()]
                        },
                        {
                            label: 'Esta semana',
                            range: [dayjs().startOf('week'), dayjs()]
                        },
                        {
                            label: 'Semana anterior',
                            range: [
                                dayjs().subtract(1, 'week').startOf('week'),
                                dayjs().subtract(1, 'week').endOf('week')
                            ]
                        },
                        {
                            label: 'Este mes',
                            range: [dayjs().startOf('month'), dayjs()]
                        },
                        {
                            label: 'Mes anterior',
                            range: [
                                dayjs().subtract(1, 'month').startOf('month'),
                                dayjs().subtract(1, 'month').endOf('month')
                            ]
                        },
                        {
                            label: 'Este año',
                            range: [dayjs().startOf('year'), dayjs()]
                        },
                        {
                            label: 'Año anterior',
                            range: [
                                dayjs().subtract(1, 'year').startOf('year'),
                                dayjs().subtract(1, 'year').endOf('year')
                            ]
                        }
                    ]
                } else if (props.presets !== false) {
                    opts.presetRanges = props.presets
                }

                if (isSimpleRange.value) {
                    opts.range = props.range
                } else if (isNumericRange.value) {
                    opts.range = true
                    opts.autoRange = props.range
                } else if (props.range === 'week') {
                    opts.weekPicker = true
                }

                // if (props.mode === 'time') {
                //     opts.presetRanges = []
                //     opts.timePicker = true
                // } else if (props.mode === 'month') {
                //     opts.presetRanges = []
                //     opts.monthPicker = true
                //     opts.format = 'MM'
                // } else if (props.mode === 'year') {
                //     opts.presetRanges = []
                //     opts.format = 'yyyy'
                //     opts.yearPicker = true
                // }

                return opts
            })

            const firstError = computed(() => {
                const error =
                    props.errors.length > 0 ? props.errors[0].$message : ''
                return error.toString()
            })

            return {
                dp,
                args,
                onChange,
                selectDate,
                resetDate,
                value,
                wrapperClasses,
                hasSlot,
                hasLabel,
                firstError,
                model
            }
        }
    })
</script>

<style lang="scss">
    @import './k-datepicker.scss';
</style>
