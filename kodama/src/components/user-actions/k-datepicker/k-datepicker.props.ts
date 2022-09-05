import { PropType } from 'vue'

export const modes = ['time', 'day', 'month', 'year']

export type PresetRanges = {
    label: string
    range: string[]
    style?: Record<string, string>
}

export default {
    modelValue: {
        type: [Array, String] as PropType<string[] | string>,
        required: true
    },
    format: {
        type: String,
        default: 'yyyy-MM-dd'
    },
    mode: {
        type: String,
        validator: (val: string) => modes.includes(val),
        default: 'day'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    },
    /////////////////
    // MISC
    ////////////////
    wide: {
        type: Boolean,
        default: false
    },
    height: {
        type: Number,
        default: 255
    },
    placeholder: {
        type: String,
        default: 'Selecciona una fecha'
    },
    /////////////////
    // TIME
    ////////////////
    time: {
        type: Boolean,
        default: true
    },
    /////////////////
    // RANGES
    ////////////////
    presets: {
        type: [Boolean, Object as () => PresetRanges[]],
        default: true
    },
    range: {
        type: [Boolean, Number, String],
        default: false
    },
    minRange: {
        type: Number,
        default: null
    },
    maxRange: {
        type: Number,
        default: null
    },
    fixedStart: {
        type: Boolean,
        default: false
    },
    fixedEnd: {
        type: Boolean,
        default: false
    },
    /////////////////
    // VALIDATIONS
    ////////////////
    minDate: {
        type: String,
        default: null
    },
    maxDate: {
        type: String,
        default: null
    }
}
