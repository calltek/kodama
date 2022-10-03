import { createApp } from 'vue'
import { createPinia, StoreDefinition } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { RouteRecordRaw, NavigationGuardWithThis } from 'vue-router'

import App from '../views/app.vue'
import components from './_components'
import filters from './_filters'
import router from './_router'
import menu, { Menu } from './_menu'
import { CustomConfig } from './_settings'
import { AuthStore } from './_auth'

import { apexcharts, veeValidate, vueTippy } from '../plugins'

export type KodamaParams = {
    router: {
        routes: Array<RouteRecordRaw>
        beforeEach?: NavigationGuardWithThis<undefined>
    }
    components: Record<string, { [key: string]: any }>
    menu: Menu[]
    settings: CustomConfig
    auth: StoreDefinition<string, any, AuthStore>
}

export function init(params: KodamaParams) {
    const app = createApp(App)
    const pinia = createPinia()

    pinia.use(piniaPluginPersistedstate)

    app.use(pinia)

    router(app, params.router.routes, params.router.beforeEach)
    components(app, params.components)
    filters(app)
    apexcharts(app)
    vueTippy(app)
    // veeValidate()

    app.config.globalProperties.useAuth = params.auth
    app.config.globalProperties.settings = params.settings
    app.config.globalProperties.menu = menu(params.menu)

    return app
}
