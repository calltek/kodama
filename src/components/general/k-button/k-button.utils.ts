import { KButtonProps } from './k-button.props'

export const parseButtonClasses = (props: KButtonProps, slots: any) => {
    const hasSlot = (name: string) => !!slots[name]

    const classes = [
        'text-center font-medium rounded-lg focus:outline-none transition-all whitespace-nowrap'
    ]

    const outline = props.outline
    const color = props.color
    const icon = props.icon
    const link = props.link
    const disabled = props.disabled
    const zoom = props.zoom
    const neon = props.neon
    const size = props.size
    const uppercase = props.uppercase
    const type = icon && !hasSlot('default') ? 'icon' : 'text'

    let specific_classes: string[] = []

    // Sizes
    if (type === 'text') {
        if (size === 'xs') {
            specific_classes.push('py-2 px-3 text-xs')
        } else if (size === 'sm') {
            specific_classes.push('py-2 px-3 text-sm')
        } else if (size === 'md') {
            specific_classes.push('py-2.5 px-5 text-sm')
        } else if (size === 'lg') {
            specific_classes.push('py-3 px-5 text-base')
        } else if (size === 'xl') {
            specific_classes.push('py-3.5 px-6 text-base')
        }
    } else {
        specific_classes.push('k-button-icon')

        if (size === 'xs') {
            specific_classes.push('p-2.5 text-xs k-button-icon-xs')
        } else if (size === 'sm') {
            specific_classes.push('p-2.5 text-sm k-button-icon-sm')
        } else if (size === 'md') {
            specific_classes.push('p-2.5 text-base k-button-icon-md')
        } else if (size === 'lg') {
            specific_classes.push('p-3 text-lg k-button-icon-lg')
        } else if (size === 'xl') {
            specific_classes.push('p-3.5 text-xl k-button-icon-xl')
        }
    }

    if (link) {
        specific_classes.push(
            'bg-transparent border-transparent text-opacity-80 hover:text-opacity-100 outline-none'
        )

        if (color === 'white' || color === 'dark') {
            specific_classes.push('text-gray-900 dark:text-white')
        } else if (color === 'gray') {
            specific_classes.push('text-gray-700')
        } else if (color === 'primary') {
            specific_classes.push('text-primary')
        } else if (color === 'secondary') {
            specific_classes.push('text-secondary')
        } else if (color === 'success') {
            specific_classes.push('text-success')
        } else if (color === 'warning') {
            specific_classes.push('text-warning')
        } else if (color === 'danger') {
            specific_classes.push('text-danger')
        } else if (color === 'info') {
            specific_classes.push('text-info')
        }
    } else if (outline) {
        specific_classes.push('border')

        if (color === 'white' || color === 'black') {
            specific_classes.push(
                'border-black text-black dark:border-white dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
            )
        } else if (color === 'gray') {
            specific_classes.push(
                'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-700'
            )
        } else if (color === 'primary') {
            specific_classes.push(
                'border-primary text-primary hover:bg-primary hover:text-white'
            )
        } else if (color === 'secondary') {
            specific_classes.push(
                'border-secondary text-secondary hover:bg-secondary hover:text-white'
            )
        } else if (color === 'success') {
            specific_classes.push(
                'border-success text-success hover:bg-success hover:text-white'
            )
        } else if (color === 'warning') {
            specific_classes.push(
                'border-warning text-warning hover:bg-warning hover:text-white'
            )
        } else if (color === 'danger') {
            specific_classes.push(
                'border-danger text-danger hover:bg-danger hover:text-white'
            )
        } else if (color === 'info') {
            specific_classes.push(
                'border-info text-info hover:bg-info hover:text-white'
            )
        }
    } else {
        if (neon) {
            specific_classes.push(
                'border bg-opacity-20 hover:bg-opacity-100 border-opacity-0 hover:border-opacity-100 dark:bg-opacity-10 dark:hover:bg-opacity-100 dark:border-opacity-0 dark:hover:border-opacity-100'
            )
        } else {
            specific_classes.push(
                'border bg-opacity-80 hover:bg-opacity-100 dark:bg-opacity-80 dark:hover:bg-opacity-100'
            )
        }

        if (color === 'white' || color === 'black') {
            specific_classes.push(
                'border-black bg-black dark:border-white dark:bg-white'
            )
            specific_classes.push(
                neon
                    ? 'text-black dark:text-white hover:text-white dark:hover:text-black'
                    : 'text-white dark:text-black'
            )
        } else if (color === 'gray') {
            specific_classes.push('border-gray-300 bg-gray-300')
            specific_classes.push(
                neon ? 'text-gray-500 hover:text-gray-700' : 'text-gray-700'
            )
        } else if (color === 'primary') {
            specific_classes.push('border-primary bg-primary')
            specific_classes.push(
                neon ? 'text-primary hover:text-white' : 'text-white'
            )
        } else if (color === 'secondary') {
            specific_classes.push('border-secondary  bg-secondary')
            specific_classes.push(
                neon ? 'text-secondary hover:text-white' : 'text-white'
            )
        } else if (color === 'success') {
            specific_classes.push('border-success  bg-success')
            specific_classes.push(
                neon ? 'text-success hover:text-white' : 'text-white'
            )
        } else if (color === 'warning') {
            specific_classes.push('border-warning  bg-warning')
            specific_classes.push(
                neon ? 'text-warning hover:text-white' : 'text-white'
            )
        } else if (color === 'danger') {
            specific_classes.push('border-danger  bg-danger')
            specific_classes.push(
                neon ? 'text-danger hover:text-white' : 'text-white'
            )
        } else if (color === 'info') {
            specific_classes.push('border-info  bg-info')
            specific_classes.push(
                neon ? 'text-info hover:text-white' : 'text-white'
            )
        }
    }

    // Text modify
    if (uppercase) {
        specific_classes.push('uppercase')
    }

    // Text modify
    if (zoom) {
        specific_classes.push('k-button-zoom')
    }

    // Disabled
    if (disabled) {
        specific_classes = specific_classes
            .join(' ')
            .split(' ')
            .filter((name) => {
                // if (neon) {
                //     return true
                // }

                return !name.includes('hover:')
            })

        specific_classes.push('opacity-40')
    }

    // Cursors
    if (props.loading) {
        specific_classes.push('cursor-pointer')
    } else if (disabled) {
        specific_classes.push('cursor-not-allowed')
    } else {
        specific_classes.push('cursor-pointer')
    }

    return classes.concat(specific_classes)
}

export const parseIconClasses = (props: KButtonProps, slots: any) => {
    const hasSlot = (name: string) => !!slots[name]
    const iconClasses: string[] = []

    if (typeof props.icon === 'string') {
        iconClasses.push('fad', `fa-${props.icon}`)

        if (hasSlot('default')) {
            iconClasses.push('mr-2')
        }
    } else if (Array.isArray(props.icon)) {
        const iconType = props.icon[1].includes('fa-')
            ? props.icon[1]
            : 'fa-' + props.icon[1]
        iconClasses.push(props.icon[0], iconType)

        if (hasSlot('default')) {
            iconClasses.push('mr-2')
        }
    }

    return iconClasses
}
