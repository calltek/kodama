<template>
    <div v-if="debug" :class="$style.debug">
        <div class="d-block d-sm-none">XS</div>

        <div class="d-none d-sm-block d-md-none">SM</div>

        <div class="d-none d-md-block d-lg-none">MD</div>

        <div class="d-none d-lg-block d-xl-none">LG</div>

        <div class="d-none d-xl-block d-xxl-none">XL</div>

        <div class="d-none d-xxl-block">XXL</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { debug } from '../../../helpers/config'

    export default defineComponent({
        name: 'KDebug',
        setup() {
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
