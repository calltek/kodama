export const uid = () => {
    return (Date.now() + Math.random()).toString(36).replace('.', '')
}

export const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const colors = [
    'gray',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info'
]
