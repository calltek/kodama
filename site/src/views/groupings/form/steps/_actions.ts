import { moment } from '@kodama/ui'

import { data, loading, productsSelected, attributesSelected } from './_variables'
import { useShop } from '@/store'
import { $grouping } from '@/plugins'

export const onProductSelected = () => {
    for (let i = 0; i < productsSelected.length; i++) {
        const selected = productsSelected[i]
        const product = data.value[i]

        Object.keys(product.attributes).forEach((key) => {
            const attribute = product.attributes[key]

            for (let u = 0; u < attributesSelected[product.id][attribute.id].length; u++) {
                attributesSelected[product.id][attribute.id][u] = selected
            }
        })
    }
}

export const onAttributeSelected = () => {
    const order_details: number[] = []

    for (let i = 0; i < data.value.length; i++) {
        const product = data.value[i]
        const selected = productsSelected[i]

        if (product.multiple) {
            Object.keys(product.attributes).forEach((key) => {
                const attribute = product.attributes[key]
                for (let u = 0; u < attributesSelected[product.id][attribute.id].length; u++) {
                    const attributeSelected = attributesSelected[product.id][attribute.id][u]
                    if (attributeSelected) {
                        order_details.push(attribute.orders[u].order_detail_id)
                    }
                }
            })
        } else if (selected) {
            product.orders.forEach((order: any) => {
                order_details.push(order.order_detail_id)
            })
        }
    }

    return order_details
}

export const fetchLineItems = (from: string, to: string) => {
    loading.value = true
    const shops = useShop()
    const selectedShops = shops.selected.map((s) => s.id)

    $grouping
        .fetchPendingLines({
            date_from: moment(from).format('YYYY-MM-DD'),
            date_to: moment(to).format('YYYY-MM-DD'),
            shops: JSON.stringify(selectedShops),
        })
        .then((result) => {
            result.forEach((d) => {
                if (attributesSelected[d.id] === undefined) {
                    attributesSelected[d.id] = {}
                }

                d.attributes.forEach((a) => {
                    attributesSelected[d.id][a.id] = []
                })
            })

            data.value = result
        })
        .finally(() => {
            loading.value = false
        })
}
