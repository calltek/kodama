<template>
    <div class="inline-flex">
        <!-- <k-tooltip v-if="!editMode" placement="top">
            <template v-if="tooltip" #content> ✏️ Editar </template>
            <div :class="textClasses" @click="toggleEdit">
                {{ model || '???' }}
            </div>
        </k-tooltip> -->

        <div class="inline-flex">
            <input
                ref="input"
                v-model="model"
                :placeholder="model"
                type="text"
                class="p-0 outline-none focus:ring-0 border-0 bg-transparent"
                :class="inputClasses"
                :size="model.length - 1"
                @blur="toggleEdit"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, computed } from 'vue'

    export default defineComponent({
        name: 'KInlineEditor',
        props: {
            modelValue: {
                type: [String, Number],
                default: ''
            },
            size: {
                type: String,
                default: 'sm',
                options: ['sm', 'md', 'lg'],
                validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
            },
            tooltip: {
                type: String,
                default: ''
            }
        },
        emits: ['update:modelValue', 'input'],
        setup(props, ctx) {
            const editMode = ref(true)
            const input = ref()

            const model = computed({
                get() {
                    return props.modelValue.toString()
                },
                set(value) {
                    ctx.emit('update:modelValue', value)
                }
            })

            const textClasses = computed(() => {
                const classes = ['inline-flex']

                if (props.size === 'sm') classes.push('text-sm')
                if (props.size === 'md') classes.push('text-base')
                if (props.size === 'lg') classes.push('text-lg')

                return classes
            })

            const inputClasses = computed(() => {
                const classes = []

                if (props.size === 'sm') classes.push('text-sm')
                if (props.size === 'md') classes.push('text-base')
                if (props.size === 'lg') classes.push('text-lg')

                return classes
            })

            const toggleEdit = () => {
                editMode.value = !editMode.value

                setTimeout(() => {
                    if (editMode.value) input.value.focus()
                }, 100)
            }

            return {
                editMode,
                toggleEdit,
                input,
                model,
                inputClasses,
                textClasses
            }
        }
    })
</script>

<style lang="scss"></style>
