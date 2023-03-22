import { getCurrentInstance } from 'vue'
import objectPath from 'object-path'
import { defineStore } from 'pinia'

import defaultSettings from '../../config/_settings'

export default defineStore('config', {
    persist: true,
    state: () => {
        return {
            initialized: false,
            data: structuredClone(defaultSettings) as typeof defaultSettings
        }
    },
    actions: {
        init() {
            if (!this.initialized) {
                this.reset()
                this.initialized = true
            }
        },
        get(path?: string, defaultValue?: any) {
            if (!path) return this.data
            return objectPath.get(this.data, path, defaultValue)
        },
        set(path: string, value: any) {
            objectPath.set(this.data, path, value)
        },
        reset() {
            const ctx: any = getCurrentInstance()
            const config = ctx.proxy.settings || {}

            objectPath.set(this, 'data', {
                ...structuredClone(defaultSettings),
                ...structuredClone(config)
            })
        }
    }
})
