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
    value: {
        type: [Number, String],
        default: 0
    },
    color: {
        type: String,
        options: colors,
        validator: (val: string) => colors.includes(val),
        default: 'danger'
    },
    light: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    },
    square: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    },
    float: {
        type: Array,
        default: () => ['top', 'right']
    },
    size: {
        type: String,
        options: ['sm', 'md', 'lg'],
        validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
        default: 'md',
        description: 'Tamaño del componente'
    }
}
