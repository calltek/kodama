export function getReturnType(val: any) {
    if (val === Boolean) {
        return 'bool'
    } else if (val === String) {
        return 'string'
    } else if (val === Number) {
        return 'number'
    } else if (val === Array) {
        return 'array'
    } else if (val === Object) {
        return 'object'
    } else {
        return '???'
    }
}

export function getControlType(val: any): string {
    if (val === Boolean) {
        return 'boolean'
    } else if (val === String) {
        return 'text'
    } else if (val === Number) {
        return 'number'
    } else if (Array.isArray(val)) {
        return getControlType(val[0])
    } else {
        return 'string'
    }
}

export function renderArgs(data: any, argTypes: Record<string, any> = {}) {
    const props: Record<string, any> = {}

    for (let i = 0; i < Object.keys(data).length; i++) {
        const name = Object.keys(data)[i]
        const prop = data[name]

        const nprop = {
            description: prop.description,
            type: { name: '', required: prop.required || false },
            control: prop.options
                ? { type: 'select', options: prop.options }
                : { type: 'text' },
            table: {
                defaultValue:
                    prop.default !== undefined
                        ? { summary: prop.default }
                        : undefined,
                type: { summary: '', required: prop.required }
            }
        }

        // if (prop.type === Boolean) {
        //     nprop.control.type = 'boolean'
        //     nprop.table.type.summary = 'bool'
        // } else if (prop.type === String) {
        //     nprop.table.type.summary = 'string'
        // }

        if (Array.isArray(prop.type)) {
            const type = prop.type
                .map((t: any) => {
                    return getReturnType(t)
                })
                .join(' | ')

            nprop.table.type.summary = type
            nprop.control.type = 'array'
        } else {
            nprop.table.type.summary = getReturnType(prop.type)
        }

        nprop.control.type = getControlType(prop.type)
        nprop.type.name = getControlType(prop.type)

        if (argTypes[name]) {
            props[name] = { ...argTypes[name], ...nprop }
        } else {
            props[name] = nprop
        }
    }

    return props
}
