<template>
    <div
        class="d-flex flex-column flex-column-fluid position-relative overflow-hidden"
    >
        <div
            class="d-flex flex-column flex-column-fluid justify-content-center text-center p-10 py-lg-15"
        >
            <router-link :to="{ name: homepage }" class="mb-10 pt-lg-10">
                <k-logo side :height="50" class="mb-5"></k-logo>
            </router-link>

            <img :src="img403" alt="" class="mw-100 mb-10 h-lg-450px" />

            <div class="pt-lg-10 mb-10">
                <h1 class="fw-bolder fs-3x text-gray-800 mb-4 text-uppercase">
                    Acceso denegado
                </h1>

                <div class="fw-bold fs-3 text-muted mb-15">
                    No tienes acceso a este recurso<br />
                    La única opción es volver a casa
                </div>

                <div class="text-center">
                    <router-link
                        :to="{ name: homepage }"
                        class="btn btn-primary btn-lg"
                    >
                        <i class="fad fa-home me-2" /> Inicio
                    </router-link>
                </div>
            </div>
        </div>

        <div class="d-flex flex-center flex-column-auto p-10">
            <k-public-footer />
        </div>

        <k-bubbles :bottom="-200" :right="-200" :width="750" :rotate="45" />
        <k-bubbles :top="-200" :left="-200" :width="750" :rotate="45" />
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent } from 'vue'
    import { randomNumber } from '../../helpers/utils'
    import { homepage } from '../../helpers/config'
    import KPublicFooter from '../../layouts/auth/footer.vue'

    export default defineComponent({
        name: 'Error403',
        components: { KPublicFooter },
        setup() {
            const img403 = computed(() => {
                const random = randomNumber(1, 4)
                return `https://kodamaui.s3.eu-west-1.amazonaws.com/errors/403/403-${random}.svg`
            })

            return {
                img403,
                homepage
            }
        }
    })
</script>
