import { uid } from '../../../helpers/utils'

export default {
    modelValue: {
        type: String,
        default: '',
        description: 'Valor del campo'
    },
    id: {
        type: String,
        default: () => uid(),
        description: 'ID de componente'
    },
    placeholder: {
        type: String,
        default: '',
        description: 'Texto de ayuda'
    },
    maxlength: {
        type: Number,
        default: 0,
        description: 'Longitud máxima del campo'
    },
    name: {
        type: String,
        default: '',
        description: 'Nombre del campo'
    },
    label: {
        type: String,
        default: '',
        description: 'Etiqueta del campo'
    },
    type: {
        type: String,
        default: 'text',
        validator: (val: string) =>
            ['text', 'email', 'password', 'url'].includes(val),
        description: 'Tipo de campo'
    },
    autofocus: {
        type: Boolean,
        default: false,
        description: 'Establece el foco inicial del campo'
    },
    disabled: {
        type: Boolean,
        default: false,
        description: 'Impide el uso del componente'
    },
    required: {
        type: Boolean,
        default: false,
        description: 'Establece el campo como obligatorio'
    },
    autocomplete: {
        type: String,
        default: 'on',
        validator: (val: string) => ['on', 'off'].includes(val),
        description: 'Establece el estado de autocompletado del campo'
    },
    // MISCELANEA
    ghost: {
        type: Boolean,
        default: false,
        description: 'Elimina el fondo y bordes del campo haciéndolo invisible'
    },
    solid: {
        type: Boolean,
        default: false,
        description: 'Aplica un fondo sólido al campo'
    },
    size: {
        type: String,
        options: ['sm', 'md', 'lg'],
        validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
        default: 'md',
        description: 'Tamaño del input'
    }
}
