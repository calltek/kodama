import { ErrorObject } from '@vuelidate/core'
import { ExtractPropTypes, PropType } from 'vue'

const Props = {
    modelValue: {
        type: String,
        default: '',
        description: 'Valor del componente'
    },
    mandatory: {
        type: String,
        default: '',
        description: 'Contenido html obligatorio'
    },
    placeholder: {
        type: String,
        default: 'Escribe algo...',
        description: 'Texto de ayuda'
    },
    maxHeight: {
        type: Number,
        default: 600,
        description: 'Altura máxima'
    },
    minHeight: {
        type: Number,
        default: 200,
        description: 'Altura mínima'
    },
    label: {
        type: String,
        default: '',
        description: 'Etiqueta'
    },
    required: {
        type: Boolean,
        default: false,
        description: 'Indica si es obligatorio'
    },
    errors: {
        type: Array as PropType<ErrorObject[]>,
        required: false,
        default: () => [],
        description: 'Errores de validación'
    },
    status: {
        type: String,
        default: '',
        control: { type: 'inline-radio' },
        options: ['warning', 'success', 'danger'],
        description: 'Color de estado del input'
    },

    //////////////////////////
    // Control Options
    //////////////////////////
    title: {
        type: Boolean,
        default: true,
        description: 'Indica si se debe mostrar los controles de título'
    },
    list: {
        type: Boolean,
        default: true,
        description: 'Indica si se debe mostrar los controles de lista'
    },
    quote: {
        type: Boolean,
        default: false,
        description: 'Indica si se debe mostrar el control de cita'
    },
    code: {
        type: Boolean,
        default: false,
        description: 'Indica si se debe mostrar el control de código'
    },
    history: {
        type: Boolean,
        default: false,
        description:
            'Indica si se debe mostrar los botones `deshacer` y `rehacer`'
    },
    zenmode: {
        type: Boolean,
        default: true,
        description: 'Opción para maximizar a pantalla completa'
    }
}

export type KEditorProps = Readonly<ExtractPropTypes<typeof Props>>

export default Props
