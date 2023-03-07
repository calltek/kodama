<template>
    <div
        class="k-public-footer flex items-center text-sm dark:text-gray-200 font-semibold gap-6"
    >
        <a href="https://calltek.es/soporte" target="_blank">
            <k-icon icon="life-ring" class="mr-1" /> Soporte
        </a>

        <a href="https://calltek.es/blog" target="_blank">
            <k-icon icon="blog" class="mr-1" /> Noticias
        </a>

        <a href="mailto:soporte@calltek.es" target="_blank">
            <k-icon icon="envelope" class="mr-1" /> Contacto
        </a>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KPublicFooter',
        setup() {
            return {}
        }
    })
</script>

<style lang="scss" scoped>
    .k-public-footer {
        a {
            text-align: center;
        }
    }
</style>
