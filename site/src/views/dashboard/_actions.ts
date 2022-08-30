import { $stats, $shop } from '../../plugins'
import { ChartSerie, Scope } from '../../types/Stats'
import { moment } from '@kodama/ui'

import {
    data,
    loading,
    isLoaded,
    dates,
    cdates,
    selectedShops,
    chartSeriesB2B,
    chartSeriesB2C,
    chartSeriesALL,
    cdays,
    stats,
} from './_variables'

// Fetch stats from PS
export const fetch = () => {
    if ($shop.validate()) {
        loading.value = true

        const shops = selectedShops.value.map((s) => s.id)

        if (Array.isArray(dates.value) && Array.isArray(cdates.value)) {
            $stats
                .fetch({
                    date_from: moment(dates.value[0]).format('YYYY-MM-DD'),
                    date_to: moment(dates.value[1]).format('YYYY-MM-DD'),
                    cdate_from: moment(cdates.value[0]).format('YYYY-MM-DD'),
                    cdate_to: moment(cdates.value[1]).format('YYYY-MM-DD'),
                    shops: JSON.stringify(shops),
                })
                .then((result) => {
                    data.current = result.current
                    data.past = result.past

                    renderSeries('B2B')
                    renderSeries('B2C')
                    renderSeries('ALL')

                    renderStats()
                })
                .finally(() => {
                    loading.value = false
                    isLoaded.value = true
                })
        } else {
            loading.value = false
        }
    }
}

// Render chart series from PS
export const renderSeries = (type: Scope) => {
    const series: any = {}
    let chartSeries: ChartSerie[] = []

    if (Array.isArray(dates.value) && dates.value.length === 2) {
        data.current.forEach((order) => {
            if (type === 'B2B' && order.client_type !== 'B2B') return
            if (type === 'B2C' && order.client_type !== 'B2C') return

            const timestamp = moment(order.date).unix()

            if (series[timestamp]) {
                series[timestamp] += order.final_proffit
            } else {
                series[timestamp] = order.final_proffit
            }
        })

        chartSeries[0] = {
            name: 'Periodo actual',
            data: Object.keys(series).map((key) => [parseInt(key), series[key]]),
        }

        const cseries: any = {}

        if (Array.isArray(cdates.value) && cdates.value.length === 2) {
            data.past.forEach((order) => {
                if (type === 'B2B' && order.client_type !== 'B2B') return
                if (type === 'B2C' && order.client_type !== 'B2C') return

                const timestamp = moment(order.date).add(cdays.value, 'days').unix()

                if (cseries[timestamp]) {
                    cseries[timestamp] += order.final_proffit
                } else {
                    cseries[timestamp] = order.final_proffit
                }
            })
        }

        chartSeries[1] = {
            name: 'Periodo anterior',
            data: Object.keys(cseries).map((key) => [parseInt(key), cseries[key]]),
        }
    }

    if (chartSeries.length > 1) {
        chartSeries = chartSeries.reverse()
    }

    if (type === 'B2B') {
        chartSeriesB2B[0] = chartSeries[0]
        if (chartSeries[1]) chartSeriesB2B[1] = chartSeries[1]
    } else if (type === 'B2C') {
        chartSeriesB2C[0] = chartSeries[0]
        if (chartSeries[1]) chartSeriesB2C[1] = chartSeries[1]
    } else {
        chartSeriesALL[0] = chartSeries[0]
        if (chartSeries[1]) chartSeriesALL[1] = chartSeries[1]
    }
}

// Render statistics from PS
export const renderStats = () => {
    if (Array.isArray(dates.value) && dates.value.length === 2) {
        data.current.forEach((order) => {
            stats.current[order.client_type].total_orders++
            stats.current[order.client_type].total_sales += order.final_pvp
            stats.current[order.client_type].total_sales_net += order.final_proffit

            stats.current.ALL.total_orders++
            stats.current.ALL.total_sales += order.final_pvp
            stats.current.ALL.total_sales_net += order.final_proffit
        })

        data.past.forEach((order) => {
            stats.past[order.client_type].total_orders++
            stats.past[order.client_type].total_sales += order.final_pvp
            stats.past[order.client_type].total_sales_net += order.final_proffit

            stats.past.ALL.total_orders++
            stats.past.ALL.total_sales += order.final_pvp
            stats.past.ALL.total_sales_net += order.final_proffit
        })

        const scopes: Scope[] = ['B2B', 'B2C', 'ALL']

        // Average order price
        scopes.forEach((type) => {
            stats.current[type].average_order_price =
                stats.current[type].total_orders > 0
                    ? stats.current[type].total_sales_net / stats.current[type].total_orders
                    : 0

            stats.past[type].average_order_price =
                stats.past[type].total_orders > 0 ? stats.past[type].total_sales_net / stats.past[type].total_orders : 0
        })

        // Compare current to past
        scopes.forEach((type) => {
            stats.compare[type].total_orders =
                100 - (stats.past[type].total_orders * 100) / stats.current[type].total_orders || 0

            stats.compare[type].total_sales =
                100 - (stats.past[type].total_sales * 100) / stats.current[type].total_sales || 0

            stats.compare[type].total_sales_net =
                100 - (stats.past[type].total_sales_net * 100) / stats.current[type].total_sales_net || 0

            stats.compare[type].average_order_price =
                100 - (stats.past[type].average_order_price * 100) / stats.current[type].average_order_price || 0
        })
    }
}
