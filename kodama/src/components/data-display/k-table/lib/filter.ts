import { computed, reactive } from 'vue'
import { useQuery } from '../../../../store'
import {
    QueryFilterField,
    QueryFilterFields
} from '../../../../store/modules/query'
import { KTableContext, KTableParams, KTableProps } from '../k-table.types'
import cloneDeep from 'lodash.clonedeep'

export const params: KTableParams = reactive({
    page: 1,
    order: null,
    filter: null,
    search: '',
    limit: 20,
    reset: true,
    strict: true
})

export default function (ctx: KTableContext, props: KTableProps): any {
    const order = (field: string, value: 'asc' | 'desc' | null = null) => {
        const queryStore = useQuery()

        if (props.store) {
            if (value) {
                queryStore.order(props.store).set(field, value)
            } else {
                queryStore.order(props.store).delete(field)
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
        params.page = 1

        ctx.emit('fetch', query.value)
    }

    const limit = (value: number) => {
        const queryStore = useQuery()

        if (props.store) {
            queryStore.limit(props.store).set(value)
        }

        params.limit = value
        params.reset = true
        params.page = 1

        ctx.emit('fetch', query.value)
    }

    const filter = (field: string, filter: QueryFilterField | null) => {
        const queryStore = useQuery()

        if (props.store) {
            if (filter !== null) {
                queryStore.filter(props.store).set(field, filter)
            } else {
                queryStore.filter(props.store).delete(field)
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
        params.page = 1

        ctx.emit('fetch', query.value)
    }

    const strict = (value: boolean) => {
        const queryStore = useQuery()

        if (props.store) {
            queryStore.strict(props.store).set(value)
        }

        params.strict = value

        ctx.emit('fetch', query.value)
    }

    const resetFilters = () => {
        const queryStore = useQuery()

        if (props.store) {
            queryStore.filter(props.store).reset()
        }

        params.page = 1
        params.order = null
        params.filter = null
        params.search = ''
        params.reset = true
        params.strict = true

        ctx.emit('fetch', query.value)
    }

    const query = computed(() => {
        let filters = null

        if (props.requiredFilters) {
            const requiredFilters = cloneDeep(props.requiredFilters)

            filters = mergeFilters(
                requiredFilters,
                params.filter,
                params.strict
            )
        } else {
            filters = mergeFilters(null, params.filter, params.strict)
        }

        return {
            page: params.page,
            limit: params.limit,
            order: params.order,
            filter: filters,
            reset: params.reset
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
                params.strict = q.strict
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

            const customFilters: QueryFilterFields[] = []

            Object.keys(custom).forEach((field) => {
                const find = requiredFields.find((f) => f.field === field)
                if (!find) {
                    customFilters.push({ [field]: custom[field] })
                }
            })

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

    return {
        order,
        loadStoreParams,
        limit,
        filter,
        query,
        resetFilters,
        strict
    }
}
