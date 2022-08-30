export type AuthStore = {
    presist: boolean
    state: () => any
    getters: {
        isLoggedIn: (state: any) => boolean
        isBoss: (state: any) => boolean
        email: (state: any) => string
        name: (state: any) => string
        profile: (state: any) => any
        checkRoles: (state: any, strict: boolean, roles: string[]) => boolean
    }
    actions: {
        login: (params: any) => Promise<any>
        logout: () => boolean
    }
}
