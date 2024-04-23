import { defineStore } from 'pinia'

export type QueryFilterOperator = {
    $eq?: string | number
    $neq?: string | number
    $gt?: number
    $lt?: number
    $gte?: number
    $lte?: number
    $in?: (string | number)[]
    $nin?: (string | number)[]
    $like?: string
    $from?: string | Date
    $to?: string | Date
}

export type QueryCondition = {
    [key: string]: QueryFilterOperator
}

export type QueryLogicalOperator = {
    $and?: QueryFilter[]
    $or?: QueryFilter[]
}

export type QueryFilter = QueryCondition | QueryLogicalOperator
export type QueryOrder = Record<string, 'asc' | 'desc'>

export type QueryParams = {
    order: QueryOrder | null
    filter: QueryFilter | null
    limit: number
    strict: boolean
}

type Query = Record<string, QueryParams>

const defaultState = {
    queries: {}
}

export default defineStore('query', {
    persist: true,
    state: () => defaultState as { queries: Query },
    getters: {
        get: (state) => (view: string) => {
            if (state.queries[view]) {
                return state.queries[view]
            } else {
                return {
                    filter: null,
                    limit: 20,
                    order: null,
                    strict: true
                }
            }
        }
    },
    actions: {
        clean() {
            this.queries = {}
        },
        init(view: string, params?: Partial<QueryParams>) {
            this.queries[view] = {
                filter: params?.filter || null,
                limit: params?.limit || 20,
                order: params?.order || null,
                strict: params?.strict || true
            }
        },
        order(view: string) {
            const self = this

            return {
                set(field: string, value: 'asc' | 'desc') {
                    if (self.queries[view] === undefined) {
                        self.init(view)
                    }

                    if (self.queries[view].order) {
                        self.queries[view].order![field] = value
                    } else {
                        self.queries[view].order = { [field]: value }
                    }
                },
                delete(field: string) {
                    if (
                        self.queries[view] !== undefined &&
                        self.queries[view].order &&
                        self.queries[view].order![field]
                    ) {
                        delete self.queries[view].order![field]
                        return true
                    }

                    return false
                }
            }
        },
        limit(view: string) {
            const self = this

            return {
                set(value: number) {
                    if (self.queries[view] === undefined) {
                        self.init(view)
                    }

                    self.queries[view].limit = value
                }
            }
        },
        strict(view: string) {
            const self = this

            return {
                set(value: boolean) {
                    if (self.queries[view] === undefined) {
                        self.init(view)
                    }

                    self.queries[view].strict = value
                }
            }
        },
        filter(view: string) {
            const self = this

            return {
                reset() {
                    self.init(view)
                },

                set(field: string, value: any) {
                    if (self.queries[view] === undefined) {
                        self.init(view)
                    }

                    if (self.queries[view].filter === null) {
                        self.queries[view].filter = { [field]: value }
                    } else if (
                        self.queries[view].filter![field] === undefined
                    ) {
                        self.queries[view].filter![field] = value
                    }
                },

                delete(field: string) {
                    if (self.queries[view] !== undefined) {
                        if (self.queries[view].filter![field] !== undefined) {
                            delete self.queries[view].filter![field]
                        }
                    }
                }
            }
        }
    }
})
