<template>
    <router-view />
</template>

<script lang="ts">
    import { defineComponent, nextTick, onMounted, onBeforeUnmount } from 'vue'
    import { useConfig } from '../store'
    import { logo, fontAwesomeKit } from '../helpers/config'

    export default defineComponent({
        name: 'KodamaUI',
        setup() {
            const config = useConfig()

            onMounted(() => {
                detectViewPort(true)
                window.addEventListener('resize', detectViewPortListener)
            })

            onBeforeUnmount(() => {
                window.removeEventListener('resize', detectViewPortListener)
            })

            const detectViewPortListener = () => {
                detectViewPort(false)
            }

            const setViewPort = (
                isMobileView = false,
                isTabletView = false
            ) => {
                config.set('isMobileView', isMobileView)
                config.set('isTabletView', isTabletView)
            }

            const detectViewPort = (firstLoad = true) => {
                const isMobile = config.get('isMobileView', false)
                const isTablet = config.get('isTabletView', false)

                const width = window.innerWidth
                const state = {
                    next: {
                        mobile: width < 768,
                        tablet: width < 992,
                        desktop: !(width < 768) && !(width < 992)
                    },
                    prev: {
                        mobile: isMobile,
                        tablet: isTablet,
                        desktop: !isMobile && !isTablet
                    }
                }

                // desktop
                if (
                    state.next.desktop &&
                    (state.next.desktop !== state.prev.desktop || firstLoad)
                ) {
                    setViewPort(false, false)
                }
                // tablet & collapse menu
                if (
                    state.next.tablet &&
                    !state.next.mobile &&
                    (state.next.tablet !== state.prev.tablet || firstLoad)
                ) {
                    setViewPort(false, true)
                }
                // mobile
                if (
                    state.next.mobile &&
                    (state.next.mobile !== state.prev.mobile || firstLoad)
                ) {
                    setViewPort(true, false)
                }
            }

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

                // nextTick(() => {
                //     keenthemes.initializeComponents()
                // })
            })
        }
    })
</script>

<style lang="scss">
    // Vendor
    @import 'animate.css';

    // Main demo style scss
    @import '../assets/style/index.css';
</style>
