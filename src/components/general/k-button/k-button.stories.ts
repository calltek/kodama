import type { Meta, StoryObj } from '@storybook/vue3'
import { renderArgsV2 } from '../../../helpers/storybook'

import KButton from './k-button.vue'
import props from './k-button.props'

const meta = {
    title: 'General/Button',
    component: KButton,
    argTypes: renderArgsV2(props),
    parameters: {
        options: {
            showPanel: false
        }
    }
} satisfies Meta<typeof KButton>

export default meta
type Story = StoryObj<typeof meta>

export const Estandar: Story = {
    render: (args) => ({
        components: { KButton },
        setup() {
            return { args }
        },
        template: `
            <k-card>
                <KButton class="mr-2" color="info">Info</KButton>
            </k-card>
        `
    })
}

export const Color: Story = {
    render: (args) => ({
        components: { KButton },
        setup() {
            return { args }
        },
        template: `
            <k-card>
                <KButton class="mr-2" color="gray">Gray</KButton>
                <KButton class="mr-2" color="primary">Primary</KButton>
                <KButton class="mr-2" color="secondary">Secondary</KButton>
                <KButton class="mr-2" color="success">Success</KButton>
                <KButton class="mr-2" color="warning">Warning</KButton>
                <KButton class="mr-2" color="danger">Danger</KButton>
                <KButton class="mr-2" color="info">Info</KButton>
            </k-card>
        `
    })
}
