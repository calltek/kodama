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
