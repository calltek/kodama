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

// System store
import { useConfig, useAuth } from './store'

export {
    // App
    createApp,
    // Store
    useConfig,
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
