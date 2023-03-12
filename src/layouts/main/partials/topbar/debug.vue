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
        @apply flex items-center justify-center border border-white text-white uppercase font-bold font-title rounded-md p-2;
    }
</style>
