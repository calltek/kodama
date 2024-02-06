<template>
    <div id="uid" class="k-input-inline" :class="classes">
        <input
            ref="input"
            v-model="model"
            type="text"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :maxlength="maxlength > 0 ? maxlength : undefined"
            :style="{ width: parsedWidth }"
        />
        <span ref="span" :style="{ minWidth: parsedWidth }">
            {{ model || placeholder }}
        </span>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, computed, onMounted } from 'vue'

    export default defineComponent({
        name: 'KInputInline',
        props: {
            modelValue: {
                type: [String, Number],
                default: ''
            },
            placeholder: {
                type: String,
                default: 'Escribe algo'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            maxlength: {
                type: Number,
                default: 0
            },
            width: {
                type: Number,
                default: 40
            },
            fluid: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'md',
                options: ['xs', 'sm', 'md', 'lg'],
                validator: (value: string) =>
                    ['xs', 'sm', 'md', 'lg'].includes(value)
            }
        },
        emits: ['update:modelValue', 'input'],
        setup(props, ctx) {
            const editMode = ref(true)

            const input = ref()
            const span = ref()

            const model = computed({
                get() {
                    return props.modelValue.toString()
                },
                set(value) {
                    ctx.emit('update:modelValue', value)
                }
            })

            const classes = computed(() => {
                const classes: string[] = []

                if (props.size === 'xs') classes.push('k-input-inline--xs')
                if (props.size === 'sm') classes.push('k-input-inline--sm')
                if (props.size === 'md') classes.push('k-input-inline--md')
                if (props.size === 'lg') classes.push('k-input-inline--lg')

                return classes
            })

            const parsedWidth = computed(() => {
                if (props.fluid) return '100%'
                return `${props.width}px`
            })

            const syncWidth = () => {
                if (input.value && span.value) {
                    input.value.style.width = span.value.offsetWidth + 'px'
                }
            }

            onMounted(() => {
                if (!props.fluid) {
                    new ResizeObserver(syncWidth).observe(span.value)
                }
            })

            return {
                editMode,
                input,
                span,
                model,
                classes,
                parsedWidth
            }
        }
    })
</script>

<style lang="scss" scoped>
    .k-input-inline {
        @apply inline-flex;

        input,
        span {
            @apply p-0 outline-none focus:ring-0 border-0 bg-transparent;

            /* box-sizing: border-box; */
            /* class="p-0 outline-none focus:ring-0 border-0 bg-transparent" */
        }

        input:focus {
            @apply text-primary;
        }

        span {
            @apply absolute inline-block;

            left: -9999px;
        }

        &.k-input-inline--xs {
            input,
            span {
                @apply text-xs;
            }
        }

        &.k-input-inline--sm {
            input,
            span {
                @apply text-sm;
            }
        }

        &.k-input-inline--md {
            input,
            span {
                @apply text-base;
            }
        }

        &.k-input-inline--lg {
            input,
            span {
                @apply text-lg;
            }
        }
    }
</style>
