import { ErrorObject } from '@vuelidate/core'
import { ExtractPropTypes, PropType } from 'vue'

export const modes = ['day', 'month', 'year', 'auto']

export type PresetRanges = {
    label: string
    range: string[]
    style?: Record<string, string>
}

type DateModelSingle = Date | string
type DateModelRange = Date[] | string[]
type DateModelMonth = { month: number | string; year: number | string }
type DateModelMonthRange = DateModelMonth[]
type DateModelTime = {
    hours: number | string
    minutes: number | string
    seconds?: number | string
}
type DateModelTimeRange = DateModelTime[]
type DateModelWeek = [Date, Date] | [string, string]
export type DateModel =
    | DateModelSingle
    | DateModelRange
    | DateModelMonth
    | DateModelMonthRange
    | DateModelTime
    | DateModelTimeRange
    | DateModelWeek

const Props = {
    modelValue: {
        type: [Array, String, Object, Date] as PropType<DateModel>,
        required: false,
        description: 'Valor del componente'
    },
    value: {
        type: [Array, String, Object, Date] as PropType<DateModel>,
        required: false,
        description: 'Valor del componente'
    },
    disabled: {
        type: Boolean,
        default: false,
        description: 'Desactiva el componente'
    },
    disabledDates: {
        type: Array as PropType<string[]>,
        required: false,
        default: () => [],
        description: 'Desactiva las fechas que se pasan como argumento'
    },
    readonly: {
        type: Boolean,
        default: false,
        description: 'Desactiva la interacción con el componente'
    },
    clearable: {
        type: Boolean,
        default: false,
        description: 'Define si el componente es se puede resetear'
    },
    required: {
        type: Boolean,
        default: false,
        description: 'Indica si el campo es requerido'
    },
    errors: {
        type: Array as PropType<ErrorObject[]>,
        required: false,
        default: () => [],
        description: 'Errores de validación'
    },
    format: {
        type: String,
        default: 'yyyy-MM-dd',
        description: 'Formato de fecha'
    },
    /////////////////
    // MISC
    ////////////////
    multi: {
        type: Boolean,
        default: false,
        description: 'Si se establece a `true`, aparecerán dos calendarios'
    },
    height: {
        type: Number,
        default: 255,
        description:
            'Si usas el modo `time`,`month` o `year`, establece la altura del componente'
    },
    label: {
        type: String,
        required: false,
        default: '',
        description: 'Etiqueta de definición'
    },
    placeholder: {
        type: String,
        default: 'Selecciona una fecha',
        description: 'Texto de ayuda'
    },
    inline: {
        type: Boolean,
        default: false,
        description: 'Elimina el input y muestra el calendario en línea'
    },
    status: {
        type: String,
        default: '',
        options: ['warning', 'success', 'danger'],
        description: 'Color de estado del input'
    },
    mode: {
        type: String,
        default: 'auto',
        options: modes,
        validator: (val: string) => modes.includes(val),
        description: 'Modo de visualización del calendario'
    },
    /////////////////
    // INPUT STYLE
    ////////////////
    fieldset: {
        type: Boolean,
        default: false,
        description: 'Aplica el estilo fieldset al input'
    },
    size: {
        type: String,
        options: ['xs', 'sm', 'md', 'lg'],
        validator: (val: string) => ['xs', 'sm', 'md', 'lg'].includes(val),
        default: 'md',
        description: 'Tamaño del input'
    },
    /////////////////
    // TIME
    ////////////////
    time: {
        type: Boolean,
        default: false,
        description: 'Muestra el selector de hora'
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
        default: null,
        description: 'Mínimo de días que se pueden seleccionar'
    },
    maxRange: {
        type: Number,
        default: null,
        description: 'Máximo de días que se pueden seleccionar'
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

export type KDatepickerProps = Readonly<ExtractPropTypes<typeof Props>>

export default Props
