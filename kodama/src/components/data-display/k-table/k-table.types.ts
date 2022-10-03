import { ExtractPropTypes, SetupContext } from 'vue'
import { QueryFilterFields, QueryParams } from '../../../store/modules/query'
import Props from './k-table.props'

export type KTableParams = {
    page: number
    order: QueryParams['order']
    filter: QueryFilterFields | null
    search: string
    limit: QueryParams['limit']
    reset: boolean
    strict: QueryParams['strict']
}

export type KTableColumnFilter = {
    title: string
    value: string | number
    icon?: string
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
    filter?: {
        type: 'select' | 'date' | 'range' | 'text' | 'number'
        options?: KTableColumnFilter[]
        min?: number | string
        max?: number | string
    }
    makeup?: 'date' | 'price' | 'image' | 'status'
    style?: Record<string, unknown>
}

export type KTableProps = Readonly<ExtractPropTypes<typeof Props>>

export type KTableContext = SetupContext<('fetch' | 'filter')[]>
