<template>
    <KTLoader v-if="loaderEnabled" />

    <div class="page d-flex flex-row flex-column-fluid">
        <kd-aside
            v-if="asideEnabled"
            :light-logo="logo.light"
            :dark-logo="logo.dark"
        />

        <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
            <router-view />
        </div>
    </div>

    <KTScrollTop />

    <k-drawer-manager />
    <k-debug />
</template>

<script lang="ts">
    import { defineComponent, onMounted, watch, nextTick } from 'vue'
    import { useRoute } from 'vue-router'
    import KdAside from './partials/aside/aside.vue'

    import KTScrollTop from './partials/scroll-top.vue'

    import KTLoader from './partials/loader.vue'
    import KDebug from './partials/debug.vue'

    import { MenuComponent } from '../../assets/ts/components'
    import { keenthemes, layout } from '../../plugins'
    import { useBody } from '../../store'

    import { removeModalBackdrop } from '../../helpers/dom'
    import {
        loaderEnabled,
        contentWidthFluid,
        asideEnabled,
        logo
    } from '../../helpers/config'

    export default defineComponent({
        name: 'MasterLayout',
        components: {
            KdAside,
            KTScrollTop,
            KTLoader,
            KDebug
        },
        setup() {
            const body = useBody()
            const route = useRoute()

            // show page loading
            body.addClass('page-loading')

            // initialize html element classes
            layout.init()

            onMounted(() => {
                nextTick(() => {
                    keenthemes.reinitializeComponents()
                })

                // Simulate the delay page loading
                setTimeout(() => {
                    // Remove page loader after some time
                    body.removeClass('page-loading')
                }, 500)
            })

            watch(
                () => route.path,
                () => {
                    MenuComponent.hideDropdowns(undefined)

                    nextTick(() => {
                        keenthemes.reinitializeComponents()
                    })
                    removeModalBackdrop()
                }
            )

            return {
                loaderEnabled,
                contentWidthFluid,
                asideEnabled,
                logo
            }
        }
    })
</script>
