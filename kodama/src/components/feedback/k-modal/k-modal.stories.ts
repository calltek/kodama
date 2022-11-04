import KModal from './k-modal.vue'
import KModalProps from './k-modal.props'
import { Meta, Story } from '@storybook/vue3'
import { renderArgs } from '../../../helpers/storybook'
import { reactive, ref } from 'vue'

export default {
    title: 'Feedback/Modal',
    component: KModal,
    argTypes: renderArgs(KModalProps),
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Some component _markdown_'
            }
        }
    }
} as Meta

const KButtonStory = (component: string, args: any, customArgs?: any) => {
    const props = { ...customArgs, ...args }

    return {
        components: { KModal },
        setup() {
            const visible = ref(false)
            return { props, visible }
        },
        template: `
            ${component}
            <div class="btn btn-primary" @click="visible = true">Abrir Modal</div>
        `
    }
}
//TODO: Ver porque al tener multiples modal estos no funcionan correctamente

const KModalStories = (components: string[]) => {
    return {
        components: { KModal },
        setup() {
            const visible = reactive(components.map(() => false))
            return { components, visible }
        },
        template: `
            <template v-for="(c,i) in components">
                <k-modal v-model:visible="visible[i]">Este es un modal de tamaño {{c}}</k-modal>
                <div class="btn btn-primary me-2" @click="visible[i] = true" >Abrir Modal {{c}}  {{visible[i]}}</div>
            </template>
        `
    }
}

export const Default: Story = (args) =>
    KButtonStory(
        `<k-modal v-bind="props" v-model:visible="visible">
            Lorem ipsum dolor sit amet
        </k-modal>`,
        args,
        { title: 'Modal por defecto' }
    )

export const Static: Story = (args) =>
    KButtonStory(
        `<k-modal v-bind="props" v-model:visible="visible">
            Colocando la propìedad <b>static</b> a <b class="text-danger">true</b> evitara cerrar el modal haciendo click en el backdrop
        </k-modal>`,
        args,
        { static: true, title: 'Modal estático' }
    )

export const Scrollable: Story = (args) =>
    KButtonStory(
        `<k-modal v-bind="props" v-model:visible="visible">
            <p>Colocando la propìedad <b>scrollable</b> a <b class="text-danger">true</b> hará el modal desplazable</p>
            <p>También puedes definir la altura máxima del modal con la propiedad <b>height</b></p>
            <hr>
            <i class="text-muted">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </i>
        </k-modal>`,
        args,
        { title: 'Modal desplazable', scrollable: true, height: 300 }
    )

export const Sizes: Story = (args) => KModalStories(['LG', 'MD', 'SM'])
