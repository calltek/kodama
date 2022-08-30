<template>
    <span class="badge badge-success">
        <i class="fad me-2" :class="[status ? 'fa-check' : 'fa-times']"></i>
        {{ status ? 'Activo' : 'Inactivo' }}
    </span>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'KTableStatus',
        props: {
            value: {
                type: [String, Boolean, Number],
                default: ''
            }
        },
        setup(props) {
            const status = computed(() => {
                if (typeof props.value === 'string') {
                    return props.value === '0' ? false : true
                } else if (typeof props.value === 'boolean') {
                    return props.value
                } else if (typeof props.value === 'number') {
                    return !!props.value
                } else {
                    return false
                }
            })

            return { props, status }
        }
    })
</script>

<style module lang="scss"></style>
