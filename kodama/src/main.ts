import {
    useRouter,
    RouteRecordRaw,
    RouteLocationNormalized,
    NavigationGuardNext
} from 'vue-router'
import {
    KTableColumn,
    KTableParams
} from './components/data-display/k-table/k-table.types'
import { init as createApp } from './config'
import { Menu } from './config/_menu'
import { CustomConfig as Config } from './config/_settings'

// Plugins
import { moment, notify } from './plugins'

// System store
import { useConfig, useBody, useAuth } from './store'

// Typescript Utils
import * as utils from './assets/ts/_utils'

import { DrawerComponent as Drawer } from './assets/ts/components'

export {
    // App
    createApp,
    // Plugins
    moment,
    notify,
    utils,
    // Store
    useConfig,
    useBody,
    useAuth,
    // Router
    useRouter,
    // TS Components
    Drawer
}

// Types
export type {
    Menu,
    Config,
    KTableParams,
    KTableColumn,
    RouteRecordRaw,
    RouteLocationNormalized,
    NavigationGuardNext
}
