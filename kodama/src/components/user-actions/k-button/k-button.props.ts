import { PropType } from 'vue'
import { uid } from '../../../helpers/utils'

export const colors = [
    'primary',
    'secondary',
    'dark',
    'white',
    'light',
    'success',
    'warning',
    'danger',
    'info'
]

export default {
    id: {
        type: String,
        default: () => uid()
    },
    submit: {
        type: Boolean,
        default: false
    },
    // States
    loading: {
        type: [Boolean, String],
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        options: ['sm', 'md', 'lg'],
        validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
        default: 'md',
        description: 'Tamaño del botón'
    },
    // Misc
    color: {
        type: String,
        options: colors,
        validator: (val: string) => colors.includes(val),
        default: 'primary'
    },
    light: {
        type: Boolean,
        default: false
    },
    outline: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: false
    },
    block: {
        type: Boolean,
        default: false
    },
    icon: {
        type: [Array, String] as PropType<string[] | string>,
        default: ''
    },
    title: {
        type: String,
        default: ''
    }
}
