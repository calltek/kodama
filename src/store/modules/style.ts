import { defineStore } from 'pinia'
import { Config } from 'tailwindcss/types/config'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'
import objectPath from 'object-path'

const defaultState = {
    tailwind: {}
}

export interface StoreInfo {
    tailwind: Config['theme']
}

export default defineStore('style', {
    state: () => defaultState as StoreInfo,
    getters: {
        getColor: (state) => (value: string) => {
            if (state.tailwind && state.tailwind.colors) {
                return objectPath.get(state.tailwind.colors, value, '')
            }

            return ''
        }
    },
    actions: {
        async init() {
            const config = resolveConfig(tailwindConfig).theme
            if (config) this.tailwind = config
        }
    }
})
