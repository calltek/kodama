<template>
    <div class="d-flex align-items-center fw-bold fs-6">
        <a
            href="https://calltek.es/soporte"
            class="text-muted text-hover-primary px-2"
            target="_blank"
        >
            <i class="fad fa-life-ring me-1" /> Ayuda y soporte
        </a>

        <span class="text-gray-300 px-1">|</span>

        <a
            href="https://calltek.es/blog"
            class="text-muted text-hover-primary px-2"
            target="_blank"
        >
            <i class="fad fa-blog me-1" /> Noticias
        </a>

        <span class="text-gray-300 px-1">|</span>

        <a
            href="mailto:soporte@calltek.es"
            class="text-muted text-hover-primary px-2"
            target="_blank"
        >
            <i class="fad fa-envelope me-1" /> Contacto</a
        >
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

<style scoped></style>
