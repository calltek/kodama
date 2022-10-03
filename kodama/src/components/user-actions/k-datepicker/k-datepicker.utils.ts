import { KDatepickerProps } from './k-datepicker.props'

export const parseInputClass = (props: KDatepickerProps) => {
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
