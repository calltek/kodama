<template>
    <div class="w-xxl-700px mx-auto">
        <div class="pb-10 pb-lg-15 text-center">
            <k-title :size="2" color="dark"> <k-icon icon="store" class="me-2" /> Tiendas asociadas </k-title>
            <div class="text-gray-400 fw-bold fs-6">
                Escoge las tiendas que quieres tener en cuenta en la agrupación
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <k-button size="lg" color="primary" class="k_shop_toggle mx-auto" light outline>
                    Tiendas seleccionadas: {{ selected.length }}
                </k-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import { useShop } from '../../../../store'

    export default defineComponent({
        name: 'Step3Shops',
        setup() {
            const shop = useShop()

            const selected = computed(() => {
                return shop.selected
            })

            return { selected }
        },
    })
</script>

<style scoped></style>
