<template>
    <div>
        <h1 v-if="size === 1" :class="dinamicClasses">
            <slot />
        </h1>

        <h2 v-if="size === 2" :class="dinamicClasses">
            <slot />
        </h2>

        <h3 v-if="size === 3" :class="dinamicClasses">
            <slot />
        </h3>

        <h4 v-if="size === 4" :class="dinamicClasses">
            <slot />
        </h4>

        <h5 v-if="size === 5" :class="dinamicClasses">
            <slot />
        </h5>

        <h6 v-if="size === 6" :class="dinamicClasses">
            <slot />
        </h6>

        <div
            v-if="dinamicSubtitleClasses.length > 0"
            :class="dinamicSubtitleClasses"
        >
            <slot name="subtitle" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    export default defineComponent({
        name: 'KTitle',
        autoload: true,
        props: {
            size: {
                type: Number,
                default: 1,
                description: 'Define el tamaño del titulo.',
                options: [1, 2, 3, 4, 5, 6],
                control: 'inline-radio'
            },
            uppercase: {
                type: Boolean,
                default: false,
                description: 'Define si el titulo debe ser en mayusculas.'
            },
            bold: {
                type: Boolean,
                default: false,
                description: 'Define si el titulo debe ser en negrita.'
            },
            bolder: {
                type: Boolean,
                default: false,
                description: 'Define si el titulo debe ser en negrita.'
            },
            center: {
                type: Boolean,
                default: false,
                description: 'Define si el titulo debe ser centrado.'
            }
        },
        setup(props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]

            const dinamicSubtitleClasses = computed(() => {
                if (hasSlot('subtitle')) {
                    const classList: string[] = ['opacity-50']

                    if (props.size === 1) {
                        classList.push('text-3xl')
                    } else if (props.size === 2) {
                        classList.push('text-2xl')
                    } else if (props.size === 3) {
                        classList.push('text-xl')
                    } else if (props.size === 4) {
                        classList.push('text-lg')
                    } else if (props.size === 5) {
                        classList.push('text-base')
                    } else if (props.size === 6) {
                        classList.push('text-sm')
                    }

                    if (props.center) {
                        classList.push('text-center')
                    }

                    if (props.bolder) {
                        classList.push('font-bold')
                    } else if (props.bold) {
                        classList.push('font-semibold')
                    }

                    return classList
                } else {
                    return []
                }
            })

            const dinamicClasses = computed(() => {
                const classList: string[] = ['title']

                if (props.size === 1) {
                    classList.push('text-5xl')
                } else if (props.size === 2) {
                    classList.push('text-4xl')
                } else if (props.size === 3) {
                    classList.push('text-3xl')
                } else if (props.size === 4) {
                    classList.push('text-2xl')
                } else if (props.size === 5) {
                    classList.push('text-xl')
                } else if (props.size === 6) {
                    classList.push('text-lg')
                }

                if (props.uppercase) {
                    classList.push('uppercase')
                }
                if (props.center) {
                    classList.push('text-center')
                }

                if (props.bolder) {
                    classList.push('font-bold')
                } else if (props.bold) {
                    classList.push('font-semibold')
                }

                return classList
            })

            return { dinamicClasses, dinamicSubtitleClasses }
        }
    })
</script>
