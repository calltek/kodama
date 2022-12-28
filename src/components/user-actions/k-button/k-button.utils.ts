import { KButtonProps } from './k-button.props'

export const parseButtonClasses = (props: KButtonProps, slots: any) => {
    const hasSlot = (name: string) => !!slots[name]

    const classes = [
        'text-center font-medium rounded-lg focus:outline-none transition-all'
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
            'bg-transparent border-transparent text-opacity-80 hover:text-opacity-100'
        )

        if (color === 'white') {
            specific_classes.push('text-white')
        } else if (color === 'black') {
            specific_classes.push('text-black')
        } else if (color === 'light') {
            specific_classes.push('text-light dark:text-inverse-dark')
        } else if (color === 'dark') {
            specific_classes.push('text-dark dark:text-inverse-light')
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

        if (color === 'white') {
            specific_classes.push(
                'border-white text-white hover:bg-white hover:text-inverse-white'
            )
        } else if (color === 'black') {
            specific_classes.push(
                'border-black text-black hover:bg-black hover:text-inverse-black'
            )
        } else if (color === 'light') {
            specific_classes.push(
                'border-light text-light hover:bg-light hover:text-gray-400 dark:border-light dark:text-gray-400 dark:hover:bg-light dark:hover:text-gray-400'
            )
        } else if (color === 'dark') {
            specific_classes.push(
                'border-dark text-dark hover:bg-dark hover:text-inverse-dark dark:border-inverse-light dark:text-inverse-light dark:hover:bg-inverse-light dark:hover:text-light'
            )
        } else if (color === 'primary') {
            specific_classes.push(
                'border-primary text-primary hover:bg-primary hover:text-inverse-primary'
            )
        } else if (color === 'secondary') {
            specific_classes.push(
                'border-secondary text-secondary hover:bg-secondary hover:text-inverse-secondary'
            )
        } else if (color === 'success') {
            specific_classes.push(
                'border-success text-success hover:bg-success hover:text-inverse-success'
            )
        } else if (color === 'warning') {
            specific_classes.push(
                'border-warning text-warning hover:bg-warning hover:text-inverse-warning'
            )
        } else if (color === 'danger') {
            specific_classes.push(
                'border-danger text-danger hover:bg-danger hover:text-inverse-danger'
            )
        } else if (color === 'info') {
            specific_classes.push(
                'border-info text-info hover:bg-info hover:text-inverse-info'
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

        if (color === 'white') {
            specific_classes.push('border-white bg-white')
            specific_classes.push(
                neon
                    ? 'text-white hover:text-inverse-white'
                    : 'text-inverse-white'
            )
        } else if (color === 'black') {
            specific_classes.push('border-black bg-black')
            specific_classes.push(
                neon
                    ? 'text-black hover:text-inverse-black'
                    : 'text-inverse-black'
            )
        } else if (color === 'light') {
            specific_classes.push(
                'border-light bg-light dark:bg-inverse-dark dark:border-inverse-dark  dark:hover:text-gray-400'
            )

            specific_classes.push(
                neon
                    ? 'text-light hover:text-gray-400 dark:text-inverse-dark'
                    : 'text-gray-400'
            )
        } else if (color === 'dark') {
            specific_classes.push(
                'border-dark bg-dark dark:bg-inverse-light dark:border-inverse-light dark:text-inverse-dark dark:hover:text-inverse-dark'
            )
            specific_classes.push(
                neon ? 'text-dark hover:text-inverse-dark' : 'text-inverse-dark'
            )
        } else if (color === 'primary') {
            specific_classes.push('border-primary bg-primary')
            specific_classes.push(
                neon
                    ? 'text-primary hover:text-inverse-primary'
                    : 'text-inverse-primary'
            )
        } else if (color === 'secondary') {
            specific_classes.push('border-secondary  bg-secondary')
            specific_classes.push(
                neon
                    ? 'text-secondary hover:text-inverse-secondary'
                    : 'text-inverse-secondary'
            )
        } else if (color === 'success') {
            specific_classes.push('border-success  bg-success')
            specific_classes.push(
                neon
                    ? 'text-success hover:text-inverse-success'
                    : 'text-inverse-success'
            )
        } else if (color === 'warning') {
            specific_classes.push('border-warning  bg-warning')
            specific_classes.push(
                neon
                    ? 'text-warning hover:text-inverse-warning'
                    : 'text-inverse-warning'
            )
        } else if (color === 'danger') {
            specific_classes.push('border-danger  bg-danger')
            specific_classes.push(
                neon
                    ? 'text-danger hover:text-inverse-danger'
                    : 'text-inverse-danger'
            )
        } else if (color === 'info') {
            specific_classes.push('border-info  bg-info')
            specific_classes.push(
                neon ? 'text-info hover:text-inverse-info' : 'text-inverse-info'
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
