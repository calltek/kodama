// import components from './_components'
import { createPinia } from 'pinia'
import filters from './_filters'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { vueTippy } from '../plugins/'
import { App } from 'vue'

import 'nouislider/dist/nouislider.css'
import 'bootstrap'

import '../assets/sass/plugins.scss'
import '../assets/sass/style.scss'

export function init(app: App<any>) {
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)
    app.use(pinia)

    // components(app)
    filters(app)
    // apexcharts(app)
    vueTippy(app)

    return app
}
