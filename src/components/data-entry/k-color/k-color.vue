<template>
    <div class="k-color">
        <v-swatches
            v-model="model"
            :shape="shape"
            :swatches="options.length > 0 ? options : undefined"
            :close-on-select="closeOnSelect"
            :disabled="disabled || readonly"
            :inline="inline"
            :fallback-input-type="fallback"
            :row-length="rowLength"
            :show-fallback="fallback !== 'none'"
            :trigger-style="{
                width: triggerSize,
                height: triggerSize,
                cursor: cursor
            }"
        >
            <template #trigger>
                <slot v-bind="{ model }"></slot>
            </template>
        </v-swatches>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent } from 'vue'
    import { VSwatches } from 'vue3-swatches'
    import 'vue3-swatches/dist/style.css'

    export default defineComponent({
        name: 'KColor',
        components: { VSwatches },
        props: {
            modelValue: {
                type: String,
                default: ''
            },
            square: {
                type: Boolean,
                default: true,
                description: 'Define un estilo cuadrado'
            },
            circle: {
                type: Boolean,
                default: false,
                description: 'Define un estilo circular'
            },
            options: {
                type: Array as () => string[],
                default: () => []
            },
            closeOnSelect: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            inline: {
                type: Boolean,
                default: false
            },
            fallback: {
                type: String as () => 'input' | 'none' | 'color',
                default: 'color'
            },
            rowLength: {
                type: Number,
                default: 4
            },
            size: {
                type: String,
                default: 'md',
                options: ['xs', 'sm', 'md', 'lg']
            }
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const model = computed({
                get() {
                    return props.modelValue
                },
                set(value) {
                    ctx.emit('update:modelValue', value)
                }
            })

            const shape = computed(() => {
                if (props.square) return 'squares'
                if (props.circle) return 'circles'
                return 'squares'
            })

            const triggerSize = computed(() => {
                switch (props.size) {
                    case 'xs':
                        return '2.25rem'
                    case 'sm':
                        return '2.5rem'
                    case 'md':
                        return '3rem'
                    case 'lg':
                        return '3.5rem'
                    default:
                        return '3rem'
                }
            })

            const cursor = computed(() => {
                if (props.disabled) return 'not-allowed'
                if (props.readonly) return 'initial'
                return 'pointer'
            })

            return { model, shape, triggerSize, cursor }
        }
    })
</script>

<style lang="scss">
    .k-color {
    }
</style>
