import { computed, ref } from 'vue'
import { KTableContext, KTableProps } from '../k-table.types'
import { params } from './filter'

export const enable404 = ref(false)

export default function (ctx: KTableContext, props: KTableProps): any {
    // Check if exists more data
    const isMore = computed(() => {
        return props.data.length < props.total
    })

    // Load more results
    const loadMore = () => {
        if (isMore.value) {
            params.page += 1
            params.reset = false

            ctx.emit('fetch', params)
        }
    }

    // Check if table is busy
    const busy = computed(() => {
        if (props.loading || props.data.length >= props.total) {
            return true
        }

        return false
    })

    // Data table
    const data = computed(() => {
        return props.data
    })

    const refresh = () => {
        ctx.emit('fetch', params)
    }

    return { isMore, loadMore, busy, data, refresh }
}
