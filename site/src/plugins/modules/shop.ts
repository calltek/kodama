import { $http } from '../../plugins'
import { Shop } from '../../types/Shop'
import { overlapRange } from '../../helpers/dates'
import { useShop } from '../../store'

interface ShopFetchParams {
    id?: number[]
    order_from?: string
    order_to?: string
}

export default {
    /**
     * Fetch shops from API
     * @param params ShopFilter
     */
    fetch(params?: ShopFetchParams): Promise<Shop[]> {
        return new Promise((resolve, reject) => {
            $http
                .get('index.php?controller=AdminCalltekShop&action=getShops', {
                    params,
                })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },

    /**
     * Retrieve all stored shops
     */
    all(): Shop[] {
        const $store = useShop()
        return $store.all
    },

    // Check if a shop is selected
    validate(): boolean {
        const $store = useShop()
        return $store.selected.length > 0 ? true : false
    },

    /**
     * Retrieve all selected shops
     * @param shop Shop
     */
    selected(): Shop[] {
        const $store = useShop()
        return $store.selected
    },

    /**
     * Select/Unselect shop
     * @param shop Shop
     */
    select(shops: Shop[], reset = false): void {
        const $store = useShop()
        $store.select({ shops, reset })
    },

    /**
     * Select all shop
     * @param shop Shop
     */
    // selectAll(): void {
    //     const $store = store()
    //     $store.dispatch('shops/selectAll')
    // },

    /**
     * Check if shop is selected
     * @param id Shop ID
     */
    isSelected(id: number): boolean {
        const $store = useShop()
        const selected = $store.selected

        const find = selected.findIndex((s: Shop) => s.id === id)

        if (find > -1) {
            return true
        }

        return false
    },

    withPromotion(shops: Shop[], from?: Date, to?: Date): Shop[] {
        if (!from) from = new Date()
        if (!to) to = new Date()

        const date: [Date, Date] = [new Date(from), new Date(to)]

        const promoted: Shop[] = []

        shops.forEach((shop) => {
            const promos = shop.promotions.filter((promo) => {
                const promotionDate: [Date, Date] = [new Date(promo.date.startDate), new Date(promo.date.endDate)]

                const overlap = overlapRange(date, promotionDate)
                if (overlap) return true

                return false
            })

            if (promos.length > 0) {
                promoted.push(shop)
            }
        })

        return promoted
    },

    withoutPromotion(shops: Shop[], from?: Date, to?: Date): Shop[] {
        if (!from) from = new Date()
        if (!to) to = new Date()

        const date: [Date, Date] = [new Date(from), new Date(to)]

        const promoted: Shop[] = []

        shops.forEach((shop) => {
            const promos = shop.promotions.filter((promo) => {
                const promotionDate: [Date, Date] = [new Date(promo.date.startDate), new Date(promo.date.endDate)]

                const overlap = overlapRange(date, promotionDate)
                if (overlap) return true

                return false
            })

            if (promos.length === 0) {
                promoted.push(shop)
            }
        })

        return promoted
    },
}
