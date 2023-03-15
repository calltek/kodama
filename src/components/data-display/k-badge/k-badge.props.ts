import { ExtractPropTypes } from 'vue'
import { uid } from '../../../helpers/utils'

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

const Props = {
    id: {
        type: String,
        default: () => uid(),
        description: 'ID del badge'
    },
    size: {
        type: String,
        control: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg'],
        validator: (val: string) => ['xs', 'sm', 'md', 'lg'].includes(val),
        default: 'md',
        description: 'Tamaño del badge'
    },
    // Misc
    color: {
        type: String,
        control: 'inline-radio',
        options: colors,
        validator: (val: string) => colors.includes(val),
        default: 'gray',
        description: 'Color del badge'
    },
    neon: {
        type: Boolean,
        default: false,
        description: 'Establece el diseño `neón` del botón'
    }
}

export type KBadgeProps = Readonly<ExtractPropTypes<typeof Props>>

export default Props