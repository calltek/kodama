<template>
    <!--begin::User-->
    <div
        class="aside-user flex align-items-sm-center justify-content-center py-5"
    >
        <!--begin::Symbol-->
        <div class="symbol symbol-50px">
            <k-avatar :name="fullname" :size="50" />
        </div>
        <!--end::Symbol-->

        <!--begin::Wrapper-->
        <div class="aside-user-info flex-row-fluid flex-wrap ms-5">
            <!--begin::Section-->
            <div class="flex">
                <!--begin::Info-->
                <div class="flex-grow-1 me-2 py-1">
                    <a class="text-white text-hover-primary fs-6 fw-bold">
                        {{ firstname }}
                    </a>
                    <span class="text-gray-600 fw-bold d-block fs-8 mb-1">
                        Prestashop
                    </span>

                    <div class="flex align-items-center text-success fs-9">
                        <span class="bullet bullet-dot bg-success me-1"></span
                        >online
                    </div>
                </div>
                <!--end::Info-->

                <!--begin::User menu-->
                <div class="me-n2 flex flex-column justify-content-between">
                    <a
                        href="#"
                        class="btn btn-icon btn-sm btn-active-color-primary mt-n2"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-start"
                        data-kt-menu-overflow="true"
                    >
                        <span class="svg-icon svg-icon-muted svg-icon-3">
                            <i class="fad fa-cog"></i>
                        </span>
                    </a>

                    <UserMenu />

                    <k-updater />
                </div>
                <!--end::User menu-->
            </div>
            <!--end::Section-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::User-->

    <!--begin::Aside search-->
    <div v-if="searchEnabled" class="aside-search py-5">
        <global-search />
    </div>
    <!--end::Aside search-->
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'

    import UserMenu from './user-menu.vue'
    import GlobalSearch from './global-search/global-search.vue'

    import { searchEnabled } from '../../../../helpers/config'
    import KUpdater from './updater.vue'
    import { useAuth } from '../../../../store'

    export default defineComponent({
        name: 'KdAsideToolbar',
        components: {
            UserMenu,
            GlobalSearch,
            KUpdater
        },
        setup() {
            const auth = useAuth()

            const firstname = computed(() => {
                return auth.firstname
            })

            const fullname = computed(() => {
                return auth.name
            })

            return { firstname, fullname, searchEnabled }
        }
    })
</script>
