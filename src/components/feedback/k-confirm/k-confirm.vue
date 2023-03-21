<template>
    <k-tooltip :visible="showTooltip && !disabled">
        <template #content>
            <div
                class="flex flex-row items-center py-3 px-1"
                :class="$style.KConfirm"
            >
                <k-icon :icon="icon" class="text-gray-300 mr-4" :size="45" />

                <div class="flex flex-col">
                    <div
                        class="mb-2 text-gray-600 dark:text-gray-200 font-bold"
                    >
                        {{ title }}
                    </div>

                    <div class="text-right">
                        <k-badge
                            color="success"
                            size="xs"
                            class="mr-2 cursor-pointer"
                            @click="ok"
                        >
                            {{ okText }}
                        </k-badge>

                        <k-badge
                            color="danger"
                            size="xs"
                            class="cursor-pointer"
                            @click="ko"
                        >
                            {{ koText }}
                        </k-badge>
                    </div>
                </div>
            </div>
        </template>

        <span @click="showTooltip = true">
            <slot></slot>
        </span>
    </k-tooltip>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
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
            }
        },
        emits: ['ok', 'ko'],
        setup(props, ctx) {
            const showTooltip = ref(false)

            const ok = () => {
                ctx.emit('ok')
                showTooltip.value = false
            }
            const ko = () => {
                ctx.emit('ko')
                showTooltip.value = false
            }
            return { showTooltip, ok, ko }
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
