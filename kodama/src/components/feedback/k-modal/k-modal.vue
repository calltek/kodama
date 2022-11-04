<template>
    <div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" :class="modalClasses">
            <div class="modal-content" :style="contentStyle">
                <div class="modal-header py-4">
                    <h5 class="modal-title" v-if="hasSlot('title')">
                        <slot name="title"></slot>
                    </h5>
                    <h5 class="modal-title text-uppercase" v-else>
                        {{ title }}
                    </h5>

                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Cerrar"
                        @click="closeModal"
                    ></button>
                </div>

                <div class="modal-body">
                    <slot></slot>
                </div>

                <div class="modal-footer" v-if="hasSlot('footer')">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, onUnmounted, watch } from 'vue'

    import props from './k-modal.props'
    import useModal, { modal } from './k-modal.utils'

    export default defineComponent({
        name: 'KModal',
        autoload: true,
        props: props,
        emits: ['update:visible'],
        setup(props, ctx) {
            const hasSlot = (name: string) => !!ctx.slots[name]

            const { closeModal, modalClasses, contentStyle, setupModal } =
                useModal(props, ctx)

            onMounted(() => {
                setupModal()
            })

            onUnmounted(() => {
                if (modal.value) {
                    modal.value.hide()
                    modal.value = null
                }
            })

            watch(
                () => props.visible,
                (val) => {
                    if (val) {
                        modal.value?.show()
                    } else {
                        modal.value?.hide()
                    }
                }
            )

            watch(
                () => props.static,
                () => setupModal()
            )

            return { hasSlot, closeModal, modalClasses, contentStyle }
        }
    })
</script>

<style scoped></style>
