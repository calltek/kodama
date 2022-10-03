import KButton from './k-button.vue'
import KButtonProps from './k-button.props'
import { Meta, Story } from '@storybook/vue3'
import { renderArgs } from '../../../helpers/storybook'

export default {
    title: 'User Actions/Button',
    component: KButton,
    argTypes: renderArgs(KButtonProps),
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Some component _markdown_'
            }
        }
    }
} as Meta

interface KodamaComponent {
    slot?: string | null
    props: Record<string, any>
}

const KButtonStory = (args: any, customArgs?: any) => {
    const props = { ...customArgs, ...args }

    return {
        parameters: {
            docs: {
                description: {
                    story: 'Some story **markdown**'
                }
            }
        },
        components: { KButton },
        setup() {
            return { props }
        },
        template: `<k-button v-bind="props">Button</k-button>`
    }
}

const KButtonStories = (components: KodamaComponent[]) => {
    return {
        components: { KButton },
        setup() {
            return { components }
        },
        template: `
            <template v-for="(c,i) in components">
                <k-button v-if="c.slot === null" v-bind="c.props" class="me-2" />
                <k-button v-else v-bind="c.props" class="me-2">{{c.slot || 'Button'}}</k-button>
            </template>
        `
    }
}

export const Default: Story = (args) => KButtonStory(args)

export const Color: Story = () =>
    KButtonStories([
        {
            slot: 'Primary',
            props: { color: 'primary' }
        },
        {
            slot: 'Secondary',
            props: { color: 'secondary' }
        },
        {
            slot: 'Dark',
            props: { color: 'dark' }
        },
        {
            slot: 'White',
            props: { color: 'white' }
        },
        {
            slot: 'Light',
            props: { color: 'light' }
        },
        {
            slot: 'Success',
            props: { color: 'success' }
        },
        {
            slot: 'Warning',
            props: { color: 'warning' }
        },
        {
            slot: 'Danger',
            props: { color: 'danger' }
        },
        {
            slot: 'Info',
            props: { color: 'info' }
        }
    ])

export const Light: Story = () =>
    KButtonStories([
        {
            slot: 'Primary',
            props: { color: 'primary', light: true }
        },
        {
            slot: 'Secondary',
            props: { color: 'secondary', light: true }
        },
        {
            slot: 'Dark',
            props: { color: 'dark', light: true }
        },
        {
            slot: 'White',
            props: { color: 'white', light: true }
        },
        {
            slot: 'Light',
            props: { color: 'light', light: true }
        },
        {
            slot: 'Success',
            props: { color: 'success', light: true }
        },
        {
            slot: 'Warning',
            props: { color: 'warning', light: true }
        },
        {
            slot: 'Danger',
            props: { color: 'danger', light: true }
        },
        {
            slot: 'Info',
            props: { color: 'info', light: true }
        }
    ])

export const Outline: Story = () =>
    KButtonStories([
        {
            slot: 'Primary',
            props: { color: 'primary', outline: true }
        },
        {
            slot: 'Secondary',
            props: { color: 'secondary', outline: true }
        },
        {
            slot: 'Dark',
            props: { color: 'dark', outline: true }
        },
        {
            slot: 'White',
            props: { color: 'white', outline: true }
        },
        {
            slot: 'Light',
            props: { color: 'light', outline: true }
        },
        {
            slot: 'Success',
            props: { color: 'success', outline: true }
        },
        {
            slot: 'Warning',
            props: { color: 'warning', outline: true }
        },
        {
            slot: 'Danger',
            props: { color: 'danger', outline: true }
        },
        {
            slot: 'Info',
            props: { color: 'info', outline: true }
        }
    ])

export const Active: Story = () =>
    KButtonStories([
        {
            slot: 'Primary',
            props: { color: 'primary', active: true }
        },
        {
            slot: 'Secondary',
            props: { color: 'secondary', active: true }
        },
        {
            slot: 'Dark',
            props: { color: 'dark', active: true }
        },
        {
            slot: 'White',
            props: { color: 'white', active: true }
        },
        {
            slot: 'Light',
            props: { color: 'light', active: true }
        },
        {
            slot: 'Success',
            props: { color: 'success', active: true }
        },
        {
            slot: 'Warning',
            props: { color: 'warning', active: true }
        },
        {
            slot: 'Danger',
            props: { color: 'danger', active: true }
        },
        {
            slot: 'Info',
            props: { color: 'info', active: true }
        }
    ])

export const Size: Story = () =>
    KButtonStories([
        {
            props: {
                size: 'sm'
            }
        },
        {
            props: {
                size: 'md'
            }
        },
        {
            props: {
                size: 'lg'
            }
        }
    ])

export const Loading: Story = (args) => KButtonStory(args, { loading: true })

export const Disabled: Story = (args) => KButtonStory(args, { disabled: true })

export const Icon: Story = () =>
    KButtonStories([
        {
            slot: 'unicorn',
            props: {
                icon: ['fal', 'unicorn']
            }
        },
        {
            slot: null,
            props: {
                icon: ['fal', 'unicorn'],
                size: 'sm'
            }
        },
        {
            slot: null,
            props: {
                icon: ['fal', 'unicorn']
            }
        },

        {
            slot: null,
            props: {
                icon: ['fal', 'unicorn'],
                size: 'lg'
            }
        }
    ])

export const Title: Story = (args) =>
    KButtonStory(args, { title: 'Lorem ipsum dolor sit' })
