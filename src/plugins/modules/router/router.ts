import { useRouter as useVueRouter } from 'vue-router'
import { useRoute as useVueRoute } from 'vue-router'

export function useRouter() {
    const router = useVueRouter()
    return router
}

export function useRoute() {
    const route = useVueRoute()
    return route
}
