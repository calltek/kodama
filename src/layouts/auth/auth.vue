<template>
    <div
        class="flex flex-col top-0 overflow-hidden items-center justify-center h-full w-full fixed"
        :style="bgStyle"
    >
        <div class="flex flex-col p-10 pb-lg-20">
            <k-logo side :height="80" class="mb-12" :dark="darkMode" />
            <router-view></router-view>
        </div>

        <div class="flex flex-column p-10">
            <k-public-footer></k-public-footer>
        </div>

        <k-bubbles :bottom="-200" :right="-200" :width="750" :rotate="45" />
        <k-bubbles :top="-200" :left="-200" :width="750" :rotate="45" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import { useConfig } from '../../store'
    import KPublicFooter from './footer.vue'
    import { authBackground } from '../../helpers/config'

    export default defineComponent({
        name: 'AuthPageLayout',
        components: { KPublicFooter },
        setup() {
            const config = useConfig()

            const bgStyle = computed(() => {
                if (authBackground) {
                    return {
                        'background-image': `url(${authBackground})`
                    }
                }

                return {}
            })

            const darkMode = computed(() => {
                return config.get('darkMode')
            })

            return { bgStyle, darkMode }
        }
    })
</script>
