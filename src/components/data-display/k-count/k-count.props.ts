export const colors = [
    'white',
    'black',
    'gray',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info'
]

export default {
    value: {
        type: [Number, String],
        default: 0,
        required: true,
        description: 'Valor'
    },
    square: {
        type: Boolean,
        default: true,
        description: 'Define un estilo cuadrado'
    },
    circle: {
        type: Boolean,
        default: false,
        description: 'Define un estilo circular'
    },
    offsetX: {
        type: Number,
        default: 0,
        description: 'Desplazamiento horizontal'
    },
    offsetY: {
        type: Number,
        default: 0,
        description: 'Desplazamiento vertical'
    },
    size: {
        type: String,
        options: ['xs', 'sm', 'md', 'lg'],
        validator: (val: string) => ['xs', 'sm', 'md', 'lg'].includes(val),
        default: 'md',
        description: 'Tamaño del componente'
    },
    color: {
        type: String,
        options: colors,
        validator: (val: string) => colors.includes(val),
        default: 'danger',
        description: 'Color'
    },
    neon: {
        type: Boolean,
        default: false,
        description: 'Establece el diseño `neón` del botón'
    }
}
