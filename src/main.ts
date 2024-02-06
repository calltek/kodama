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
import { AvatarType, CustomConfig as Config } from './config/_settings'

// System store
import { useConfig, useQuery } from './store'
import { toast, dayjs, useRoute, useRouter, emitter } from './plugins'

// EventBus
import { Filters } from './config/_filters'
import { KSimpleTableColumn } from './components/data-display/k-simple-table/k-simple-table.types'

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
    emitter,
    // Enums
    AvatarType
}

// Types
export type {
    Menu,
    Config,
    KTableParams,
    KTableColumn,
    KSimpleTableColumn,
    RouteRecordRaw,
    RouteLocationNormalized,
    NavigationGuardNext,
    Filters
}
