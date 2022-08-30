import { Menu } from '@kodama/ui'

const DocMenuConfig: Menu[] = [
    {
        pages: [
            {
                title: 'Dashboard',
                route: '/dashboard',
                icon: ['fad', 'fa-tachometer-fast'],
                auth: {
                    strict: true,
                    roles: ['AdminCalltekDashboard.view'],
                },
            },
        ],
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
                        icon: ['fad', 'fa-box-taped'],
                    },
                    {
                        title: 'Listados de stock',
                        route: { name: 'productStocks' },
                        icon: ['fad', 'fa-box-taped'],
                    },
                ],
                auth: {
                    strict: true,
                    roles: ['AdminCalltekProducts.view'],
                },
            },
            {
                title: 'Categorías',
                route: '/categorias',
                icon: ['fad', 'fa-folder-open'],
            },
            {
                title: 'Catacterísticas',
                route: '/caracteristicas',
                icon: ['fad', 'fa-tags'],
            },
            {
                title: 'Tallas',
                route: '/tallas',
                icon: ['fad', 'fa-ruler'],
            },
        ],
    },
    {
        heading: 'Ventas',
        pages: [
            {
                title: 'Pedidos',
                route: '/pedidos',
                icon: ['fad', 'fa-shopping-cart'],
            },
            {
                title: 'Devoluciones',
                route: '/devoluciones',
                icon: ['fad', 'fa-undo-alt'],
            },
        ],
    },
    {
        heading: 'Marketing',
        pages: [
            {
                title: 'Cupones',
                route: '/cupones',
                icon: ['fad', 'fa-barcode-alt'],
            },
            {
                title: 'Promociones',
                route: '/promociones',
                icon: ['fad', 'fa-badge-percent'],
            },
        ],
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
                icon: ['fad', 'fa-pallet-boxes'],
            },
        ],
        auth: {
            strict: true,
            roles: ['AdminCalltekGrouping.view'],
        },
    },
]

export default DocMenuConfig
