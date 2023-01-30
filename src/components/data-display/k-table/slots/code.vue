<template>
    <k-badge>
        <k-icon icon="qrcode" class="mr-2" />
        {{ value }}
    </k-badge>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import KBadge from '../../k-badge/k-badge.vue'

    export default defineComponent({
        name: 'KTableCode',
        components: {
            KBadge
        },
        props: {
            value: {
                type: [String, Number],
                default: ''
            }
        },
        setup() {
            return {}
        }
    })
</script>

<style scoped></style>
