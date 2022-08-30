import { Chance } from 'chance'

export default {
    ucfirst(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1)
    },
    seed(array: any[], seed: string) {
        const chance = new Chance(seed)
        return chance.shuffle(array)
    }
}
