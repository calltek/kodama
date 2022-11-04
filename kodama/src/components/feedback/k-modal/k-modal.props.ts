import { ExtractPropTypes } from 'vue'
import { uid } from '../../../helpers/utils'

const Props = {
    id: {
        type: String,
        default: () => uid()
    },
    title: {
        type: String,
        default: 'Default Title',
        description: 'Título'
    },
    visible: {
        type: Boolean,
        default: false,
        description: 'Indica si el modal está abierto o no'
    },
    static: {
        type: Boolean,
        default: false,
        description: 'Evita cerrar el modal haciendo click fuera de el'
    },
    scrollable: {
        type: Boolean,
        default: false,
        description: 'Hace el modal desplazable'
    },
    height: {
        type: Number,
        default: 0,
        description: 'Altura máxima del modal'
    },
    centered: {
        type: Boolean,
        default: true,
        description: 'Indica si el modal esta centrado verticalmente o no'
    },
    size: {
        type: String,
        options: ['sm', 'md', 'lg'],
        validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
        default: 'md',
        description: 'Tamaño del modal'
    }
}

export type KModalProps = Readonly<ExtractPropTypes<typeof Props>>

export default Props
