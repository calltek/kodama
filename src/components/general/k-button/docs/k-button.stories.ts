import type { Meta, StoryObj } from '@storybook/vue3'
import { renderArgsV2 } from '../../../../helpers/storybook'

import KButton from '../k-button.vue'
import props from '../k-button.props'

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

type Story = StoryObj<typeof meta>

export const Estandar: Story = {
    render: (args) => ({
        components: { KButton },
        setup() {
            return { args }
        },
        template: `
            <k-button v-bind="args">Info</k-button>
        `
    })
}

export const Color: Story = {
    render: () => ({
        components: { KButton },
        template: `
            <div class="flex flex-row gap-2">
                <k-button color="gray">Gray</k-button>
                <k-button color="primary">Primary</k-button>
                <k-button color="secondary">Secondary</k-button>
                <k-button color="success">Success</k-button>
                <k-button color="warning">Warning</k-button>
                <k-button color="danger">Danger</k-button>
                <k-button color="info">Info</k-button>
            </div>
        `
    })
}

export const Neon: Story = {
    render: () => ({
        components: { KButton },
        template: `
            <div class="flex flex-row gap-2">
                <k-button color="gray" neon>Gray</k-button>
                <k-button color="primary" neon>Primary</k-button>
                <k-button color="secondary" neon>Secondary</k-button>
                <k-button color="success" neon>Success</k-button>
                <k-button color="warning" neon>Warning</k-button>
                <k-button color="danger" neon>Danger</k-button>
                <k-button color="info" neon>Info</k-button>
            </div>
        `
    })
}

export default meta
