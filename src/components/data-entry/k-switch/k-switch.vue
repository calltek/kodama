<template>
    <div class="flex items-center">
        <label
            class="relative inline-flex items-center select-none"
            :class="{
                'cursor-pointer': !disabled,
                'cursor-not-allowed': disabled
            }"
        >
            <input
                type="checkbox"
                value=""
                class="sr-only peer"
                :checked="model"
                :disabled="disabled"
                @change="onChange"
            />
            <div
                class="bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600"
                :class="classes"
            ></div>
            <span
                v-if="hasSlot('default')"
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
                :class="{ 'opacity-60': disabled }"
            >
                <slot></slot>
            </span>
        </label>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import { colors } from '@/helpers/utils'

    export default defineComponent({
        name: 'KSwitch',
        autoload: true,
        props: {
            modelValue: {
                type: Boolean,
                default: false,
                description: 'Valor del switch'
            },
            checked: {
                type: Boolean,
                default: false,
                description: 'Valor del switch'
            },
            disabled: {
                type: Boolean,
                default: false,
                description: 'Desactiva el switch'
            },
            color: {
                type: String,
                control: { type: 'inline-radio' },
                options: colors,
                validator: (val: string) => colors.includes(val),
                default: 'primary',
                description: 'Color del switch'
            },
            size: {
                type: String,
                control: { type: 'inline-radio' },
                options: ['xs', 'sm', 'md', 'lg', 'xl'],
                validator: (val: string) =>
                    ['xs', 'sm', 'md', 'lg', 'xl'].includes(val),
                default: 'md',
                description: 'Tamaño del switch'
            }
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const hasSlot = (name: string) => !!ctx.slots[name]

            const onChange = (val: any) => {
                ctx.emit('update:modelValue', val.target.checked)
            }

            const model = computed({
                get() {
                    return props.modelValue || props.checked
                },
                set(val) {
                    ctx.emit('update:modelValue', val)
                }
            })

            const classes = computed(() => {
                let classes = ['v-switch']

                if (props.color === 'white' || props.color === 'black') {
                    classes.push(
                        'dark:after:bg-gray-300 dark:peer-checked:bg-white dark:peer-focus:ring-white after:bg-white peer-checked:bg-black peer-focus:ring-black'
                    )
                } else if (props.color === 'gray') {
                    classes.push(
                        'after:bg-white peer-checked:bg-gray-300 peer-focus:ring-gray-300'
                    )
                } else if (props.color === 'primary') {
                    classes.push(
                        'after:bg-white peer-checked:bg-primary peer-focus:ring-primary'
                    )
                } else if (props.color === 'secondary') {
                    classes.push(
                        'after:bg-white peer-checked:bg-secondary peer-focus:ring-secondary'
                    )
                } else if (props.color === 'success') {
                    classes.push(
                        'after:bg-white peer-checked:bg-success peer-focus:ring-success'
                    )
                } else if (props.color === 'warning') {
                    classes.push(
                        'after:bg-white peer-checked:bg-warning peer-focus:ring-warning'
                    )
                } else if (props.color === 'danger') {
                    classes.push(
                        'after:bg-white peer-checked:bg-danger peer-focus:ring-danger'
                    )
                } else if (props.color === 'info') {
                    classes.push(
                        'after:bg-white peer-checked:bg-info peer-focus:ring-info'
                    )
                }

                if (props.size === 'xs') {
                    classes.push(
                        'w-7 h-4 after:h-3 after:w-3 after:top-[4px] after:left-[2px]'
                    )
                } else if (props.size === 'sm') {
                    classes.push(
                        'w-9 h-5 after:h-4 after:w-4 after:top-[2px] after:left-[2px] '
                    )
                } else if (props.size === 'md') {
                    classes.push(
                        'w-11 h-6 after:h-5 after:w-5 after:top-[2px] after:left-[2px]'
                    )
                } else if (props.size === 'lg') {
                    classes.push(
                        'w-14 h-7 after:h-6 after:w-6 after:top-[2px] after:left-[5px]'
                    )
                } else if (props.size === 'xl') {
                    classes.push(
                        'w-16 h-8 after:h-7 after:w-7 after:top-0.5 after:left-[5px] '
                    )
                }

                return classes
            })

            return { hasSlot, onChange, classes, model }
        }
    })
</script>

<style scoped></style>
