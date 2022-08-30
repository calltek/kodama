import { App } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

/**
 * Initialize VueApexChart component
 * @param app vue instance
 */
export default function initApexCharts(app: App<Element>) {
    app.use(VueApexCharts)
}
