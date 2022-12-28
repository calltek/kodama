import { Menu } from '../../../src/main'
import { useAuth } from '../modules/auth'

const DocMenuConfig = (): Menu[] => {
    const auth = useAuth()

    return [
        {
            pages: [
                {
                    title: 'Dashboard',
                    route: '/dashboard',
                    icon: ['fad', 'fa-tachometer-fast'],
                    pages: [
                        {
                            title: 'Estadístidas de pedidos',
                            route: { name: 'dashboardOrders' },
                            icon: ['fad', 'fa-box-taped']
                        },
                        {
                            title: 'Estadístidas de envíos',
                            route: { name: 'dashboardShipments' },
                            icon: ['fad', 'fa-box-taped']
                        }
                    ],
                    auth: auth.checkAuth()
                }
            ]
        },
        {
            heading: 'Catálogo',
            pages: [
                {
                    title: 'Productos',
                    route: '/productos',
                    icon: ['fad', 'fa-box-taped'],
                    pages: [
                        {
                            title: 'Listado de productos',
                            route: '/productos',
                            disabled: true,
                            icon: ['fad', 'fa-box-taped'],
                            auth: auth.checkAuth()
                        },
                        {
                            title: 'Listados de stock',
                            route: { name: 'productStocks' },
                            icon: ['fad', 'fa-box-taped'],
                            auth: auth.checkAuth()
                        }
                    ]
                },
                {
                    title: 'Categorías',
                    route: '/categorias',
                    disabled: true,
                    icon: ['fad', 'fa-folder-open'],
                    auth: auth.checkAuth()
                },
                {
                    title: 'Catacterísticas',
                    route: '/caracteristicas',
                    disabled: true,
                    icon: ['fad', 'fa-tags'],
                    auth: auth.checkAuth()
                },
                {
                    title: 'Tallas',
                    route: '/tallas',
                    disabled: true,
                    icon: ['fad', 'fa-ruler'],
                    auth: auth.checkAuth()
                }
            ]
        },
        {
            heading: 'Ventas',
            pages: [
                {
                    title: 'Pedidos',
                    route: '/pedidos',
                    disabled: false,
                    icon: ['fad', 'fa-shopping-cart'],
                    auth: auth.checkAuth()
                },
                {
                    title: 'Devoluciones',
                    route: '/devoluciones',
                    disabled: false,
                    icon: ['fad', 'fa-undo-alt'],
                    auth: auth.checkAuth()
                }
            ]
        },
        {
            heading: 'Marketing',
            pages: [
                {
                    title: 'Cupones',
                    route: '/cupones',
                    disabled: true,
                    icon: ['fad', 'fa-barcode-alt'],
                    auth: auth.checkAuth()
                },
                {
                    title: 'Promociones',
                    route: '/promociones',
                    disabled: true,
                    icon: ['fad', 'fa-badge-percent'],
                    auth: auth.checkAuth()
                }
            ],
            auth: auth.checkAuth()
        },
        // {
        //     separator: true
        // },
        {
            heading: 'Producción',
            pages: [
                {
                    title: 'Agrupaciones',
                    route: { name: 'groupingList' },
                    icon: ['fad', 'fa-pallet-boxes']
                }
            ],
            auth: auth.checkAuth()
        }
    ]
}

export default DocMenuConfig
