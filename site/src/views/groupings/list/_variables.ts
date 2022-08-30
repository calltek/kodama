import { ref, reactive, Ref } from 'vue'
import { KTableColumn } from '@kodama/ui'
import { Grouping } from '../../../types/GroupingProduct'

export const selected = ref([])

export const loading = reactive({
    listing: false,
    deleting: false,
    exporting: false,
})

export const data: Ref<Grouping[]> = ref([])
export const total: Ref<number> = ref(0)

export const tableColumns: KTableColumn[] = [
    {
        title: 'ID',
        index: 'id',
        order: true,
        search: true,
        nowrap: false,
        align: 'center',
        width: '70px',
    },
    {
        title: 'Nombre',
        index: 'name',
        order: true,
        search: true,
        nowrap: false,
    },
    {
        title: 'Empleado',
        index: 'employee',
        slot: 'employee',
        align: 'center',
        order: true,
        search: true,
        nowrap: false,
    },
    {
        title: 'Fecha',
        index: 'date_add',
        makeup: 'date',
        order: true,
        search: true,
        nowrap: false,
    },
    {
        title: 'Acciones',
        slot: 'actions',
        nowrap: false,
        align: 'right',
    },
]
