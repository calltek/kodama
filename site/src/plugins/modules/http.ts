import Axios from 'axios'
import { useAuth } from '@/store'

const http = Axios.create({})

http.interceptors.request.use((config) => {
    const hostname = window.location.hostname
    const auth = useAuth()

    switch (hostname) {
        case 'crm.austral.es':
            config.baseURL = 'https://tienda.austral.es/gestor'
            break

        default:
            config.baseURL = 'https://tienda2.austral.es/gestor'
    }

    if (config.headers) {
        config.headers['Cache-Control'] = 'no-cache'
        config.headers['Pragma'] = 'no-cache'
        config.headers['Expires'] = '0'

        config.headers['CTK-Ajax'] = 'true'

        if (auth.isLoggedIn) {
            config.headers.Authorization = `Bearer ${auth.token}`
        }
    }

    return config
})

http.interceptors.response.use(
    (response) => {
        return {
            ok: true,
            data: response.data && response.data.data ? response.data.data : null,
            code: response.data && response.data.code ? response.data.code : 200,
            total: response.data && response.data.total ? response.data.total : -1,
        }
    },
    (error) => {
        console.error(error)

        const response = error.response !== undefined ? error.response : null

        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
            ok: false,
            data: response && response.data && response.data.data ? response.data.data : null,
            code: response && response.status ? response.status : 0,
            total: response.data && response.data.total ? response.data.total : -1,
        })
    }
)

export default http
