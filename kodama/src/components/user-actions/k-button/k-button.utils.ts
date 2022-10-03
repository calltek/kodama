import { colors, KButtonProps } from './k-button.props'

export const parseButtonClasses = (props: KButtonProps, slots: any) => {
    const hasSlot = (name: string) => !!slots[name]

    const classes = [
        'btn user-select-none d-inline-flex align-items-center justify-content-center'
    ]
    const specific_classes: string[] = []

    const outline = props.outline
    const icon = props.icon
    const disabled = props.disabled

    let active = props.active
    let light = props.light

    if (outline) {
        active = true
        light = true
    }

    // Colors
    if (colors.includes(props.color) && !outline) {
        specific_classes.push(`btn-${props.color}`)
    } else if (colors.includes(props.color) && outline) {
        specific_classes.push(
            `btn-outline btn-outline-dashed btn-outline-${props.color}`
        )
    }

    // Misc
    if (active && !light) {
        specific_classes.push(`btn-active-${props.color}`)
    } else if (active && light) {
        specific_classes.push(`btn-active-light-${props.color}`)
    } else if (!active && light) {
        specific_classes.push(`btn-light-${props.color}`)
    }

    //Icons
    if (icon && !hasSlot('default')) {
        specific_classes.push('btn-icon')
    }

    // Cursors
    if (props.loading) {
        specific_classes.push('cursor-pointer')
    } else if (disabled) {
        specific_classes.push('cursor-not-allowed', 'opacity-40')
    } else {
        specific_classes.push('cursor-pointer')
    }

    // Size
    if (props.size) {
        specific_classes.push('btn-' + props.size)
    }

    return classes.concat(specific_classes)
}

export const parseIconClasses = (props: KButtonProps, slots: any) => {
    const hasSlot = (name: string) => !!slots[name]
    const iconClasses: string[] = []

    if (typeof props.icon === 'string') {
        iconClasses.push('fs-3', 'fad', `fa-${props.icon}`)

        if (hasSlot('default')) {
            iconClasses.push('me-2')
        }
    } else if (Array.isArray(props.icon)) {
        const iconType = props.icon[1].includes('fa-')
            ? props.icon[1]
            : 'fa-' + props.icon[1]
        iconClasses.push('fs-3', props.icon[0], iconType)

        if (hasSlot('default')) {
            iconClasses.push('me-2')
        }
    }

    return iconClasses
}
