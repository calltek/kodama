import { KSimpleTableColumn } from './k-simple-table.types'

export default {
    columns: {
        type: Array as () => KSimpleTableColumn[],
        required: true,
        description: 'Array con las columnas a mostrar'
    },
    data: {
        type: Array as () => any[],
        default: () => [],
        description: 'Array con los datos a mostrar'
    },
    loading: {
        type: Boolean,
        default: false,
        description: 'Indica si se estan cargando los datos'
    },
    maxHeight: {
        type: [String, Number],
        default: 'auto'
    }
}
