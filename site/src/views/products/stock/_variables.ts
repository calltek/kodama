import { ref, Ref } from 'vue'
import { KTableColumn } from '@kodama/ui'
import { Product } from '../../../types/Product'

export const loading = ref(false)

export const data: Ref<Product[]> = ref([])
export const total: Ref<number> = ref(0)

export const tableColumns: KTableColumn[] = [
    {
        title: 'Imagen',
        index: 'image',
        makeup: 'image',
        nowrap: false,
        align: 'center',
        width: '80px',
    },
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
        title: 'Referencia',
        index: 'reference',
        slot: 'reference',
        align: 'center',
        order: true,
        search: true,
        nowrap: false,
    },
    {
        title: 'Estado',
        index: 'active',
        makeup: 'status',
        align: 'center',
        order: true,
        search: true,
        nowrap: false,
    },
    {
        title: 'Stock',
        index: 'stock',
        slot: 'stock',
        nowrap: false,
        align: 'center',
    },
]

export const tableColumnsAttrs: KTableColumn[] = [
    {
        title: 'Imagen',
        index: 'image',
        slot: 'image',
        nowrap: false,
        align: 'center',
        width: '80px',
    },
    {
        title: 'Nombre',
        slot: 'name',
        order: true,
        search: true,
        nowrap: false,
    },
    {
        title: 'Estado',
        index: 'hidden',
        slot: 'status',
        align: 'center',
        order: true,
        search: true,
        nowrap: false,
    },
    {
        title: 'Stock',
        index: 'stock',
        slot: 'stock',
        nowrap: false,
        align: 'right',
    },
]
