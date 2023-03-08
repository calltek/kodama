import { getCurrentInstance } from 'vue'
import { Menu, SysMenu } from '../config/_menu'
import useConfig from './modules/config'
import useQuery from './modules/query'

const useMenu = function (): Menu[] {
    const ctx: any = getCurrentInstance()

    const SeparatorMenu: Menu[] = [{ separator: true }]
    const FrontMenu: Menu[] = ctx ? ctx.proxy.menu() : []
    const CustomMenu: Menu[] = [...FrontMenu, ...SeparatorMenu, ...SysMenu]

    return CustomMenu
}

export { useConfig, useMenu, useQuery }
