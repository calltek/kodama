import { ExtractPropTypes } from 'vue'

const Props = {
    modelValue: {
        type: String,
        default: ''
    },
    id: {
        type: [Number, String],
        default: ''
    },
    maxSize: {
        type: Number,
        default: 5
    },
    accept: {
        type: Array as () => string[],
        default: () => ['jpg', 'jpeg', 'png', 'gif', 'webp', 'pdf']
    },
    removable: {
        type: Boolean,
        default: true
    },
    loading: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: 'md',
        options: ['xs', 'sm', 'md', 'lg']
    }
}

export type KDropzoneProps = Readonly<ExtractPropTypes<typeof Props>>

export default Props
