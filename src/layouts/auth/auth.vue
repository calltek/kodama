<template>
    <div
        class="flex flex-col items-center justify-between sm:justify-center h-screen w-full overflow-y-auto"
        :style="bgStyle"
    >
        <div class="px-5 py-8 sm:p-10 sm:mb-12">
            <k-logo side :height="80" :dark="darkMode" />
        </div>

        <div class="flex flex-col p-3 sm:p-10">
            <router-view></router-view>
        </div>

        <div class="flex flex-col p-10 sm:mt-10">
            <k-public-footer></k-public-footer>
        </div>

        <k-bubbles
            :bottom="-200"
            :right="-200"
            :width="750"
            :rotate="45"
            :color="bubbleColor"
            class="hidden sm:block"
        />
        <k-bubbles
            :top="-200"
            :left="-200"
            :width="750"
            :rotate="45"
            :color="bubbleColor"
            class="hidden sm:block"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import KPublicFooter from './footer.vue'
    import { authBackground } from '@/helpers/config'
    import { bubbleColor, darkMode } from '@/helpers/config'

    export default defineComponent({
        name: 'AuthPageLayout',
        components: { KPublicFooter },
        setup() {
            const bgStyle = computed(() => {
                if (authBackground) {
                    return {
                        'background-image': `url(${authBackground})`
                    }
                }

                return {}
            })

            return { bgStyle, darkMode, bubbleColor }
        }
    })
</script>
