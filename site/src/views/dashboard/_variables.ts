/* eslint-disable prefer-const */

import { Ref, ref, reactive, computed } from 'vue'
import { ShopResult, ChartSerie, Scope, DashboardStats } from '../../types/Stats'
import { useShop } from '../../store'
import { moment, utils } from '@kodama/ui'

export const selectedShops = computed(() => {
    const shop = useShop()
    return shop.selected
})

export const data: ShopResult = reactive({
    current: [],
    past: [],
})

export const loading: Ref<boolean> = ref(false)
export const isLoaded: Ref<boolean> = ref(false)

export const dates: Ref<Date[] | null> = ref([moment().subtract(1, 'month').toDate(), moment().toDate()])

export const scope: Ref<Scope> = ref('B2C')

export const cdates = computed(() => {
    if (Array.isArray(dates.value)) {
        const to = moment(dates.value[0]).subtract(1, 'days').toDate()
        const from = moment(to).subtract(cdays.value, 'days').toDate()

        return [from, to]
    }

    return null
})

export const cdays = computed(() => {
    if (Array.isArray(dates.value)) {
        const a = moment(dates.value[0])
        const b = moment(dates.value[1])
        return Math.abs(a.diff(b, 'days'))
    }

    return 0
})

export const activeScope = computed(() => {
    if (scope.value === 'B2B') {
        return chartSeriesB2B
    } else if (scope.value === 'B2C') {
        return chartSeriesB2C
    } else {
        return chartSeriesALL
    }
})

export const isEmpty = computed(() => {
    if (
        (activeScope.value[1] && activeScope.value[1].data.length > 0) ||
        (activeScope.value[0] && activeScope.value[0].data.length > 0)
    ) {
        return false
    } else {
        return true
    }
})

const labelColor = utils.getCSSVariableValue('--bs-gray-500')
const borderColor = utils.getCSSVariableValue('--bs-gray-200')
const baseColor = utils.getCSSVariableValue('--bs-primary')
const serie1Color = utils.getCSSVariableValue('--bs-warning')
const serie2Color = utils.getCSSVariableValue('--bs-primary')

export const chartOptions = {
    chart: {
        fontFamily: 'inherit',
        type: 'area',
        //height: '100%'
    },
    legend: {
        show: true,
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        type: 'solid',
        opacity: 0.4,
    },
    stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [serie1Color, serie2Color],
    },
    xaxis: {
        type: 'datetime',
        tickAmount: 6, // Sirve para agrupar los valores
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: true,
        },
        labels: {
            style: {
                colors: labelColor,
                fontSize: '12px',
            },
            formatter: function (val: number) {
                return moment.unix(val).format('DD/MM/YY')
            },
        },
        crosshairs: {
            position: 'front',
            stroke: {
                color: baseColor,
                width: 1,
                dashArray: 3,
            },
        },
    },
    yaxis: {
        type: 'number',
        labels: {
            style: {
                colors: labelColor,
                fontSize: '12px',
            },
            formatter: function (val: number) {
                return val.toFixed(2) + '€'
            },
        },
    },
    tooltip: {
        style: {
            fontSize: '12px',
        },
        x: {
            formatter: function (val: number) {
                return moment.unix(val).format('LL')
            },
        },
    },
    colors: [serie1Color, serie2Color],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    markers: {
        size: 5,
        hover: {
            size: 9,
        },
        strokeColor: [serie1Color, serie2Color],
        strokeWidth: 3,
    },
}

export const chartSeriesB2B: ChartSerie[] = reactive([
    {
        name: 'Periodo actual',
        data: [],
    },
])

export const chartSeriesB2C: ChartSerie[] = reactive([
    {
        name: 'Periodo actual',
        data: [],
    },
])

export const chartSeriesALL: ChartSerie[] = reactive([
    {
        name: 'Periodo actual',
        data: [],
    },
])

export let stats: DashboardStats = reactive({
    current: {
        B2B: {
            total_orders: 0,
            total_sales: 0,
            total_sales_net: 0,
            average_order_price: 0,
        },
        B2C: {
            total_orders: 0,
            total_sales: 0,
            total_sales_net: 0,
            average_order_price: 0,
        },
        ALL: {
            total_orders: 0,
            total_sales: 0,
            total_sales_net: 0,
            average_order_price: 0,
        },
    },
    past: {
        B2B: {
            total_orders: 0,
            total_sales: 0,
            total_sales_net: 0,
            average_order_price: 0,
        },
        B2C: {
            total_orders: 0,
            total_sales: 0,
            total_sales_net: 0,
            average_order_price: 0,
        },
        ALL: {
            total_orders: 0,
            total_sales: 0,
            total_sales_net: 0,
            average_order_price: 0,
        },
    },
    compare: {
        B2B: {
            total_orders: 0,
            total_sales: 0,
            total_sales_net: 0,
            average_order_price: 0,
        },
        B2C: {
            total_orders: 0,
            total_sales: 0,
            total_sales_net: 0,
            average_order_price: 0,
        },
        ALL: {
            total_orders: 0,
            total_sales: 0,
            total_sales_net: 0,
            average_order_price: 0,
        },
    },
})
