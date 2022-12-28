import { getCurrentInstance } from 'vue'
import { Menu, SysMenu } from '../config/_menu'
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

    const SeparatorMenu: Menu[] = [{ separator: true }]
    const FrontMenu: Menu[] = ctx ? ctx.proxy.menu() : []
    const CustomMenu: Menu[] = [...FrontMenu, ...SeparatorMenu, ...SysMenu]

    return CustomMenu
}

export { useBody, useConfig, useAuth, useMenu, useQuery }
