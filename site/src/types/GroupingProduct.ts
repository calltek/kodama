export interface GroupingProductLineCustomization {
    id: number
    name: string
    quantity: string
    type: string
    value: string
}

export interface GroupingProductLine {
    order_detail_id: number
    order_id: number
    order_reference: string

    client_email: string
    client_firstname: string
    client_lastname: string

    product_quantity: number
    product_quantity_in_stock: number
    product_quantity_refunded: number
    product_quantity_produce: number
    product_customization: GroupingProductLineCustomization[]

    shop_id: number
    shop_name: string
}

export interface GroupingProductAttribute {
    id: number
    name: string
    type: string
    orders: GroupingProductLine[]
}

export interface GroupingProduct {
    id: number
    image: string
    name: string
    reference: string
    attributes: GroupingProductAttribute[]
    multiple: boolean
    orders: GroupingProductLine[]
}

export interface Grouping {
    id: number
    name: string
    date_add: string
    date_from: string
    date_to: string
    employee: GroupingEmployee
}

export interface GroupingEmployee {
    id: number
    firstname: string
    lastname: string
}
