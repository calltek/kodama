<template>
    <div
        class="flex flex-column flex-column-fluid position-relative overflow-hidden"
    >
        <div
            class="flex flex-column flex-column-fluid justify-content-center text-center p-10 py-lg-15"
        >
            <router-link :to="{ name: homepage }" class="mb-10 pt-lg-10">
                <k-logo side :height="50" class="mb-5"></k-logo>
            </router-link>

            <img :src="img404" alt="" class="mw-100 mb-10 h-lg-450px" />

            <div class="pt-lg-10 mb-10">
                <h1 class="fw-bolder fs-3x text-gray-800 mb-4 text-uppercase">
                    Página no encontrada
                </h1>

                <div class="fw-bold fs-3 text-muted mb-15">
                    La página a la que intentas acceder no existe!<br />
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

        <div class="flex flex-center flex-column-auto p-10">
            <k-public-footer />
        </div>

        <k-bubbles :bottom="-200" :right="-200" :width="750" :rotate="45" />
        <k-bubbles :top="-200" :left="-200" :width="750" :rotate="45" />
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent } from 'vue'
    import { homepage } from '../../helpers/config'
    import { randomNumber } from '../../helpers/utils'
    import KPublicFooter from '../../layouts/auth/footer.vue'

    export default defineComponent({
        name: 'Error404',
        components: { KPublicFooter },
        setup() {
            const img404 = computed(() => {
                const random = randomNumber(1, 10)
                return `https://kodamaui.s3.eu-west-1.amazonaws.com/errors/404/404-${random}.svg`
            })

            return {
                img404,
                homepage
            }
        }
    })
</script>

<style lang="scss" module></style>
