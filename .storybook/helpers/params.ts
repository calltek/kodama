type Control = {
    type: string
    options?: string[]
    disable?: boolean
    presetColors?: string[]
}

export function parseControl(props: any, disabled = false) {
    const type = props.type
    const control = props.control || null
    const options = props.options || null
    const presetColors = props.presetColors || null

    let data: Control = { type: 'text', disable: disabled }

    if (type === Boolean) {
        data = control ? { type: control } : { type: 'boolean' }
    } else if (type === String) {
        data = control
            ? control
            : options
            ? { type: 'inline-radio' }
            : { type: 'text' }
    } else if (type === Number) {
        data = control ? control : { type: 'number' }
    } else if (Array.isArray(type)) {
        data = parseControl(type[0], disabled)
    } else {
        return { type: 'text' }
    }

    if (options) {
        data.options = options
    }

    if (presetColors) {
        data.presetColors = presetColors
    }

    return data
}

export function renderArgsV2(props: any) {
    const args: any = {}

    if (props) {
        Object.keys(props).forEach((key: string) => {
            const prop: any = props[key]

            const description = prop.description || undefined
            const options = prop.options || undefined
            const control = parseControl(prop, false)

            const type = Array.isArray(prop.type)
                ? prop.type.map((t: any) => t.name).join(',')
                : prop.type.name

            args[key] = {
                description: description,
                control: control,
                options: options,
                table: {
                    defaultValue:
                        prop.default !== undefined
                            ? { summary: prop.default }
                            : undefined,
                    type: {
                        summary: type.toLowerCase(),
                        required: prop.required || false
                    },
                    disable: false
                }
            }

            // args[prop.name].control = parseControl(prop, false)
            // args[prop.name].type.name = parseControl(prop, false).type
            // if (Array.isArray(prop.type)) {
            //     const type = prop.type
            //         .map((t: any) => {
            //             return getReturnType(t)
            //         })
            //         .join(' | ')

            //     args[prop.name].table.type.summary = type
            // } else {
            //     args[prop.name].table.type.summary = getReturnType(prop.type)
            // }
        })
    }

    return args
}
