import { ErrorObject } from '@vuelidate/core'
import { ExtractPropTypes, PropType } from 'vue'

export const modes = ['day', 'month', 'year']

export type PresetRanges = {
    label: string
    range: string[]
    style?: Record<string, string>
}

const Props = {
    modelValue: {
        type: [Array, String] as PropType<string[] | string>,
        required: false,
        description: 'Valor del componente'
    },
    value: {
        type: [Array, String] as PropType<string[] | string>,
        required: false,
        description: 'Valor del componente'
    },
    disabled: {
        type: Boolean,
        default: false,
        description: 'Desactiva el componente'
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
        options: ['sm', 'md', 'lg'],
        validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
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
