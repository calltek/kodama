import { PropType } from 'vue'
import { QueryFilter } from '../../../store/modules/query'
import { KTableColumn } from './k-table.types'

export default {
    index: {
        type: String,
        required: true,
        description: 'Clave primaria de la tabla'
    },
    store: {
        type: String,
        required: false,
        description: 'Nombre único para almacenamiento en cache'
    },
    columns: {
        type: Array as () => KTableColumn[],
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
        description: 'Numero total de registros para la paginación'
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
    header: {
        type: Boolean,
        default: true,
        description: 'Muestra u oculta la cabecera de la tabla'
    },
    clean: {
        type: Boolean,
        default: false,
        description: 'Elimina los estilos por defecto del componente'
    },
    requiredFilters: {
        type: Object as PropType<QueryFilter>,
        default: null,
        description:
            'Filtros requeridos para la consulta. No se pueden eliminar'
    },
    cards: {
        type: [Boolean, String],
        default: false,
        description: 'Muestra los datos en forma de tarjetas'
    }
}
