export interface StatsParams {
    date_from: string
    date_to: string
    cdate_from: string
    cdate_to: string
    shops: string
}

export interface ShopData {
    date: string
    discount: number
    final_proffit: number
    final_pvc: number
    final_pvp: number
    order: number
    client_type: 'B2B' | 'B2C'
}

export interface ShopResult {
    current: ShopData[]
    past: ShopData[]
}

export interface ChartSerie {
    name: string
    data: Array<[number, number]>
}

interface ScopeStats {
    total_orders: number
    total_sales: number
    total_sales_net: number
    average_order_price: number
}

export interface DashboardStats {
    current: {
        B2B: ScopeStats
        B2C: ScopeStats
        ALL: ScopeStats
    }
    past: {
        B2B: ScopeStats
        B2C: ScopeStats
        ALL: ScopeStats
    }
    compare: {
        B2B: ScopeStats
        B2C: ScopeStats
        ALL: ScopeStats
    }
}

export type Scope = 'B2B' | 'B2C' | 'ALL'
