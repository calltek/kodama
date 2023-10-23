import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { renderArgsV2 } from '../../../../helpers/storybook'

import KDropzone from '../k-dropzone.vue'
import props from '../k-dropzone.props'

const meta = {
    title: 'User Input/Dropzone',
    component: KDropzone,
    argTypes: renderArgsV2(props),
    parameters: {
        options: {
            showPanel: false
        }
    }
} satisfies Meta<typeof KDropzone>

type Story = StoryObj<typeof meta>

export const Estandar: Story = {
    render: (args) => ({
        components: { KDropzone },
        setup() {
            const image = ref(
                'https://img.freepik.com/foto-gratis/view-of-daunting-witch-character_23-2150674779.jpg?t=st=1697809469~exp=1697810069~hmac=a7f9459dc3d97ed018da2b66f494645c70e7c9e0df2e91dbd624b0e49837ef38'
            )
            return { args, image }
        },
        template: `
            <k-dropzone v-bind="args" v-model="image" :maxSize="1024" :accept="[\'png\', \'jpg\', \'pdf\', \'7z\', \'rar\']"></k-dropzone>
        `
    })
}

export const Disabled: Story = {
    render: () => ({
        components: { KDropzone },
        template: `
            <k-dropzone :disabled="true"></k-dropzone>
        `
    })
}

export const Label: Story = {
    render: () => ({
        components: { KDropzone },
        template: `
            <k-dropzone label="Ejemplo de label"></k-dropzone>
        `
    })
}

export default meta
