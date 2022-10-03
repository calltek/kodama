<template>
    <router-view />
</template>

<script lang="ts">
    import { defineComponent, nextTick, onMounted } from 'vue'
    import { keenthemes } from '../plugins'
    import { useConfig } from '../store'
    import { logo, fontAwesomeKit } from '../helpers/config'

    export default defineComponent({
        name: 'KodamaUI',
        setup() {
            const config = useConfig()

            const replaceFavicon = () => {
                var link: any = document.querySelector('link[rel~="icon"]')
                if (!link) {
                    link = document.createElement('link')
                    link.rel = 'icon'
                    document.getElementsByTagName('head')[0].appendChild(link)
                }
                link.href = logo.value.favicon
            }

            const addFontAwesomeKit = () => {
                const kit = fontAwesomeKit

                if (kit) {
                    const script = document.createElement('script')
                    script.src = kit.value
                    script.crossOrigin = 'anonymous'

                    document.body.appendChild(script)
                }
            }

            onMounted(() => {
                config.init()

                replaceFavicon()
                addFontAwesomeKit()

                nextTick(() => {
                    keenthemes.initializeComponents()
                })
            })
        }
    })
</script>

<style lang="scss">
    // @import '~/bootstrap-icons/font/bootstrap-icons.css';
    @import 'apexcharts/dist/apexcharts.css';
    // @import '~/quill/dist/quill.snow.css';
    @import 'animate.css';
    @import 'sweetalert2/dist/sweetalert2.css';
    @import 'nouislider/dist/nouislider.css';

    // @import '~/line-awesome/dist/line-awesome/css/line-awesome.css';
    // @import '~/dropzone/dist/dropzone.css';
    // @import '@vueform/multiselect/themes/default.css';

    // Main demo style scss
    @import '../assets/sass/plugins';
    @import '../assets/sass/style';

    // Dark mode demo style scss
    //@import "assets/sass/plugins.dark";
    //@import "assets/sass/style.dark";
</style>
