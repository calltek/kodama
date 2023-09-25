<template>
    <div
        class="flex flex-col flex-1 flex-shrink-0 basis-auto position-relative overflow-hidden"
    >
        <div
            class="flex flex-col flex-1 flex-shrink-0 basis-auto justify-center items-center p-10 lg:py-14"
        >
            <router-link :to="homepage" class="mb-10 pt-lg-10">
                <k-logo side :height="50" class="mb-5"></k-logo>
            </router-link>

            <img
                src="https://drive.google.com/uc?id=10607xNK0Y5BB6xhMa1kCbR18qBo_BpS2"
                alt=""
                class="mb-10 h-lg-450px max-w-full lg:max-h-96"
            />

            <div class="pt-lg-10 mb-10">
                <k-title :size="1" bolder class="mb-4" center>
                    Error interno
                </k-title>

                <k-title :size="4" center class="max-w-lg mb-16 mx-auto">
                    Algo no funcionó como debería!. Inténtalo más tarde.
                </k-title>

                <div class="text-center">
                    <router-link :to="homepage" class="btn btn-primary btn-lg">
                        <k-button icon="home">Inicio</k-button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="flex justify-center p-10">
            <k-public-footer />
        </div>

        <k-bubbles
            :bottom="-200"
            :right="-200"
            :width="750"
            :rotate="45"
            :color="bubbleColor"
        />
        <k-bubbles
            :top="-200"
            :left="-200"
            :width="750"
            :rotate="45"
            :color="bubbleColor"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { homepage, bubbleColor } from '@/helpers/config'
    import KPublicFooter from '@/layouts/auth/footer.vue'

    export default defineComponent({
        name: 'Error500',
        components: { KPublicFooter },
        setup() {
            return {
                homepage,
                bubbleColor
            }
        }
    })
</script>
