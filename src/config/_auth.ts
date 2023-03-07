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
        login: (username: string, password: string) => Promise<any>
        forgot: (email: string) => Promise<any>
        logout: (email: string) => boolean
    }
}
