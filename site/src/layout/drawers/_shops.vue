<template>
    <div
        id="k_shops"
        class="bg-body"
        data-kt-drawer="true"
        data-kt-drawer-name="shops"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'350px', 'md': '525px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle=".k_shop_toggle"
        data-kt-drawer-close="#kd_shop_close"
    >
        <div class="card shadow-none rounded-0 w-100">
            <!-- <loading
                :active="loading"
                :can-cancel="false"
                :is-full-page="false"
                loader="bars"
                :color="primaryColor"
                :z-index="99"
            /> -->

            <div id="kt_shop_header" class="card-header px-3">
                <h5 class="card-title fw-bold text-gray-600 d-flex flex-column">
                    <k-count :value="shops.length" circle class="pe-4" color="dark">
                        <div>🏡 Tiendas</div>
                    </k-count>
                    <small>
                        Seleccionadas:
                        <span class="text-danger">
                            {{ selectedShops.length }}
                        </span>
                    </small>
                </h5>

                <div class="card-toolbar">
                    <k-button
                        icon="rotate"
                        light
                        :loading="loading"
                        color="primary"
                        class="me-2"
                        title="Refrescar"
                        size="sm"
                        @click="fetch()"
                    />

                    <k-button id="kd_shop_close" light color="dark" icon="times" title="Cerrar" size="sm" />
                </div>
            </div>

            <div id="kt_shop_body" class="card-body px-3 pt-5 pb-0">
                <div
                    id="kt_shop_scroll"
                    class="hover-scroll-overlay-y d-flex flex-column"
                    data-kt-scroll="true"
                    data-kt-scroll-height="auto"
                    data-kt-scroll-wrappers="#kt_shop_body"
                    data-kt-scroll-dependencies="#kt_shop_header"
                    data-kt-scroll-offset="0px"
                >
                    <k-input v-model="search" type="text" placeholder="Buscar empresa" class="mb-4" />

                    <div
                        v-for="(shop, index) in shops"
                        :key="index"
                        class="d-flex align-items-center rounded py-2 px-3 mb-4 cursor-pointer"
                        :class="isSelected[shop.id] ? 'bg-primary text-white' : 'bg-light-dark text-gray-800'"
                        @click="selectShops([shop], false)"
                    >
                        <i class="fad fa-shop me-2" />

                        <div class="flex-grow-1 me-2">
                            <span class="fw-bolder fs-6 text-uppercase">
                                {{ shop.name }}
                            </span>
                        </div>

                        <span class="fw-bolder py-1">
                            <k-icon v-if="isSelected[shop.id]" icon="toggle-on" :size="5" color="dark" />
                            <k-icon v-else icon="toggle-off" :size="5" />
                        </span>
                    </div>
                </div>
            </div>

            <div class="card-footer p-3" :class="$style.footer">
                <k-daterange v-model="date" size="sm" block />

                <div class="d-flex mt-2">
                    <div class="d-flex flex-grow-1">
                        <k-button
                            size="md"
                            block
                            class="me-1"
                            color="secondary"
                            @click="selectShops(promotedShops, true)"
                        >
                            En promocion
                            <k-count :value="promotedShops.length" circle class="ms-1" size="sm" color="white" />
                        </k-button>

                        <k-button
                            size="md"
                            block
                            class="ms-1"
                            color="secondary"
                            @click="selectShops(unPromotedShops, true)"
                        >
                            Fuera de promocion
                            <k-count :value="unPromotedShops.length" circle class="ms-1" size="sm" color="white" />
                        </k-button>
                    </div>

                    <k-button
                        size="md"
                        class="ms-2"
                        title="Seleccionar todas"
                        icon="check-do+uble"
                        color="dark"
                        @click="selectShops(shops, true)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, computed } from 'vue'
    import { Shop } from '../../types/Shop'
    import { useConfig } from '@kodama/ui'
    import { useShop } from '../../store'

    // import tinykeys from 'tinykeys'
    // import { DrawerComponent } from '../assets/ts/components/_DrawerComponent'

    export default defineComponent({
        name: 'ShopDrawer',
        setup() {
            const shop = useShop()
            const loading = ref(false)
            const search = ref('')
            const date = ref([new Date(), new Date()])
            const config = useConfig()

            // Shops
            const shops = computed(() => {
                return shop.all.filter((s) => {
                    return s.name.toLowerCase().includes(search.value.toLowerCase())
                })
            })

            // Retrieve all shops
            const fetch = () => {
                loading.value = true

                shop.fetch()
                    .then((data) => {
                        shop.set(data)
                    })
                    .finally(() => {
                        loading.value = false
                    })
            }

            const primaryColor = computed(() => {
                return config.get('primaryColor')
            })

            // Set selected shops
            const selectShops = (shops: Shop[], reset = false) => {
                shop.select(shops, reset)
            }

            // Retrieve list of shops selected
            const selectedShops = computed(() => {
                return shop.selected
            })

            // List of shops in promotion
            const promotedShops = computed(() => {
                const from = new Date(date.value[0])
                const to = new Date(date.value[1])
                return shop.withPromotion(true, from, to)
            })

            // List of shops not in promotion
            const unPromotedShops = computed(() => {
                const from = new Date(date.value[0])
                const to = new Date(date.value[1])
                return shop.withPromotion(false, from, to)
            })

            // Check if shops is selected
            // const isSelected = (id: number) => {
            //     return shop.isSelected(id)
            // }

            const isSelected = computed(() => {
                const selected: any = {}

                shop.all.forEach((s) => {
                    selected[s.id] = shop.isSelected(s.id)
                })

                return selected

                // return shop.all.map((s) => {
                //     return shop.isSelected(s.id)
                // })
            })

            // tinykeys(window, {
            //     'Control+S': (evt) => {
            //         const drawer = DrawerComponent.getInstance('k_shops')
            //         if (drawer) {
            //             drawer.toggle()

            //             setTimeout(() => {
            //                 document
            //                     .getElementById('topbar-search-input')
            //                     ?.focus()
            //             }, 300)
            //         }

            //         evt.preventDefault()
            //     }
            // })

            // tinykeys(window, {
            //     Escape: (evt) => {
            //         const drawer = DrawerComponent.getInstance('k_shops')
            //         if (drawer) drawer.hide()

            //         evt.preventDefault()
            //     }
            // })

            if (shops.value.length <= 0) {
                fetch()
            }

            return {
                search,
                loading,
                date,
                shops,
                fetch,
                selectShops,
                selectedShops,
                promotedShops,
                unPromotedShops,
                isSelected,
                primaryColor,
            }
        },
    })
</script>

<style module lang="scss">
    .content {
        padding-bottom: 140px;
    }

    .footer {
        position: sticky;
        bottom: 0;
        width: 100%;
        background: white !important;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        box-shadow: 0px 0px 11px 8px #181c3233;
        padding-bottom: 10px;
    }
</style>
