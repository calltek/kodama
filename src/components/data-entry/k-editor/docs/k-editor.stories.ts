import type { Meta, StoryObj } from '@storybook/vue3'
import { renderArgsV2 } from '../../../../helpers/storybook'

import KEditor from '../k-editor.vue'
import props from '../k-editor.props'

const meta = {
    title: 'Formularios/Editor',
    component: KEditor,
    argTypes: renderArgsV2(props),
    parameters: {
        options: {
            showPanel: false
        }
    }
} satisfies Meta<typeof KEditor>

type Story = StoryObj<typeof meta>

export const Estandar: Story = {
    render: (args) => ({
        components: { KEditor },
        setup() {
            return { args }
        },
        template: `
            <k-card><k-editor v-bind="args" /></k-card>
        `
    })
}

export const Mandatory: Story = {
    render: (args) => ({
        components: { KEditor },
        setup() {
            return {
                args,
                mandatory:
                    '<p>Esto es un contenido de prueba ogligatorio que no se puede borrar</p>'
            }
        },
        template: `
            <k-card><k-editor :mandatory="mandatory" /></k-card>
        `
    })
}

export default meta
