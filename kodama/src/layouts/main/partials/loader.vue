<template>
    <!--begin::Page loader-->
    <template v-if="loaderType === 'spinner-message'">
        <div class="page-loader flex-column">
            <span class="spinner-border text-primary" role="status"></span>
            <span class="text-muted fs-6 fw-bold mt-5">Cargando...</span>
        </div>
    </template>
    <template v-else-if="loaderType === 'spinner-logo'">
        <div class="page-loader flex-column">
            <img alt="Logo" class="max-h-75px" :src="loaderLogo" />

            <div class="d-flex align-items-center mt-5">
                <span class="spinner-border text-primary" role="status"></span>
                <span class="text-muted fs-6 fw-bold ms-5">Cargando...</span>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="page-loader">
            <span class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Cargando...</span>
            </span>
        </div>
    </template>
    <!--end::Page Loader-->
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { loaderType, loaderLogo } from '../../../helpers/config'

    export default defineComponent({
        name: 'LayoutLoader',
        setup() {
            return {
                loaderType,
                loaderLogo
            }
        }
    })
</script>
