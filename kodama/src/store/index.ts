import { getCurrentInstance } from 'vue'
import { Menu } from '../config/_menu'
import useBody from './modules/body'
import useConfig from './modules/config'
import useQuery from './modules/query'

const useAuth = function () {
    const ctx: any = getCurrentInstance()
    if (ctx) return ctx.proxy.useAuth()
    return null
}

const useMenu = function (): Menu[] {
    const ctx: any = getCurrentInstance()
    if (ctx) return ctx.proxy.menu || []
    return []
}

export { useBody, useConfig, useAuth, useMenu, useQuery }
