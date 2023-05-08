<template>
    <router-view />
</template>

<script lang="ts">
    import tippy from 'tippy.js'
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

                    document.head.prepend(script)
                }
            }

            const addGoogleFonts = () => {
                const link = document.createElement('link')
                link.rel = 'stylesheet'
                link.href =
                    'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Rubik:wght@400;500;600;700&display=swap'

                document.head.prepend(link)
            }

            const darkMode = config.get('darkMode')
            if (darkMode) {
                document.querySelector('html')?.classList.add('dark')
            }

            onMounted(() => {
                config.init()

                replaceFavicon()
                addFontAwesomeKit()
                addGoogleFonts()

                tippy('[tooltip]')

                const html = document.querySelector('html')
                const sb =
                    html?.getAttribute('data-storybook') === 'true'
                        ? true
                        : false

                if (html && sb) {
                    const observer: MutationObserver = new MutationObserver(
                        (mutations) => {
                            for (const m of mutations) {
                                const n: any = m
                                const newValue = n.target.getAttribute(
                                    m.attributeName
                                )

                                nextTick(() => {
                                    if (newValue === 'dark') {
                                        config.set('darkMode', true)
                                    } else {
                                        config.set('darkMode', false)
                                    }
                                })
                            }
                        }
                    )

                    observer.observe(html, {
                        attributes: true,
                        attributeOldValue: true,
                        attributeFilter: ['class']
                    })
                }
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
