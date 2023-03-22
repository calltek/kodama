const filters = {
    price(value: number | string): string {
        if (typeof value === 'string') {
            value = parseFloat(value)
        }

        return value.toFixed(2) + ' €'
    },
    float(value: number | string, decimals = 2): string {
        if (typeof value === 'string') {
            value = parseFloat(value)
        }

        return value.toFixed(decimals)
    },
    uid() {
        return (Date.now() + Math.random()).toString(36).replace('.', '')
    }
}

export default filters

type Filters = typeof filters

export type { Filters }
