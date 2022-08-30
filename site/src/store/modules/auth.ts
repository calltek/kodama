import { defineStore } from 'pinia'
import _ from 'lodash'
import { Employee } from '../../types/Employee'
import { AuthParams } from '../../types/auth'
import { $http } from '../../plugins'
import { useShop } from '../../store'
import { useRouter } from '@kodama/ui'

const defaultState = {
    id: 0,
    boss: false,
    token: '',
    firstname: '',
    lastname: '',
    email: '',
    roles: {},
    shops: [],
}

export const useAuthStore = defineStore('auth', {
    persist: true,
    state: () => _.cloneDeep(defaultState) as Employee,
    getters: {
        // Check if user is logged in
        isLoggedIn: (state) => !!state.token,
        // Check if user is boss
        isBoss: (state) => state.boss,
        // Get user name
        name: (state) => `${state.firstname} ${state.lastname}`,
        // Get all user profile
        profile: (state) => state,
        // Check user roles
        checkRoles:
            (state) =>
            (strict = true, roles: string[]) => {
                if (roles.length === 0) return true

                if (strict) {
                    return roles.every((role) => {
                        const rolePart = role.split('.')
                        const roleClass: string = rolePart[0] || ''
                        const roleAction: string = rolePart[1] || 'view'

                        return state.roles[roleClass] && state.roles[roleClass][roleAction]
                            ? state.roles[roleClass][roleAction]
                            : false
                    })
                } else {
                    return roles.some((role) => {
                        const rolePart = role.split('.')
                        const roleClass: string = rolePart[0] || ''
                        const roleAction: string = rolePart[1] || 'view'

                        return state.roles[roleClass] && state.roles[roleClass][roleAction]
                            ? state.roles[roleClass][roleAction]
                            : false
                    })
                }
            },
    },
    actions: {
        login: function (params: AuthParams): Promise<Employee> {
            return new Promise((resolve, reject) => {
                const body = new FormData()

                body.append('email', params.email)
                body.append('passwd', params.password)

                $http
                    .post('index.php?controller=AdminCalltek&action=login', body)
                    .then((response) => {
                        const employee: Employee = response.data

                        this.id = employee.id
                        this.boss = employee.boss
                        this.token = employee.token
                        this.firstname = employee.firstname
                        this.lastname = employee.lastname
                        this.email = employee.email
                        this.roles = employee.roles
                        this.shops = employee.shops

                        resolve(employee)
                    })
                    .catch((response) => {
                        reject(response.data.errors ? response.data.errors[0] : 'Ocurrió un error inesperado')
                    })
            })
        },
        logout(): boolean {
            try {
                const shop = useShop()
                const router = useRouter()

                this.id = defaultState.id
                this.boss = defaultState.boss
                this.token = defaultState.token
                this.firstname = defaultState.firstname
                this.lastname = defaultState.lastname
                this.email = defaultState.email
                this.roles = defaultState.roles
                this.shops = defaultState.shops

                router.push({ name: 'login' })
                shop.reset()

                return true
            } catch (err) {
                console.error(err)
                return false
            }
        },
    },
})
