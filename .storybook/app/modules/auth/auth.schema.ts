export type AuthParams = {
    email: string
    password: string
}

export type AuthRoles = {
    strict: true
    roles: string[]
}

export type AuthUser = {
    id: number
    token: string
    firstname: string
    lastname: string
    email: string
    group: string
}
