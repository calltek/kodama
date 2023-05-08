import { ExtractPropTypes } from 'vue'
import Props from './k-simple-table.props'

export type KSimpleTableColumn = {
    title: string
    index?: string
    align?: 'center' | 'left' | 'right'
    nowrap?: boolean
    width?: string
    slot?: string
    style?: Record<string, unknown>
    url?: {
        name: string
        id: string
    }
}

export type KSimpleTableProps = Readonly<ExtractPropTypes<typeof Props>>
