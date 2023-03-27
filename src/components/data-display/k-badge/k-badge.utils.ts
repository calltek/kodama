import { KBadgeProps } from './k-badge.props'

export const parseClasses = (props: KBadgeProps) => {
    const classes: string[] = [
        'text-center font-semibold rounded-lg transition-all h-max whitespace-nowrap inline-flex items-center'
    ]

    const neon = props.neon
    const color = props.color
    const size = props.size

    if (size === 'xs') {
        classes.push('py-1 px-3 text-xs')
    } else if (size === 'sm') {
        classes.push('py-1 px-4 text-sm')
    } else if (size === 'md') {
        classes.push('py-1.5 px-4 text-sm')
    } else if (size === 'lg') {
        classes.push('py-2 px-5 text-base')
    }

    if (neon) {
        classes.push(
            'border bg-opacity-20 border-opacity-0 dark:bg-opacity-10 dark:border-opacity-0'
        )
    } else {
        classes.push('border')
    }

    if (color === 'black' || color === 'white') {
        classes.push('border-black bg-black dark:border-white dark:bg-white')
        classes.push(
            neon ? 'text-black dark:text-white' : 'text-white dark:text-black'
        )
    } else if (color === 'gray') {
        classes.push('border-gray-300 bg-gray-300')
        classes.push(neon ? 'text-gray-300' : 'text-gray-700')
    } else if (color === 'primary') {
        classes.push('border-primary bg-primary')
        classes.push(neon ? 'text-primary' : 'text-white')
    } else if (color === 'secondary') {
        classes.push('border-secondary  bg-secondary')
        classes.push(neon ? 'text-secondary' : 'text-white')
    } else if (color === 'success') {
        classes.push('border-success  bg-success')
        classes.push(neon ? 'text-success' : 'text-white')
    } else if (color === 'warning') {
        classes.push('border-warning  bg-warning')
        classes.push(neon ? 'text-warning' : 'text-white')
    } else if (color === 'danger') {
        classes.push('border-danger  bg-danger')
        classes.push(neon ? 'text-danger' : 'text-white')
    } else if (color === 'info') {
        classes.push('border-info  bg-info')
        classes.push(neon ? 'text-info' : 'text-white')
    }

    return classes
}
