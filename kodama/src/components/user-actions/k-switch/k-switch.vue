<template>
    <div class="form-check form-switch form-check-custom form-check-solid">
        <input
            :id="sid"
            class="form-check-input"
            type="checkbox"
            :checked="modelValue"
            @change="onChange"
        />
        <label v-if="hasSlot('default')" class="form-check-label" :for="sid">
            <slot></slot>
        </label>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from 'vue'
    import tippy from 'tippy.js'
    import { uid } from '../../../helpers/utils'

    export default defineComponent({
        name: 'KSwitch',
        autoload: true,
        props: {
            modelValue: {
                type: Boolean,
                default: false,
                description: 'Valor del switch'
            },
            title: {
                type: String,
                default: '',
                description: 'Tooltip del switch'
            }
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const sid = uid()
            const hasSlot = (name: string) => !!ctx.slots[name]

            const onChange = (val: any) => {
                ctx.emit('update:modelValue', val.target.checked)
            }

            onMounted(() => {
                if (props.title) {
                    tippy('#' + sid, {
                        content: props.title
                    })
                }
            })

            return { sid, hasSlot, onChange }
        }
    })
</script>

<style scoped></style>
