import { Salesman } from './Salesman'

export interface ShopStyle {
    bg_color: string
    text_color: string
}

export interface ShopPromotion {
    date: { startDate: string; endDate: string }
    pay_later: boolean
    percent_value: number
    ship_to_club: boolean
}
export interface Shop {
    id: number
    name: string
    promotions?: ShopPromotion[]
    salesman?: Salesman
    style: ShopStyle
}

export interface ShopState {
    shops: Array<Shop>
    active: Array<Shop>
}
