import { getCurrentInstance } from 'vue'
import objectPath from 'object-path'
import { defineStore } from 'pinia'

import defaultSettings from '../../config/_settings'

export default defineStore('config', {
    persist: true,
    state: () => {
        return {
            config: Object.assign({}, defaultSettings),
            initial: Object.assign({}, defaultSettings)
        }
    },
    actions: {
        init() {
            const ctx: any = getCurrentInstance()
            const config = ctx.proxy.settings || {}

            this.initial = Object.assign({}, { ...defaultSettings, ...config })

            this.reset()
        },
        get(path?: string, defaultValue?: any) {
            if (!path) return this.config
            return objectPath.get(this.config, path, defaultValue)
        },
        set(path: string, value: any) {
            objectPath.set(this.config, path, value)
        },
        reset() {
            objectPath.set(this, 'config', Object.assign({}, this.initial))
        }
    }
})
