<template>
    <!--begin::Menu-->
    <div
        class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-primary fw-bold py-4 fs-6 w-275px"
        data-kt-menu="true"
    >
        <!--begin::Menu item-->
        <div class="menu-item px-3">
            <div
                class="menu-content flex align-items-center px-3 overflow-hidden"
            >
                <k-avatar :name="fullname" :size="50" class="me-5" />

                <div class="flex flex-column text-truncate flex-grow-1">
                    <div
                        class="fw-bolder flex align-items-center text-truncate fs-5"
                    >
                        {{ fullname }}
                        <span
                            class="badge badge-success fw-bolder fs-8 px-2 py-1 ms-2"
                            >PS</span
                        >
                    </div>
                    <a
                        href="#"
                        class="fw-bold text-muted text-hover-primary text-truncate fs-7"
                        >{{ email }}</a
                    >
                </div>
            </div>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu separator-->
        <div class="separator my-2"></div>
        <!--end::Menu separator-->

        <!--begin::Menu item-->
        <div class="menu-item px-5">
            <a class="menu-link px-5 flex align-items-center"> Mi Perfil </a>
        </div>
        <!--end::Menu item-->

        <div class="separator my-2"></div>

        <!--begin::Menu item-->
        <div class="menu-item px-5 my-1">
            <router-link to="/pages/profile/overview" class="menu-link px-5">
                Configuración
            </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-5">
            <a class="menu-link px-5" @click="logout()"> Cerrar sesión </a>
        </div>
        <!--end::Menu item-->
    </div>
    <!--end::Menu-->
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import { useAuth } from '../../../../store'

    export default defineComponent({
        name: 'KtUserMenu',
        setup() {
            const auth = useAuth()

            const logout = () => {
                auth.logout()
            }

            const fullname = computed(() => {
                return auth.name
            })

            const email = computed(() => {
                return auth.email
            })

            return {
                logout,
                fullname,
                email
            }
        }
    })
</script>
