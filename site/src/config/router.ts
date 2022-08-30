import { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from '@kodama/ui'

import { useConfig, useBody } from '@kodama/ui'
import { useAuth } from '@/store'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard/dashboard.vue'),
        meta: {
            title: 'Dashboard',
            auth: {
                strict: true,
                roles: ['AdminCalltekDashboard.view'],
            },
            breads: false,
        },
    },
    {
        path: '/agrupaciones',
        name: 'groupingList',
        component: () => import('../views/groupings/list/index.vue'),
        meta: {
            title: 'Agrupaciones',
            auth: {
                strict: true,
                roles: ['AdminCalltekGrouping.view'],
            },
            breads: [],
        },
    },
    {
        path: '/nueva-agrupacion',
        name: 'groupingForm',
        component: () => import('../views/groupings/form/index.vue'),
        meta: {
            title: 'Agrupaciones',
            auth: {
                strict: true,
                roles: ['AdminCalltekGrouping.add'],
            },
            breads: [],
        },
    },
    {
        path: '/productos/stocks',
        name: 'productStocks',
        component: () => import('../views/products/stock/index.vue'),
        meta: {
            title: 'Stocks',
            auth: {
                strict: true,
                roles: ['AdminCalltekProducts.view'],
            },
            breads: [],
        },
    },
]

function beforeEach(to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) {
    const auth = useAuth()
    const config = useConfig()

    const isPublic = to.meta.public ? to.meta.public : false
    const roles: any = to.meta.auth ? to.meta.auth : { strict: false, roles: [] }

    const hasAccess = !isPublic ? auth.checkRoles(roles.strict, roles.roles) : true

    // Check if user is logged in
    if (!auth.isLoggedIn && !isPublic) {
        next({ name: 'login' })
    } else if (auth.isLoggedIn && to.name === 'login') {
        next({ name: 'dashboard' })
    } else if (hasAccess) {
        const title = typeof to.meta.title === 'string' ? to.meta.title : ''

        document.title = config.get('name') + ' - ' + title
        next()

        const toClass = to.meta.bodyClass || []
        const fromClass = to.meta.bodyClass || []
        const body = useBody()

        if (Array.isArray(toClass) && toClass.length > 0) {
            toClass.forEach((className) => body.addClass(className))
        }

        if (Array.isArray(fromClass) && fromClass.length > 0) {
            fromClass.forEach((className) => body.addClass(className))
        }
    } else {
        next({ name: '403' })
    }

    // Scroll page to top on every route change
    setTimeout(() => {
        window.scrollTo(0, 0)
    }, 100)
}

export default {
    routes: routes,
    beforeEach: beforeEach,
}
