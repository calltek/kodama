import { Shop } from './Shop'

export type ProductAttribute = {
    id: number
    attribute_price: number
    ctk_attribute_price: number
    ctk_price: number
    final_price: number
    hidden: boolean
    name: string
    type: string
    orig_id: number
    price: number
    stock: number
    wholesale_price: number
}

export type ProductShop = {
    id: number
    name: string
    style: { bg_color: string; text_color: string }
}

export type ProductSize = {
    id_size: number
    name: string
}

export type Product = {
    id: number
    active: boolean
    attributes: ProductAttribute[]
    catalog_mode: boolean
    color: string
    gender: 0 | 1
    image: string
    image_tech: string
    multiple: boolean
    name: string
    nopromo_hidden: boolean
    reference: string
    shop_default: number
    shops: Shop[]
    sizes: ProductSize[]
    stock?: number
}

export type ProductFetchParams = {
    page: number
    shop: number
    limit?: number
    search?: string
}
