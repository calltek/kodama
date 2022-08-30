<template>
    <div class="w-xxl-700px mx-auto">
        <div class="pb-10 pb-lg-15 text-center">
            <k-title :size="2" color="dark">
                <k-icon icon="calendar" class="me-2" /> Especifica el rango de fechas
            </k-title>

            <div class="text-gray-400 fw-bold fs-6">
                Se recogerán todos los productos necesarios para producción en esas fechas.
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <k-daterange v-model="value" size="lg" class="w-100" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, watch, ref } from 'vue'

    export default defineComponent({
        name: 'Step2Dates',
        props: {
            modelValue: {
                type: Array,
                default: () => [new Date(), new Date()],
            },
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const value = ref(props.modelValue)

            watch(props.modelValue, (newVal) => {
                value.value = newVal
            })

            watch(value, (newVal) => {
                ctx.emit('update:modelValue', newVal)
            })

            return { value }
        },
    })
</script>

<style scoped></style>
