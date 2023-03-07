import { KDatepickerProps } from './k-datepicker.props'

export const parseWrapperClasses = (props: KDatepickerProps) => {
    const classes = ['k-datepicker', `k-datepicker-${props.size}`]

    if (props.fieldset) {
        classes.push('k-datepicker-fieldset')
    }

    if (props.errors.length > 0) {
        classes.push('k-datepicker-danger')
    } else if (props.status) {
        classes.push(`k-datepicker-${props.status}`)
    }

    return classes
}
