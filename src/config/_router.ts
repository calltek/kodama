import { App } from 'vue'
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw,
    NavigationGuardWithThis
} from 'vue-router'

export default (
    app: App<Element>,
    frontendRoutes: Array<RouteRecordRaw>,
    beforeEach?: NavigationGuardWithThis<undefined>
) => {
    const systemRoutes = [
        {
            path: '/changelog',
            name: 'changelog',
            component: () => import('../views/changelog/changelog.vue'),
            meta: {
                title: 'Últimas novedades',
                auth: true
            }
        }
    ]

    const routes: Array<RouteRecordRaw> = [
        {
            path: '/',
            redirect: '/dashboard',
            component: () => import('../layouts/main/main.vue'),
            children: frontendRoutes.concat(systemRoutes)
        },
        {
            path: '/',
            component: () => import('../layouts/auth/auth.vue'),
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('../views/auth/login.vue'),
                    meta: {
                        title: 'Iniciar sesión',
                        public: true
                    }
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('../views/auth/register.vue'),
                    meta: {
                        title: 'Nueva cuenta',
                        public: true
                    }
                },
                {
                    path: '/forgot-password',
                    name: 'forgotPassword',
                    component: () => import('../views/auth/forgot.vue'),
                    meta: {
                        title: 'Restablecimiento de clave',
                        public: true
                    }
                }
            ]
        },
        {
            // the 404 route, when none of the above matches
            path: '/404',
            name: '404',
            component: () => import('../views/errors/404.vue'),
            meta: {
                title: 'Página no encontrada',
                public: true
            }
        },
        {
            // the 404 route, when none of the above matches
            path: '/403',
            name: '403',
            component: () => import('../views/errors/403.vue'),
            meta: {
                title: 'Página no encontrada',
                public: true
            }
        },
        {
            // the 404 route, when none of the above matches
            path: '/500',
            name: '500',
            component: () => import('../views/errors/500.vue'),
            meta: {
                title: 'Error interno',
                public: true
            }
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404'
        }
    ]

    const router = createRouter({
        history: createWebHashHistory(),
        routes
    })

    if (beforeEach) router.beforeEach(beforeEach)

    app.use(router)
}
