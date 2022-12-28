// import { Modal } from 'bootstrap'
import { computed, ref, Ref, SetupContext } from 'vue'

import { KModalProps } from './k-modal.props'

export const modal: Ref<any | null> = ref(null)

export default function (
    props: KModalProps,
    ctx: SetupContext<'update:visible'[]>
): any {
    const closeModal = () => {
        console.log('close', props.id)
        ctx.emit('update:visible', false)
    }

    const showModal = () => {
        console.log('close', props.id)
        ctx.emit('update:visible', true)
    }

    const setupModal = () => {
        // modal.value = new Modal('#' + props.id, {
        //     backdrop: props.static ? 'static' : true
        // })

        const el = document.getElementById(props.id)

        if (el) {
            el.addEventListener('hidden.bs.modal', () => {
                closeModal()
            })

            el.addEventListener('show.bs.modal', () => {
                showModal()
            })
        }
    }

    const modalClasses = computed(() => {
        const classes: string[] = [`modal-${props.size}`]

        if (props.scrollable) classes.push('modal-dialog-scrollable')
        if (props.centered) classes.push('modal-dialog-centered')

        return classes
    })

    const contentStyle = computed(() => {
        const styles: Record<string, string> = {}

        if (props.height > 0) styles['max-height'] = `${props.height}px`

        return styles
    })

    return {
        modal,
        closeModal,
        modalClasses,
        contentStyle,
        setupModal
    }
}
