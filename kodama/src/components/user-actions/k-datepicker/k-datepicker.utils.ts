import { defineProps } from 'vue'
import inputProps from './k-datepicker.props'

const Props = defineProps(inputProps)

export const parseInputClass = (props: typeof Props) => {
    const classes: string[] = ['form-control', 'px-10']

    if (props.ghost) {
        classes.push('form-control-flush')
    } else if (props.solid) {
        classes.push('form-control-solid')
    }

    if (props.size) {
        classes.push(`form-control-${props.size}`)
    }

    return classes.join(' ')
}
