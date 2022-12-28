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
import { moment } from './plugins'

// System store
import { useConfig, useBody, useAuth } from './store'

export {
    // App
    createApp,
    // Plugins
    moment,
    // Store
    useConfig,
    useBody,
    useAuth,
    // Router
    useRouter
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
