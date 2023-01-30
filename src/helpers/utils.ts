export const uid = () => {
    return (Date.now() + Math.random()).toString(36).replace('.', '')
}

export const randomImage = (
    modules: Record<
        string,
        {
            [key: string]: any
        }
    >
) => {
    const keys = Object.keys(modules)
    const random = Math.floor(Math.random() * keys.length)
    return modules[keys[random]].default
}

export const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const colors = [
    'white',
    'black',
    'gray',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info'
]
