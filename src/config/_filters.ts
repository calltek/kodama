export default {
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
    }
}
