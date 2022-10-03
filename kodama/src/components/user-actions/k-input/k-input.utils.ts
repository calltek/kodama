import { StyleValue } from 'vue'
import { KInputProps } from './k-input.props'

export const parseInputClass = (props: KInputProps) => {
    const classes: string[] = ['form-control']

    if (props.ghost) {
        classes.push('form-control-flush')
    } else if (props.solid) {
        classes.push('form-control-solid')
    }

    if (props.size) {
        classes.push(`form-control-${props.size}`)
    }

    return classes
}

export const parseInputStyle = (props: KInputProps) => {
    const style: StyleValue = {
        'min-width': '100px'
    }

    if (props.width) style.width = `${props.width}px`

    return style
}
