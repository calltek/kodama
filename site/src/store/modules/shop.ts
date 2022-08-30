import { defineStore } from 'pinia'
import { Shop, ShopState } from '../../types/Shop'
import { overlapRange } from '../../helpers/dates'
import { $http } from '../../plugins'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

interface ShopFetchParams {
    id?: number[]
    order_from?: string
    order_to?: string
}

export const useShopStore = defineStore('shop', {
    persist: true,
    state: (): ShopState => ({
        shops: [],
        active: [],
    }),
    getters: {
        all: (st: ShopState) => st.shops,
        selected: (st: ShopState) => st.active,
        isSelected: (st: ShopState) => {
            return (id: number) => {
                const selected = st.active

                const find = selected.findIndex((s: Shop) => s.id === id)

                if (find > -1) {
                    return true
                }

                return false
            }
        },
        withPromotion: (st: ShopState) => {
            return (exists: boolean, from: Date, to: Date) => {
                if (!from) from = new Date()
                if (!to) to = new Date()

                const date: [Date, Date] = [new Date(from), new Date(to)]

                const promoted: Shop[] = []

                st.shops.forEach((shop) => {
                    let promos = []
                    if (shop.promotions) {
                        promos = shop.promotions.filter((promo) => {
                            const promotionDate: [Date, Date] = [
                                new Date(promo.date.startDate),
                                new Date(promo.date.endDate),
                            ]

                            const overlap = overlapRange(date, promotionDate)
                            if (overlap) return true

                            return false
                        })
                    }

                    if (exists && promos.length > 0) {
                        promoted.push(shop)
                    } else if (!exists && promos.length === 0) {
                        promoted.push(shop)
                    }
                })

                return promoted
            }
        },
    },
    actions: {
        fetch(params?: ShopFetchParams): Promise<Shop[]> {
            return new Promise((resolve, reject) => {
                $http
                    .get('index.php?controller=AdminCalltekShop&action=getShops', { params })
                    .then((res) => {
                        resolve(res.data)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
        reset() {
            this.shops = []
            this.active = []
        },
        set(shops: Array<Shop> = []) {
            this.shops = shops
        },
        select: function (shops: Shop[], reset = false): void {
            if (!reset) {
                shops.forEach((shop) => {
                    const find = this.active.findIndex((s) => s.id === shop.id)

                    if (find > -1) {
                        this.active.splice(find, 1)
                    } else {
                        this.active.push(shop)
                    }
                })
            } else {
                if (this.active.length < this.shops.length) {
                    this.active = this.shops
                } else {
                    this.active = []
                }
            }
        },
    },
})
