import { computed } from 'vue'
import { KTableColumn, KTableProps } from '../k-table.types'

export default function (props: KTableProps, slots: any): any {
    // const hasSlot = (name: string) => !!slots[name]

    const cols = computed(() => {
        const columns = props.columns
        const col: KTableColumn[] = []

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
                order: column.order || false,
                nowrap: column.nowrap || true,
                width: width,
                align: column.align || 'left',
                slot: column.slot || '',
                makeup: column.makeup || undefined,
                filter: column.filter,
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

        if (props.selected !== undefined) {
            count++
        }

        count += cols.value.length

        return count
    })

    return { cols, colLength }
}
