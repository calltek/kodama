import {
    RouteRecordRaw,
    RouteLocationNormalized,
    NavigationGuardNext
} from 'vue-router'

import {
    KTableColumn,
    KTableParams
} from './components/data-display/k-table/k-table.types'

// Config
import { init as createApp } from './config'
import { Menu } from './config/_menu'
import { CustomConfig as Config } from './config/_settings'

// System store
import { useConfig, useQuery } from './store'
import { toast, dayjs, useRoute, useRouter } from './plugins'

// EventBus
import mitt from 'mitt'
import { Filters } from './config/_filters'
const emitter = mitt()

export {
    // App
    createApp,
    // Store
    useConfig,
    useQuery,
    // Router
    useRouter,
    useRoute,
    // Plugins
    toast,
    dayjs,
    emitter
}

// Types
export type {
    Menu,
    Config,
    KTableParams,
    KTableColumn,
    RouteRecordRaw,
    RouteLocationNormalized,
    NavigationGuardNext,
    Filters
}
