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
    'info',
    'gray-100',
    'gray-200',
    'gray-300',
    'gray-400',
    'gray-500',
    'gray-600',
    'gray-700',
    'gray-800',
    'gray-900'
]

export default {
    id: {
        type: String,
        default: () => uid()
    },
    // States
    size: {
        type: String,
        options: ['sm', 'md', 'lg'],
        validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
        default: 'md',
        description: 'Tamaño del badge'
    },
    // Misc
    color: {
        type: String,
        options: colors,
        validator: (val: string) => colors.includes(val),
        default: 'light'
    },
    light: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    }
}
