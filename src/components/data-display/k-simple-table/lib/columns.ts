import { computed } from 'vue'
import { KSimpleTableColumn, KSimpleTableProps } from '../k-simple-table.types'

export default function (props: KSimpleTableProps): any {
    const cols = computed(() => {
        const columns = props.columns
        const col: KSimpleTableColumn[] = []

        columns?.forEach((column) => {
            let width = column.width || undefined
            if (column.slot === '_image') {
                width = '5rem'
            }

            if (
                column.slot &&
                ['header', 'footer', 'content'].includes(column.slot)
            ) {
                column.slot = ''
            }

            const data: any = {
                title: column.title,
                index: column.index || '',
                nowrap: column.nowrap || true,
                width: width,
                align: column.align || 'left',
                slot: column.slot || '',
                style: { position: 'relative' },
                url: column.url || undefined
            }

            if (data.nowrap) data.style['white-space'] = 'nowrap'
            if (data.align) data.style['text-align'] = data.align
            if (data.width) data.style['width'] = data.width
            if (column.style) data.style = { ...data.style, ...column.style }

            col.push(data)
        })

        return col
    })

    const colLength = computed(() => {
        let count = 1

        count += cols.value.length

        return count
    })

    return { cols, colLength }
}
