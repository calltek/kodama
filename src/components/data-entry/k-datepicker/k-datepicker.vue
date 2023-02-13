<template>
    <Datepicker
        v-bind="args"
        ref="dp"
        v-model="value"
        menu-class-name="k-datepicker"
        :input-class-name="classes"
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
        </template>

        <template #action-select>
            <k-button
                color="danger"
                icon="brush"
                size="sm"
                title="Resetear"
                class="me-2"
                @click="resetDate"
            >
            </k-button>

            <k-button
                color="success"
                icon="check"
                size="sm"
                title="Aceptar"
                @click="selectDate"
            >
            </k-button>
        </template>
    </Datepicker>
</template>

<script lang="ts">
    import { computed, defineComponent, ref, watch } from 'vue'
    import { moment } from '../../../plugins'
    import Datepicker from '@vuepic/vue-datepicker'

    import props from './k-datepicker.props'
    import { parseInputClass } from './k-datepicker.utils'

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
            const value = ref(props.modelValue || props.value)

            watch(
                () => props.modelValue,
                (newVal) => {
                    value.value = newVal
                }
            )

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

            const classes = computed(() => parseInputClass(props))

            const args = computed(() => {
                const opts: Record<string, any> = {
                    format: props.format,
                    modelType: 'format',
                    modeHeight: props.height,
                    selectText: 'Aceptar',
                    cancelText: 'Cancelar',
                    clearable: true,
                    //enableSeconds: true,
                    locale: 'es-ES',
                    multiCalendars: props.wide,

                    // MISC
                    placeholder: props.placeholder,
                    disabled: props.disabled,
                    readonly: props.readonly,
                    required: props.required,
                    inline: props.inline,

                    // RANGES
                    fixedStart: props.fixedStart,
                    fixedEnd: props.fixedEnd,

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
                                moment().subtract(1, 'days'),
                                moment().subtract(1, 'days')
                            ]
                        },
                        {
                            label: 'Hoy',
                            range: [moment(), moment()]
                        },
                        {
                            label: 'Esta semana',
                            range: [moment().startOf('week'), moment()]
                        },
                        {
                            label: 'Semana anterior',
                            range: [
                                moment().subtract(1, 'week').startOf('week'),
                                moment().subtract(1, 'week').endOf('week')
                            ]
                        },
                        {
                            label: 'Este mes',
                            range: [moment().startOf('month'), moment()]
                        },
                        {
                            label: 'Mes anterior',
                            range: [
                                moment().subtract(1, 'month').startOf('month'),
                                moment().subtract(1, 'month').endOf('month')
                            ]
                        },
                        {
                            label: 'Este año',
                            range: [moment().startOf('year'), moment()]
                        },
                        {
                            label: 'Año anterior',
                            range: [
                                moment().subtract(1, 'year').startOf('year'),
                                moment().subtract(1, 'year').endOf('year')
                            ]
                        }
                    ]
                } else if (props.presets !== false) {
                    opts.presetRanges = props.presets
                }

                if (isSimpleRange.value) {
                    opts.range = true
                } else if (isNumericRange.value) {
                    opts.range = true
                    opts.autoRange = props.range
                } else if (props.range === 'week') {
                    opts.weekPicker = true
                }

                if (props.mode === 'time') {
                    opts.timePicker = true
                } else if (props.mode === 'month') {
                    opts.monthPicker = true
                } else if (props.mode === 'year') {
                    opts.yearPicker = true
                }

                return opts
            })

            return { dp, args, onChange, selectDate, resetDate, value, classes }
        }
    })
</script>

<style lang="scss">
    @import './k-datepicker.scss';
</style>