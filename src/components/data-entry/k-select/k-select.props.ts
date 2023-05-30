import { ExtractPropTypes, PropType } from 'vue'

const Props = {
    modelValue: {
        type: [Object, Array, String, Number],
        default: () => [],
        description: 'Valor del componente'
    },
    options: {
        type: Array,
        default: () => []
    },
    placeholder: {
        type: String,
        default: 'Selecciona una opción'
    },
    closeOnSelect: {
        type: [String, Boolean],
        default: 'auto'
    },
    label: {
        type: String,
        default: ''
    },
    searchable: {
        type: Boolean,
        default: true
    },
    hideSelected: {
        type: Boolean,
        default: false
    },
    trackBy: {
        type: String,
        default: 'value'
    },
    labelBy: {
        type: String,
        default: 'label'
    },
    errors: {
        type: Array as PropType<any>,
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
    size: {
        type: String,
        default: 'md',
        options: ['xs', 'sm', 'md', 'lg'],
        description: 'Tamaño del input',
        control: {
            type: 'select'
        }
    },
    required: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        default: ''
    },
    width: {
        type: Number,
        default: 0,
        description: 'Ancho del input'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    multiple: {
        type: Boolean,
        default: false
    },
    clearOnSelect: {
        type: Boolean,
        default: true
    },
    max: {
        type: Number,
        default: 0
    },
    loading: {
        type: Boolean,
        default: false
    },
    limit: {
        type: Number,
        default: 0
    },
    maxHeight: {
        type: Number,
        default: 0
    },
    show404: {
        type: Boolean,
        default: true
    },
    ajax: {
        type: Boolean,
        default: false
    },
    free: {
        type: Boolean,
        default: false
    }
}

export type KSelectProps = Readonly<ExtractPropTypes<typeof Props>>

export default Props
