export type KTableParams = {
    page: number
    order?: Record<string, unknown>[]
    filter?: Record<string, unknown>[]
    search?: string
    reset?: boolean
}

export type KTableColumnFilter = {
    title: string
    value: string | number
}

export type KTableColumn = {
    title: string
    index?: string
    order?: boolean
    search?: boolean
    align?: 'center' | 'left' | 'right'
    nowrap?: boolean
    width?: string
    slot?: string
    filter?: KTableColumnFilter[]
    makeup?: 'date' | 'price' | 'image' | 'status'
    style?: Record<string, unknown>
}
