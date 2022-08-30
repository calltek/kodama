<template>
    <template v-if="isValid">
        <slot v-bind="{ shops: selectedShops }"></slot>
    </template>
    <div v-else :class="$style.empty">
        <template v-if="selectedShops.length === 0">
            <img src="/illustrations/choice-bro.svg" class="mw-100 mb-10 h-lg-450px" style="fill: red" />

            <div class="mb-10 text-center">
                <h1 class="fw-bolder text-dark text-uppercase">No hay tiendas seleccionadas</h1>
                <h5 class="text-muted fw-bold">Selecciona una tienda para poder empezar</h5>
            </div>

            <k-button class="k_shop_toggle" color="success" icon="arrow-pointer"> Selecccionar tiendas </k-button>
        </template>
        <template v-else>
            <img src="/illustrations/choice-bro2.svg" class="mw-100 mb-10 h-lg-450px" style="fill: red" />

            <div class="mb-10 text-center">
                <h1 class="fw-bolder text-dark text-uppercase">Demasiadas tiendas seleccionadas</h1>
                <h5 class="text-muted fw-bold">Selecciona una única tienda para mostrar resultados</h5>
            </div>

            <k-button class="k_shop_toggle" color="success" icon="arrow-pointer"> Selecccionar tiendas </k-button>
        </template>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import { useShop } from '../../store'

    export default defineComponent({
        name: 'RequireShop',
        autoload: true,
        props: {
            onlyOne: {
                type: Boolean,
                default: false,
            },
        },
        setup(props) {
            const shop = useShop()

            const selectedShops = computed(() => {
                return shop.selected
            })

            const isValid = computed(() => {
                if (props.onlyOne) {
                    return selectedShops.value.length === 1
                } else {
                    return selectedShops.value.length > 0
                }
            })

            return { selectedShops, isValid }
        },
    })
</script>

<style module lang="scss">
    .empty {
        display: flex;
        flex-grow: 1;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>
