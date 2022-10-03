import { computed, reactive } from 'vue'
import { useQuery } from '../../../../store'
import {
    QueryFilter,
    QueryFilterField,
    QueryFilterFields
} from '../../../../store/modules/query'
import { KTableContext, KTableParams, KTableProps } from '../k-table.types'

export const params: KTableParams = reactive({
    page: 1,
    order: null,
    filter: null,
    search: '',
    limit: 20,
    reset: true,
    strict: false
})

export default function (ctx: KTableContext, props: KTableProps): any {
    const order = (field: string, value: 'asc' | 'desc' | null = null) => {
        const query = useQuery()

        if (props.store) {
            if (value) {
                query.order(props.store).set(field, value)
            } else {
                query.order(props.store).delete(field)
            }
        }

        if (value) {
            if (params.order) {
                params.order[field] = value
            } else {
                params.order = { [field]: value }
            }
        } else if (params.order && params.order[field]) {
            delete params.order![field]
        }

        params.reset = true

        ctx.emit('fetch', params)
    }

    const limit = (value: number) => {
        const query = useQuery()

        if (props.store) {
            query.limit(props.store).set(value)
        }

        params.limit = value
        params.reset = true

        ctx.emit('fetch', params)
    }

    const filter = (field: string, filter: QueryFilterField | null) => {
        const query = useQuery()

        if (props.store) {
            if (filter !== null) {
                query.filter(props.store).set(field, filter)
            } else {
                query.filter(props.store).delete(field)
            }
        }

        if (filter !== null) {
            if (params.filter === null) {
                params.filter = { [field]: filter }
            } else {
                params.filter[field] = filter
            }
        } else if (filter === null && params.filter && params.filter[field]) {
            delete params.filter[field]
        }

        params.reset = true

        ctx.emit('fetch', params)
    }

    const resetFilters = () => {
        const query = useQuery()

        if (props.store) {
            query.filter(props.store).reset()
        }

        params.page = 1
        params.order = null
        params.filter = null
        params.search = ''
        params.reset = true
        params.strict = false

        ctx.emit('fetch', params)
    }

    const filters = computed(() => {
        if (props.requiredFilters) {
            return mergeFilters(
                props.requiredFilters,
                params.filter,
                params.strict
            )
        } else {
            return mergeFilters(null, params.filter, params.strict)
        }
    })

    const loadStoreParams = () => {
        const query = useQuery()

        if (props.store) {
            const q = query.get(props.store)

            if (q) {
                params.order = q.order
                params.limit = q.limit
                params.filter = q.filter
            }
        }
    }

    const getFieldFilters = (filter: any) => {
        let requiredFields: { field: string; value: any }[] = []

        if (Array.isArray(filter)) {
            filter.forEach((field) => {
                requiredFields = requiredFields.concat(getFieldFilters(field))
            })
        } else if (typeof filter === 'object') {
            Object.keys(filter).forEach((field) => {
                // @ts-ignore: Unreachable code error
                const data: any = filter[field]

                if (data) {
                    if (field === '$and' || field === '$or') {
                        requiredFields = requiredFields.concat(
                            getFieldFilters(data)
                        )
                    } else {
                        requiredFields.push({
                            field: field,
                            value: data
                        })
                    }
                }
            })
        }

        return requiredFields
    }

    const mergeFilters = (
        required: any = null,
        custom: QueryFilterFields | null = null,
        strict = true
    ) => {
        if (!required && !custom) return null

        if (required && !custom) {
            return required
        } else if (!required && custom) {
            return { [strict ? '$and' : '$or']: custom }
        } else if (required && custom) {
            if (!['$and', '$or'].includes(Object.keys(required)[0])) {
                required = { $and: [required] }
            }

            const requiredFields = getFieldFilters(required)

            let customFilters: QueryFilterFields[] = []

            Object.keys(custom).forEach((field) => {
                const find = requiredFields.find((f) => f.field === field)
                if (!find) {
                    customFilters.push({ [field]: custom[field] })
                }
            })

            console.log(customFilters)

            if (required) {
                if (required.$and) {
                    if (strict) {
                        required.$and.push({ $and: customFilters })
                    } else {
                        required.$and.push({ $or: customFilters })
                    }
                } else if (required.$or) {
                    if (strict) {
                        required.$or.push({ $and: customFilters })
                    } else {
                        required.$or.push({ $or: customFilters })
                    }
                }
            }

            return required
        }
    }

    return { order, loadStoreParams, limit, filter, filters, resetFilters }
}
