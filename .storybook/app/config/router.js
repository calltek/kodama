import { useConfig } from '../../../src/main'

import { useAuth } from '../modules/auth'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('./../views/dashboard.vue'),
        meta: {
            public: true
        }
    }
]

function beforeEach(to, _from, next) {
    const auth = useAuth()
    const config = useConfig()

    const isPublic = to.meta.public ? to.meta.public : false

    // const roles: any = to.meta.auth
    //     ? to.meta.auth
    //     : { strict: false, roles: [] }

    const hasAccess = !isPublic ? auth.checkAuth() : true

    if (!auth.isLoggedIn && !isPublic) {
        // Redirect to login if user not logged in
        next({ name: 'login' })
    } else if (hasAccess) {
        // Set page title
        const title = typeof to.meta.title === 'string' ? to.meta.title : ''
        document.title = config.get('name') + ' - ' + title

        next()
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
    beforeEach: beforeEach
}
