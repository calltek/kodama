<template>
    <a
        class="btn w-100 btn-custom k_shop_toggle text-uppercase"
        :title="onlyOne ? selected[0].name : ''"
        :class="$style.button"
        :style="style"
    >
        {{ onlyOne ? selected[0].name : 'Tiendas activas' }}

        <span
            v-if="!onlyOne"
            class="badge badge-pill ms-2"
            :class="[selected.length > 0 ? 'badge-success' : 'badge-light']"
        >
            {{ selected.length }}
        </span>
    </a>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import { useShop } from '../../store'
    export default defineComponent({
        name: 'KSidebarFooter',
        setup() {
            const shop = useShop()

            const selected = computed(() => {
                return shop.selected
            })

            const onlyOne = computed(() => {
                return selected.value.length === 1
            })

            const style = computed(() => {
                if (onlyOne.value) {
                    return {
                        'background-color': selected.value[0].style.bg_color,
                        'color': selected.value[0].style.text_color
                    }
                }

                return {}
            })

            return { selected, onlyOne, style }
        }
    })
</script>

<style lang="scss" module>
    .button {
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        .badge {
            position: absolute;
            top: -10px;
            right: -10px;
        }
    }
</style>
