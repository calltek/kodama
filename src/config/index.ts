import { createApp, App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { RouteRecordRaw, NavigationGuardWithThis } from 'vue-router'

import main from '../views/app.vue'
import components from './_components'
import filters from './_filters'
import router from './_router'
import { Menu } from './_menu'
import { CustomConfig } from './_settings'

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
    auth: {
        getName: () => string
        getLastName: () => string
        isLoggedIn: () => boolean
        login: (username: string, password: string) => Promise<any>
        forgot: (email: string) => Promise<any>
        logout: () => boolean
    }
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
    app.config.globalProperties.settings = params.settings
    app.config.globalProperties.$filters = filters

    // App Provide/Inject
    app.provide('toast', toast)
    app.provide('dayjs', dayjs)
    app.provide('$menu', params.menu)
    app.provide('$auth', params.auth)
    app.provide('$settings', params.settings)
    app.provide('$filters', filters)

    return app
}
