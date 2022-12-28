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
                description: 'Define el tamaño del titulo.'
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
            },
            color: {
                type: String,
                default: 'gray-800',
                description: 'Define el color del titulo para el modo claro.'
            }
        },
        setup(props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]

            const dinamicSubtitleClasses = computed(() => {
                if (hasSlot('subtitle')) {
                    const classList: string[] = ['opacity-50']
                    classList.push(`text-${props.color}`)

                    if (props.size === 1) {
                        classList.push('h1')
                    } else if (props.size === 2) {
                        classList.push('h2')
                    } else if (props.size === 3) {
                        classList.push('h3')
                    } else if (props.size === 4) {
                        classList.push('h4')
                    } else if (props.size === 5) {
                        classList.push('h5')
                    } else if (props.size === 6) {
                        classList.push('h6')
                    }

                    if (props.center) {
                        classList.push('text-center')
                    }

                    return classList
                } else {
                    return []
                }
            })

            const dinamicClasses = computed(() => {
                const classList: string[] = ['title']
                classList.push(`text-${props.color}`)

                if (props.size === 1) {
                    classList.push('h1')
                } else if (props.size === 2) {
                    classList.push('h2')
                } else if (props.size === 3) {
                    classList.push('h3')
                } else if (props.size === 4) {
                    classList.push('h4')
                } else if (props.size === 5) {
                    classList.push('h5')
                } else if (props.size === 6) {
                    classList.push('h6')
                }

                if (props.uppercase) {
                    classList.push('text-uppercase')
                }
                if (props.center) {
                    classList.push('text-center')
                }
                if (props.bold) {
                    classList.push('fw-bold')
                }
                if (props.bolder) {
                    classList.push('fw-bolder')
                }
                return classList
            })

            return { dinamicClasses, dinamicSubtitleClasses }
        }
    })
</script>
