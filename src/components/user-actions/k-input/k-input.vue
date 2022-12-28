<template>
    <div>
        <label
            v-if="label"
            :for="id"
            class="form-label"
            :class="{ required: required }"
            >{{ label }}</label
        >

        <input
            :id="id"
            :value="modelValue"
            :type="type"
            :name="name ? name : undefined"
            :autofocus="autofocus"
            :disabled="disabled"
            :required="required"
            :placeholder="placeholder ? placeholder : undefined"
            :maxlength="max && type !== 'number' ? max : undefined"
            :max="max !== undefined && type === 'number' ? max : undefined"
            :min="min !== undefined && type === 'number' ? min : undefined"
            :class="classes"
            @input="updateInput"
            @change="$emit('change', $event)"
            :style="styles"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'

    import props from './k-input.props'
    import { parseInputClass, parseInputStyle } from './k-input.utils'

    export default defineComponent({
        name: 'KInput',
        autoload: true,
        props: props,
        emits: ['update:modelValue', 'input', 'change'],
        setup(props, ctx) {
            const hasSlot = (name: string) => !!ctx.slots[name]

            const value = computed(() => props.modelValue)
            const classes = computed(() => parseInputClass(props))
            const styles = computed(() => parseInputStyle(props))

            // watch(value, (newVal) => {
            //     ctx.emit('update:modelValue', newVal)
            // })

            const updateInput = (event: any) => {
                ctx.emit('update:modelValue', event.target.value)
                ctx.emit('input', event.target.value)
            }

            return {
                hasSlot,
                classes,
                styles,
                value,
                updateInput
            }
        }
    })
</script>

<style lang="scss" scoped>
    .kinput {
        min-width: 100px;
    }
</style>
