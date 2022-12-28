<template>
    <span :tooltip="text" :position="position"><slot /></span>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KTooltip',
        props: {
            text: {
                type: String,
                default: 'Tooltip text'
            },
            position: {
                default: 'top',
                type: String
            }
        },
        setup() {
            return {}
        }
    })
</script>

<style lang="scss"></style>
