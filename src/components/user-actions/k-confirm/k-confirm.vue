<template>
    <tippy ref="tooltip" trigger="click" theme="light" :interactive="true">
        <template #content>
            <div
                class="flex flex-row align-items-center py-3 px-1"
                :class="$style.KConfirm"
            >
                <k-icon :icon="icon" class="text-gray-300 me-4" size="45" />

                <div class="flex flex-column">
                    <div class="mb-2 text-gray-500 fw-bold">
                        {{ title }}
                    </div>

                    <div class="text-start">
                        <a
                            class="btn btn-ok btn-success btn-outline me-2"
                            :class="$style.btn"
                            @click="ok"
                        >
                            {{ okText }}
                        </a>

                        <a
                            class="btn btn-ko btn-danger btn-outline"
                            :class="$style.btn"
                            @click="ko"
                        >
                            {{ koText }}
                        </a>
                    </div>
                </div>
            </div>
        </template>

        <slot></slot>
    </tippy>
</template>

<script lang="ts">
    import { defineComponent, PropType, ref } from 'vue'
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
            }
        },
        emits: ['ok', 'ko'],
        setup(props, ctx) {
            const tooltip: any = ref(null)
            const ok = () => {
                ctx.emit('ok')
                tooltip?.value?.hide()
            }
            const ko = () => {
                ctx.emit('ko')
                tooltip?.value?.hide()
            }
            return { tooltip, ok, ko }
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
