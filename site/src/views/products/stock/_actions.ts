import { $product } from '../../../plugins'
import { loading, data, total } from './_variables'
import { notify, KTableParams } from '@kodama/ui'
import { ProductFetchParams } from '../../../types/Product'
import { useShop } from '../../../store'

export const fetch = (p: KTableParams) => {
    loading.value = true

    const shop = useShop()
    const selected = shop.selected.map((s) => s.id)

    if (selected.length === 1) {
        const params: ProductFetchParams = {
            page: p.page,
            shop: selected[0],
            limit: 20,
        }

        $product
            .fetchStock(params)
            .then((results) => {
                if (p.reset) {
                    data.value = results.data
                } else {
                    data.value = data.value.concat(results.data)
                }

                total.value = results.total
            })
            .catch(() => {
                notify.error('No se encontraron resultados')
            })
            .finally(() => {
                loading.value = false
            })
    }
}

export const getStockColor = (value: number) => {
    if (value === 0) {
        return 'light'
    } else if (value < 0) {
        return 'danger'
    } else {
        return 'success'
    }
}
