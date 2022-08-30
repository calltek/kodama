<template>
    <drawer-help />
    <drawer-shops />

    <div class="engage-toolbar d-flex position-fixed px-5 fw-bolder zindex-2 top-50 end-0 transform-90 mt-20 gap-2">
        <button
            id="kd_help_toggle"
            class="engage-help-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm px-5 rounded-top-0"
            title="Learn & Get Inspired"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            data-bs-dismiss="click"
            data-bs-trigger="hover"
        >
            Ayuda
        </button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import DrawerHelp from './_help.vue'
    import DrawerShops from './_shops.vue'

    export default defineComponent({
        name: 'KDrawerManager',
        components: {
            DrawerHelp,
            DrawerShops,
        },
        setup() {
            return {}
        },
    })
</script>

<style scoped></style>
