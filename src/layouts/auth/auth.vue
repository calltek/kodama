<template>
    <div
        class="d-flex flex-column flex-column-fluid position-relative overflow-hidden position-x-center"
        :style="bgStyle"
    >
        <div
            class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20"
        >
            <k-logo side :height="80" class="mb-12" />
            <router-view></router-view>
        </div>

        <div class="d-flex flex-center flex-column-auto p-10">
            <k-public-footer></k-public-footer>
        </div>

        <k-bubbles :bottom="-200" :right="-200" :width="750" :rotate="45" />
        <k-bubbles :top="-200" :left="-200" :width="750" :rotate="45" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, onUnmounted, computed } from 'vue'
    import { useBody } from '../../store'
    import KPublicFooter from './footer.vue'
    import { authBackground } from '../../helpers/config'

    export default defineComponent({
        name: 'AuthPageLayout',
        components: { KPublicFooter },
        setup() {
            const body = useBody()

            const bgStyle = computed(() => {
                if (authBackground) {
                    return {
                        'background-image': `url(${authBackground})`
                    }
                }

                return {}
            })

            onMounted(() => {
                body.addClass('bg-body')
            })

            onUnmounted(() => {
                body.removeClass('bg-body')
            })

            return { bgStyle }
        }
    })
</script>
