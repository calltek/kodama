<template>
    <tippy>
        <template #default><i class="fad fa-seal-question" /></template>
        <template #content>{{ text }}</template>
    </tippy>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KHelp',
        autoload: true,
        setup(_props, ctx) {
            let text = ''
            if (ctx.slots.default) {
                text = ctx.slots.default()[0].children?.toString() || ''
            }

            return { text }
        }
    })
</script>

<style scoped></style>
