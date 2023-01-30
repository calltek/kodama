import { ExtractPropTypes } from 'vue'
import Props from './k-count.props'

export type KCountProps = Readonly<ExtractPropTypes<typeof Props>>

export const parseBadgeClasses = (props: KCountProps, slots: any) => {
    const hasSlot = (name: string) => !!slots[name]
    const classes: string[] = [
        'text-center font-medium transition-all flex items-center justify-center whitespace-nowrap'
    ]

    const neon = props.neon
    const color = props.color
    const size = props.size
    const circle = props.circle
    const square = props.square

    if (size === 'xs') {
        classes.push('h-5 w-5 text-xxxs')
        if (circle) {
            classes.push('rounded-full')
        } else if (square) {
            classes.push('rounded-md')
        }

        if (hasSlot('default'))
            classes.push('-translate-y-3.5 -translate-x-2.5')
    } else if (size === 'sm') {
        classes.push('h-6 w-6 text-xxs')
        if (circle) {
            classes.push('rounded-full')
        } else if (square) {
            classes.push('rounded-md')
        }
        if (hasSlot('default')) classes.push('-translate-y-4 -translate-x-3')
    } else if (size === 'md') {
        classes.push('h-7 w-7 text-xs')
        if (circle) {
            classes.push('rounded-full')
        } else if (square) {
            classes.push('rounded-lg')
        }
        if (hasSlot('default')) classes.push('-translate-y-5 -translate-x-3.5')
    } else if (size === 'lg') {
        classes.push('h-8 w-8 text-sm')
        if (circle) {
            classes.push('rounded-full')
        } else if (square) {
            classes.push('rounded-lg')
        }
        if (hasSlot('default')) classes.push('-translate-y-6 -translate-x-4')
    }

    if (neon) {
        classes.push(
            'border bg-opacity-20 border-opacity-0 dark:bg-opacity-10 dark:border-opacity-0'
        )
    } else {
        classes.push('border')
    }

    if (color === 'black' || color === 'white') {
        classes.push('border-black bg-black dark:bg-white dark:border-white')
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

    if (hasSlot('default')) {
        classes.push('absolute top-0 left-full')
    }

    return classes
}

export const parseBadgeStyles = (props: KCountProps, slots: any) => {
    const hasSlot = (name: string) => !!slots[name]
    const styles: any = {}

    if (hasSlot('default')) {
        const offsetX = props.offsetX
        const offsetY = props.offsetY

        if (offsetX !== 0) {
            styles['margin-left'] = `${offsetX}px`
        }

        if (offsetY !== 0) {
            styles['margin-top'] = `${offsetY}px`
        }
    }

    return styles
}
