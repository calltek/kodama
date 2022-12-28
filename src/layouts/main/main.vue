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
    import { defineComponent } from 'vue'

    import KdAside from './partials/aside/aside.vue'

    import KTScrollTop from './partials/scroll-top.vue'

    import KTLoader from './partials/loader.vue'
    import KDebug from './partials/debug.vue'

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
            return {
                loaderEnabled,
                contentWidthFluid,
                asideEnabled,
                logo
            }
        }
    })
</script>
