<template>
    <div class="flex flex-row bg-white dark:bg-gray-800">
        <k-aside />

        <div
            id="k-wrapper"
            class="flex flex-col flex-row-fluid w-full bg-gray-100 dark:bg-gray-900 h-screen overflow-y-auto overflow-x-hidden"
        >
            <k-topbar />
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import KAside from './partials/aside/aside.vue'
    import KTopbar from './partials/topbar/topbar.vue'

    export default defineComponent({
        name: 'KMain',
        components: {
            KAside,
            KTopbar
        },
        setup() {
            return {}
        }
    })
</script>

<style lang="scss">
    @import '../../assets/style/index.scss';
</style>
