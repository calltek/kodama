import { Ref, ref, reactive, computed } from 'vue'
import { GroupingProduct } from '../../../../types/GroupingProduct'
import { KTableColumn } from '@kodama/ui'
import { useShop } from '../../../../store'

const shop = useShop()

export const productsSelected: any[] = reactive([])
export const attributesSelected: any = reactive({})
export const selectedShops = computed(() => {
    return shop.selected
})

export const data: Ref<GroupingProduct[]> = ref([])
export const total = ref(0)
export const loading = ref(false)

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
        title: 'Imagen',
        index: 'image',
        slot: 'image',
        align: 'center',
        width: '80px',
    },
    {
        title: 'Nombre',
        index: 'name',
        nowrap: false,
    },
    {
        title: 'Referencia',
        index: 'reference',
    },
]

export const tableColumnsChildren: KTableColumn[] = [
    {
        title: 'Pedido',
        index: 'order_id',
        align: 'center',
    },
    {
        title: 'Orden',
        index: 'order_detail_id',
        align: 'center',
    },
    {
        title: 'Referencia',
        index: 'order_reference',
    },
    {
        title: 'Cliente',
        index: 'client_name',
        slot: 'client',
    },
    {
        title: 'Club',
        index: 'shop_name',
    },
    {
        title: 'Cantidad',
        index: 'product_quantity_produce',
        align: 'right',
    },
]
