<template>
    <div class="flex items-center">
        <input
            :id="inputId"
            type="radio"
            :value="value"
            :name="name"
            class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            :class="classes"
            :checked="model === value"
            @change="change"
        />
        <label
            v-if="label || hasSlot('default')"
            :for="inputId"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
        >
            <template v-if="hasSlot('default')">
                <slot></slot>
            </template>
            <template v-else>
                {{ label }}
            </template>
        </label>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent } from 'vue'
    import { uid, colors } from '@/helpers/utils'

    export default defineComponent({
        name: 'KRadio',
        props: {
            modelValue: {
                type: [String, Number, Boolean, Object, Array, Symbol],
                default: false
            },
            name: {
                type: String,
                required: true
            },
            value: {
                type: [String, Number, Boolean, Object, Array, Symbol],
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                control: { type: 'inline-radio' },
                options: colors,
                validator: (val: string) => colors.includes(val),
                default: 'primary',
                description: 'Color del botón'
            }
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const inputId = uid()
            const hasSlot = (name: string) => !!ctx.slots[name]

            const classes = computed(() => {
                let classes = []

                if (props.color === 'white' || props.color === 'black') {
                    classes.push(
                        'text-black focus:ring-black dark:focus:ring-white dark:text-black k-checkbox-inverse'
                    )
                } else if (props.color === 'gray') {
                    classes.push(
                        'text-gray-300 focus:ring-gray-300 dark:focus:ring-gray-300'
                    )
                } else if (props.color === 'primary') {
                    classes.push(
                        'text-primary focus:ring-primary dark:focus:ring-primary'
                    )
                } else if (props.color === 'secondary') {
                    classes.push(
                        'text-secondary focus:ring-secondary dark:focus:ring-secondary'
                    )
                } else if (props.color === 'success') {
                    classes.push(
                        'text-success focus:ring-success dark:focus:ring-success'
                    )
                } else if (props.color === 'warning') {
                    classes.push(
                        'text-warning focus:ring-warning dark:focus:ring-warning'
                    )
                } else if (props.color === 'danger') {
                    classes.push(
                        'text-danger focus:ring-danger dark:focus:ring-danger'
                    )
                } else if (props.color === 'info') {
                    classes.push(
                        'text-info focus:ring-info dark:focus:ring-info'
                    )
                }

                return classes
            })

            const change = (e: any) => {
                model.value = e.target.value
            }

            const model = computed({
                get() {
                    return props.modelValue
                },
                set(value) {
                    ctx.emit('update:modelValue', value)
                }
            })

            return { model, hasSlot, inputId, classes, change }
        }
    })
</script>

<style scoped lang="scss">
    .dark .k-checkbox.k-checkbox-inverse:checked {
        filter: invert(1);
    }
</style>
