import { computed, ref } from 'vue'
import { KTableContext, KTableProps } from '../k-table.types'
import useFilter, { params } from './filter'

export const enable404 = ref(false)

export default function (ctx: KTableContext, props: KTableProps): any {
    const { query } = useFilter(ctx, props)

    // Check if exists more data
    const isMore = computed(() => {
        return props.data.length < props.total
    })

    // Load more results
    const loadMore = () => {
        if (isMore.value) {
            params.page += 1
            params.reset = false

            ctx.emit('fetch', query.value)
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
        params.page = 1
        params.reset = true

        ctx.emit('fetch', query.value)
    }

    return { isMore, loadMore, busy, data, refresh }
}
