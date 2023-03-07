import { createApp, App } from 'vue'
import { createPinia, StoreDefinition } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { RouteRecordRaw, NavigationGuardWithThis } from 'vue-router'

import main from '../views/app.vue'
import components from './_components'
import filters from './_filters'
import router from './_router'
import { Menu } from './_menu'
import { CustomConfig } from './_settings'
import { AuthStore } from './_auth'

import { dayjs, toast } from '@/plugins'

// System s

export type KodamaParams = {
    router: {
        routes: Array<RouteRecordRaw>
        beforeEach?: NavigationGuardWithThis<undefined>
    }
    components: Record<string, { [key: string]: any }>
    menu: () => Menu[]
    settings: CustomConfig
    auth: StoreDefinition<string, any, AuthStore>
}

export function init(params: KodamaParams, app?: App<Element>) {
    if (app === undefined) app = createApp(main)

    // Pinia
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)
    app.use(pinia)

    // App Routes
    router(app, params.router.routes, params.router.beforeEach)

    // App Components
    components(app, params.components)

    // App Globals
    app.config.globalProperties.useAuth = params.auth
    app.config.globalProperties.settings = params.settings
    app.config.globalProperties.menu = params.menu
    app.config.globalProperties.$filters = filters

    // App Provide/Inject
    app.provide('kodamaAuth', params.auth)
    app.provide('kodamaSettings', params.settings)
    app.provide('kodamaMenu', params.menu)
    app.provide('kodamaFilters', filters)
    app.provide('toast', toast)
    app.provide('dayjs', dayjs)

    return app
}
