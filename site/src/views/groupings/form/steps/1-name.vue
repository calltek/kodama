<template>
    <div class="w-xxl-700px mx-auto">
        <div class="pb-10 pb-lg-15 text-center">
            <h2 class="fw-bolder text-dark text-center">Define un nombre</h2>
            <div class="text-gray-400 fw-bold fs-6">
                Da un nombre a tu agrupación para que sea más facil encontrarla.
            </div>
        </div>
        <div class="row">
            <k-input v-model="value" type="text" autofocus size="lg" placeholder="ej: Agrupacion Octubre 2022" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, watch, ref } from 'vue'

    export default defineComponent({
        name: 'Step1Name',
        props: {
            modelValue: {
                type: String,
                default: '',
            },
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const value = ref(props.modelValue)

            watch(
                () => props.modelValue,
                (newVal) => {
                    value.value = newVal
                }
            )

            watch(value, (newVal) => {
                // value.value = newVal
                ctx.emit('update:modelValue', newVal)
            })

            return { value }
        },
    })
</script>

<style scoped></style>
