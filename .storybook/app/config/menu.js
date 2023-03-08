import { useAuth } from '../modules/auth'

const DocMenuConfig = () => {
    const auth = useAuth()

    return [
        {
            pages: [
                {
                    title: 'Dashboard',
                    route: '/dashboard',
                    icon: 'tachometer-fast',
                    pages: [
                        {
                            title: 'Estadístidas de pedidos',
                            route: { name: '' },
                            icon: 'box-taped'
                        },
                        {
                            title: 'Estadístidas de envíos',
                            route: { name: '' },
                            icon: 'box-taped'
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
                    icon: 'box-taped',
                    pages: [
                        {
                            title: 'Listado de productos',
                            route: '/productos',
                            disabled: true,
                            icon: 'box-taped',
                            auth: auth.checkAuth()
                        },
                        {
                            title: 'Listados de stock',
                            route: { name: '' },
                            icon: 'box-taped',
                            auth: auth.checkAuth()
                        }
                    ]
                },
                {
                    title: 'Categorías',
                    route: '/categorias',
                    disabled: true,
                    icon: 'folder-open',
                    auth: auth.checkAuth()
                },
                {
                    title: 'Características',
                    route: '/caracteristicas',
                    disabled: true,
                    icon: 'tags',
                    auth: auth.checkAuth()
                },
                {
                    title: 'Tallas',
                    route: '/tallas',
                    disabled: true,
                    icon: 'ruler',
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
                    icon: 'shopping-cart',
                    auth: auth.checkAuth()
                },
                {
                    title: 'Devoluciones',
                    route: '/devoluciones',
                    disabled: false,
                    icon: 'undo-alt',
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
                    icon: 'barcode-alt',
                    auth: auth.checkAuth()
                },
                {
                    title: 'Promociones',
                    route: '/promociones',
                    disabled: true,
                    icon: 'badge-percent',
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
                    route: { name: '' },
                    icon: 'pallet-boxes'
                }
            ],
            auth: auth.checkAuth()
        }
    ]
}

export default DocMenuConfig
