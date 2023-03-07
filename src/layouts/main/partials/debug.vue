<template>
    <div v-if="debug" :class="$style.debug">
        <div class="block sm:hidden">XS</div>

        <div class="hidden sm:block md:hidden">SM</div>

        <div class="hidden md:block lg:hidden">MD</div>

        <div class="hidden lg:block xl:hidden">LG</div>

        <div class="hidden xl:block">XL</div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent } from 'vue'
    import { useConfig } from '@/store'

    export default defineComponent({
        name: 'KDebug',
        setup() {
            const config = useConfig()
            const debug = computed(() => config.get('debug'))

            return { debug }
        }
    })
</script>

<style module lang="scss">
    .debug {
        position: fixed;
        top: 20px;
        left: 50%;
        width: 100px;
        margin-left: -50px;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        font-size: 20px;
        color: white;
        border-radius: 10px;
    }
</style>
