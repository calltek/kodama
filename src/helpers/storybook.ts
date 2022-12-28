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

export function getControlType(props: any): string {
    const type = props.type
    const control = props.control || null
    const options = props.options || null

    if (type === Boolean) {
        return control || 'boolean'
    } else if (type === String) {
        return control || (options ? 'inline-radio' : 'text')
    } else if (type === Number) {
        return props.control || 'number'
    } else if (Array.isArray(type)) {
        return getControlType(type[0])
    } else {
        return 'text'
    }
}

type Control = {
    type: string
    options?: string[]
    disable?: boolean
    presetColors?: string[]
}

export function parseControl(props: any, disabled = false, onlyType = false) {
    const type = props.type
    const control = props.control || null
    const options = props.options || null
    const presetColors = props.presetColors || null

    const data: Control = { type: 'text', disable: disabled }

    if (type === Boolean) {
        data.type = control || 'boolean'
    } else if (type === String) {
        data.type = control || (options ? 'inline-radio' : 'text')
    } else if (type === Number) {
        data.type = props.control || 'number'
    } else if (Array.isArray(type)) {
        data.type = parseControl(type[0], disabled, true).toString()
    } else {
        return 'text'
    }

    if (options) {
        data.options = options
    }

    if (presetColors) {
        data.presetColors = presetColors
    }

    if (onlyType) return data.type

    return data
}

export function renderArgs(
    component: any,
    argTypes: Record<string, any> = {},
    disabled = false
) {
    const props: Record<string, any> = {}

    // Controls
    for (let i = 0; i < Object.keys(component.props).length; i++) {
        const name = Object.keys(component.props)[i]
        const prop = component.props[name]

        const nprop: any = {
            description: prop.description,
            type: { name: '', required: prop.required || false },
            control: { type: 'text' },
            table: {
                defaultValue:
                    prop.default !== undefined
                        ? { summary: prop.default }
                        : undefined,
                type: { summary: '', required: prop.required || false },
                disable: disabled
            }
        }

        nprop.control = parseControl(prop, disabled)
        nprop.type.name = parseControl(prop, disabled, true).toString()

        // Table types
        if (Array.isArray(prop.type)) {
            const type = prop.type
                .map((t: any) => {
                    return getReturnType(t)
                })
                .join(' | ')

            nprop.table.type.summary = type
            // nprop.control.type = 'array'
        } else {
            nprop.table.type.summary = getReturnType(prop.type)
        }

        if (argTypes[name]) {
            props[name] = { ...argTypes[name], ...nprop }
        } else {
            props[name] = nprop
        }
    }

    // ACtions
    const emits = component.emits

    for (let i = 0; i < emits.length; i++) {
        const emit = emits[i]

        if (emit === 'click') {
            props.onClick = { action: 'clicked' }
        }
    }

    return props
}

export function renderParameters({ showPanel } = { showPanel: true }) {
    return {
        options: { showPanel: showPanel }
    }
}