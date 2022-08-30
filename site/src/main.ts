import { createApp } from '@kodama/ui'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@kodama/ui/style'
import router from './config/router'
import menu from './config/menu'
import settings from './config/settings'
import { useAuthStore } from './store/modules/auth'

const components: Record<string, { [key: string]: any }> = import.meta.globEager('./components/**/*.vue')
const layouts: Record<string, { [key: string]: any }> = import.meta.globEager('./layout/**/*.vue')

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp({
    router: router,
    components: { ...components, ...layouts },
    menu: menu,
    settings: settings,
    auth: useAuthStore,
})

app.mount('#app')

app.use(pinia)

export default app
