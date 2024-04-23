import { ExtractPropTypes, PropType } from 'vue'
import { uid, colors } from '@/helpers/utils'
import { RouteLocationRaw } from 'vue-router'

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
        type: Boolean,
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
        control: { type: 'inline-radio' },
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
        validator: (val: string) =>
            ['xs', 'sm', 'md', 'lg', 'xl'].includes(val),
        default: 'md',
        description: 'Tamaño del botón'
    },
    // Misc
    color: {
        type: String,
        control: { type: 'inline-radio' },
        options: colors,
        validator: (val: string) => colors.includes(val),
        default: 'primary',
        description: 'Color del botón'
    },
    link: {
        type: Boolean,
        default: false,
        description: 'Establece el diseño `link` del botón'
    },
    neon: {
        type: Boolean,
        default: false,
        description: 'Establece el diseño `neón` del botón'
    },
    uppercase: {
        type: Boolean,
        default: false,
        description: 'Establece el texto en mayúsculas'
    },
    outline: {
        type: Boolean,
        default: false,
        description: 'Elimina el fondo del botón y establece un borde'
    },
    zoom: {
        type: Boolean,
        default: false,
        description: 'Aumenta el tamaño del botón al pasar por encima'
    },
    icon: {
        type: [Array, String] as PropType<string[] | string>,
        default: '',
        description:
            'Renderiza un icono de <a href="https://fontawesome.com/search?q=" target="_blank" title="Ir a FontAwesome"><b>Fontawesome</b></a>.<br /> Ejemplo: <small>["fas","home"]</small> o <small>home</small>'
    },
    iconType: {
        type: String,
        control: { type: 'inline-radio' },
        options: ['fas', 'far', 'fal', 'fad', 'fab'],
        validator: (val: string) =>
            ['fas', 'far', 'fal', 'fad', 'fab'].includes(val),
        default: 'fad',
        description: 'Tipo de icono'
    },
    to: {
        type: Object as PropType<RouteLocationRaw>,
        default: '',
        description: 'Ruta de redirección'
    }
}

export type KButtonProps = Readonly<ExtractPropTypes<typeof Props>>

export default Props
