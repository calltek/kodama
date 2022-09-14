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
            v-model="value"
            :type="type"
            :name="name ? name : undefined"
            :autofocus="autofocus"
            :disabled="disabled"
            :required="required"
            :placeholder="placeholder ? placeholder : undefined"
            :maxlength="maxlength > 0 ? maxlength : undefined"
            :class="classes"
            @input="$emit('input', $event)"
            @change="$emit('change', $event)"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, ref, watch } from 'vue'

    import props from './k-input.props'
    import { parseInputClass } from './k-input.utils'

    export default defineComponent({
        name: 'KInput',
        autoload: true,
        props: props,
        emits: ['update:modelValue', 'input', 'change'],
        setup(props, ctx) {
            const hasSlot = (name: string) => !!ctx.slots[name]

            const value = ref(props.modelValue)

            const classes = computed(() => parseInputClass(props))

            watch(value, (newVal) => {
                ctx.emit('update:modelValue', newVal)
            })

            return {
                hasSlot,
                classes,

                value
            }
        }
    })
</script>

<style lang="scss"></style>
