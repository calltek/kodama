<template>
    <div
        id="kt_aside"
        class="aside"
        data-kt-drawer="true"
        data-kt-drawer-name="aside"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'200px', '300px': '250px'}"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_aside_mobile_toggle"
    >
        <!--begin::Aside Toolbarl-->
        <div id="kt_aside_toolbar" class="aside-toolbar flex-column-auto">
            <kd-aside-toolbar />
        </div>
        <!--end::Aside Toolbarl-->

        <!--begin::Aside menu-->
        <div class="aside-menu flex-column-fluid">
            <kd-menu />
        </div>
        <!--end::Aside menu-->

        <div id="kt_aside_footer" class="aside-footer flex-column-auto py-5">
            <k-sidebar-footer />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    // import { useI18n } from 'vue-i18n'
    import KdMenu from './menu.vue'
    import KdAsideToolbar from './toolbar.vue'

    export default defineComponent({
        name: 'Aside',
        components: {
            KdMenu,
            KdAsideToolbar
        },
        setup() {
            // const { t } = useI18n()

            return {
                // t
            }
        }
    })
</script>
