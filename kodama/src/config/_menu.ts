import { RouteLocationRaw } from 'vue-router'

const SysMenu: Menu[] = [
    // {
    //     separator: true
    // },
    // {
    //     // heading: 'Config',
    //     // route: '/produccion',
    //     pages: [
    //         {
    //             sectionTitle: 'Changelog v1.0',
    //             route: '/cupones',
    //             icon: ['fad', 'fa-file']
    //         }
    //     ]
    // }
]

export type MenuPage = {
    title: string
    route: RouteLocationRaw
    icon: [string, string]
    auth?: { strict: boolean; roles: string[] }
    pages?: MenuPage[]
}

export type Menu = {
    heading?: string
    pages?: MenuPage[]
    separator?: boolean
    auth?: { strict: boolean; roles: string[] }
}

export default (FrontMenu: Menu[]) => {
    const SeparatorMenu: Menu[] = [{ separator: true }]
    const CustomMenu: Menu[] = [...FrontMenu, ...SeparatorMenu, ...SysMenu]

    return CustomMenu
}
