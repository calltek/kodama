import { defineProps } from 'vue'
import inputProps from './k-count.props'

const Props = defineProps(inputProps)

export const parseBadgeClasses = (props: typeof Props, slots: any) => {
    const hasSlot = (name: string) => !!slots[name]
    const classes: string[] = [`badge badge-${props.size}`]

    if (props.circle) {
        classes.push('badge-circle')
    }

    if (props.square) {
        classes.push('badge-square')
    }

    if (props.light) {
        classes.push(`badge-light-${props.color}`)
    } else {
        classes.push(`badge-${props.color}`)
    }

    if (hasSlot('default')) {
        classes.push('position-absolute translate-middle')
        const position = props.float

        if (position[0] === 'bottom') {
            classes.push('top-100')
        } else {
            classes.push('top-0')
        }

        if (position[0] === 'left') {
            classes.push('start-0')
        } else {
            classes.push('start-100')
        }
    }

    return classes
}
