<template>
    <div class="flex flex-row bg-white dark:bg-gray-800">
        <k-aside />

        <div
            id="k-wrapper"
            class="flex flex-col flex-row-fluid w-full bg-gray-100 dark:bg-gray-900 min-h-screen"
        >
            <k-toolbar />

            <router-view />
        </div>
    </div>

    <k-debug />
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import KAside from './partials/aside/aside.vue'
    import KToolbar from './partials/topbar/topbar.vue'
    import KDebug from './partials/debug.vue'

    export default defineComponent({
        name: 'KMain',
        components: {
            KAside,
            KDebug,
            KToolbar
        },
        setup() {
            return {}
        }
    })
</script>

<style lang="scss"></style>
