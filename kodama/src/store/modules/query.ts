import { defineStore } from 'pinia'

export type QueryFilterOperator =
    | '$eq'
    | '$neq'
    | '$gt'
    | '$lt'
    | '$gte'
    | '$lte'
    | '$in'
    | '$nin'
    | '$like'

type QueryCondition = '$and' | '$or'

export type QueryFilterCondition = Partial<
    Record<
        QueryCondition,
        Array<
            | QueryFilterFields[]
            | Partial<
                  Record<
                      QueryCondition,
                      QueryFilterFields[] | QueryFilterCondition[]
                  >
              >
        >
    >
>
export type QueryFilterFields = Record<string, QueryFilterField>
export type QueryFilterField = Partial<Record<QueryFilterOperator, any>>

export type QueryFilter = Partial<
    Record<QueryCondition, Array<QueryFilterFields | QueryFilterCondition>>
>

export type QueryOrder = Record<string, 'asc' | 'desc'>

export type QueryParams = {
    order: QueryOrder | null
    filter: QueryFilterFields | null
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
                return undefined
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
                strict: params?.strict || false
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
