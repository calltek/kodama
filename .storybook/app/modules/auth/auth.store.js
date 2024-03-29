import { defineStore } from 'pinia'
import _ from 'lodash'

const defaultState = {
    id: 0,
    token: '',
    firstname: '',
    lastname: '',
    email: '',
    group: ''
}

export const useAuth = defineStore('auth', {
    persist: true,
    state: () => _.cloneDeep(defaultState),
    getters: {
        // Check if user is logged in
        isLoggedIn: (state) => !!state.token,
        // Get user name
        name: (state) => `${state.firstname} ${state.lastname}`,
        // Get all user profile
        profile: (state) => state
    },
    actions: {
        login: function (username, password) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const user = {
                        id: 1,
                        token: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                        firstname: 'Jhon',
                        lastname: 'Doe',
                        email: 'jhon@doe.com',
                        group: 'admin'
                    }

                    this.id = user.id
                    this.token = user.token
                    this.firstname = user.firstname
                    this.lastname = user.lastname
                    this.email = user.email
                    this.group = user.group

                    resolve(user)
                }, 2000)
            })
        },
        forgot(email) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true)
                }, 2000)
            })
        },
        logout() {
            try {
                this.id = defaultState.id
                this.token = defaultState.token
                this.firstname = defaultState.firstname
                this.lastname = defaultState.lastname
                this.email = defaultState.email
                this.group = defaultState.group

                window.location.reload()

                return true
            } catch (err) {
                console.error(err)
                return false
            }
        },
        checkAuth(strict = true) {
            return true
        }
    }
})
