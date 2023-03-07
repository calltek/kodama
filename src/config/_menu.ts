import { RouteLocationRaw } from 'vue-router'

export const SysMenu: Menu[] = [
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

export type MenuItem = {
    title: string
    disabled?: boolean
    route: RouteLocationRaw
    icon: string
    auth?: boolean
    pages?: MenuItem[]
}

export type Menu = {
    heading?: string
    pages?: MenuItem[]
    separator?: boolean
    auth?: boolean
}

// export default (FrontMenu: () => Menu[]) => {
//     const SeparatorMenu: Menu[] = [{ separator: true }]
//     const CustomMenu: Menu[] = [...FrontMenu(), ...SeparatorMenu, ...SysMenu]

//     return CustomMenu
// }
