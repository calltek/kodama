<template>
    <!--begin::Footer-->
    <div id="kt_footer" class="footer py-4 flex flex-lg-column">
        <!--begin::Container-->
        <div
            class="flex flex-column flex-md-row align-items-center justify-content-between"
            :class="{
                'container-fluid': footerWidthFluid,
                'container-xxl': !footerWidthFluid
            }"
        >
            <!--begin::Copyright-->
            <div class="text-dark order-2 order-md-1">
                <span class="text-muted fw-bold me-1">&copy; 2022 - </span>
                <a
                    :href="copyright.link"
                    target="_blank"
                    class="text-muted text-uppercase text-hover-primary"
                >
                    <b>{{ copyright.text }}</b>
                </a>
            </div>
            <!--end::Copyright-->

            <!--begin::Menu-->
            <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                <li class="menu-item">
                    <a
                        id="kd_help_toggle"
                        href="#"
                        target="_blank"
                        class="menu-link px-2"
                    >
                        <i class="far fa-life-ring me-1" /> Ayuda y Soporte
                    </a>
                </li>

                <li class="menu-item">
                    <span class="menu-link px-2 cursor-default opacity-50"
                        >|</span
                    >
                </li>

                <li class="menu-item">
                    <a
                        href="https://calltek.es/blog"
                        target="_blank"
                        class="menu-link px-2"
                    >
                        <i class="far fa-blog me-1" /> Noticias
                    </a>
                </li>

                <template v-if="changelogEnabled">
                    <li class="menu-item">
                        <span class="menu-link px-2 cursor-default opacity-50"
                            >|</span
                        >
                    </li>

                    <li class="menu-item">
                        <router-link
                            :to="{ name: 'changelog' }"
                            class="menu-link px-2"
                        >
                            <i class="far fa-cat-space me-1" /> Registro de
                            cambios
                        </router-link>
                    </li>
                </template>
            </ul>
            <!--end::Menu-->
        </div>
        <!--end::Container-->
    </div>
    <!--end::Footer-->
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import {
        changelogEnabled,
        copyright,
        footerWidthFluid
    } from '../../../helpers/config'

    export default defineComponent({
        name: 'KTFooter',
        setup() {
            return {
                footerWidthFluid,
                changelogEnabled,
                copyright
            }
        }
    })
</script>
