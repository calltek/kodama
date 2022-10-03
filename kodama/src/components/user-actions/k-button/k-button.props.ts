import { ExtractPropTypes, PropType } from 'vue'
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

const Props = {
    id: {
        type: String,
        default: () => uid(),
        description: 'ID único'
    },
    submit: {
        type: Boolean,
        default: false,
        description: 'Habilita el modo `submit`'
    },
    // States
    loading: {
        type: [Boolean, String],
        default: false,
        description: 'Habilita el modo `loading` y deshabilita el botón'
    },
    disabled: {
        type: Boolean,
        default: false,
        description: 'Deshabilita el botón'
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
        default: 'primary',
        description: 'Color del botón'
    },
    light: {
        type: Boolean,
        default: false,
        description: 'Establece el modo suave del `color` escogido'
    },
    outline: {
        type: Boolean,
        default: false,
        description: 'Elimina el fondo del botón y establece un borde'
    },
    active: {
        type: Boolean,
        default: false,
        description: 'Aplica el estilo `hover` permanentemente al botón'
    },
    icon: {
        type: [Array, String] as PropType<string[] | string>,
        default: '',
        description:
            'Renderiza un icono de <a href="https://fontawesome.com/search?q=" target="_blank" title="Ir a FontAwesome"><b>Fontawesome</b></a>'
    },
    title: {
        type: String,
        default: '',
        description: 'Visualiza el título del botón al pasar por encima'
    }
}

export type KButtonProps = Readonly<ExtractPropTypes<typeof Props>>

export default Props
