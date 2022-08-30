import { KTableColumn } from './k-table.types'

export default {
    index: {
        type: String,
        required: true,
        description: 'Clave primaria de la tabla'
    },
    columns: {
        type: Object as () => KTableColumn[],
        required: true,
        description: 'Array con las columnas a mostrar'
    },
    data: {
        type: Array as () => any[],
        default: () => [],
        description: 'Array con los datos a mostrar'
    },
    total: {
        type: Number as () => number,
        default: () => 0,
        description: 'Total de registros'
    },
    loading: {
        type: Boolean,
        default: false,
        description: 'Indica si se estan cargando los datos'
    },
    selected: {
        type: Array as () => any[],
        required: false,
        description:
            'Indica si se muestra la columna de checkbox y que items estan seleccionados'
    },
    height: {
        type: Number,
        default: 300,
        description: 'Altura mínima de la tabla'
    }
}
