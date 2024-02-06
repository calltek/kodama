<template>
    <k-modal v-model="model" size="xs" :z-index="50">
        <div class="flex flex-col items-center" :class="$style.KConfirm">
            <k-icon
                :icon="icon"
                type="far"
                class="text-gray-300 mb-6"
                :size="60"
            />

            <div
                class="mb-4 text-gray-700 dark:text-gray-200 font-semibold text-xl text-center"
            >
                {{ title }}
            </div>

            <div>
                <k-button
                    color="success"
                    class="mr-2 cursor-pointer"
                    @click="ok"
                >
                    {{ okText }}
                </k-button>

                <k-button
                    color="danger"
                    class="cursor-pointer"
                    outline
                    @click="ko"
                >
                    {{ koText }}
                </k-button>
            </div>
        </div>
    </k-modal>

    <span @click="open()">
        <slot></slot>
    </span>
</template>

<script lang="ts">
    import { computed, defineComponent, ref } from 'vue'
    export default defineComponent({
        name: 'KConfirm',
        autoload: true,
        props: {
            icon: {
                type: String,
                default: 'question-circle'
            },
            title: {
                type: String,
                default: '¿Estás seguro de realizar esta acción?',
                description: 'Pregunta de confirmación'
            },
            okText: {
                type: String,
                default: 'Aceptar'
            },
            koText: {
                type: String,
                default: 'Cancelar'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            unlocked: {
                type: Boolean,
                default: false
            }
        },
        emits: ['ok', 'ko'],
        setup(props, ctx) {
            const showModal = ref(false)

            const model = computed({
                get() {
                    const visible = showModal.value === true && !props.disabled
                    return visible
                },
                set(value) {
                    showModal.value = value
                }
            })

            const ok = () => {
                ctx.emit('ok')
                showModal.value = false
            }

            const ko = () => {
                ctx.emit('ko')
                showModal.value = false
            }

            const open = () => {
                if (props.disabled) return
                if (props.unlocked) {
                    ok()
                } else {
                    showModal.value = true
                }
            }

            return { showModal, ok, ko, open, model }
        }
    })
</script>

<style module lang="scss">
    .KConfirm {
        .btn {
            padding: 0.2rem 0.5rem;
            font-size: 0.8rem;
            border-radius: 0.325rem;
        }
        .icon {
            font-size: 3rem;
            margin-right: 1rem;
        }
    }
</style>
