import { Shop } from './Shop'
export type Employee = {
    id: number
    boss: boolean
    token: string
    firstname: string
    lastname: string
    email: string
    roles: { [key: string]: { [key: string]: boolean } }
    shops: Shop[]
}
