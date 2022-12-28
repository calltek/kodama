import { Config } from '../../../src/main'

const defaultState: Config = {
    // General
    name: 'Kodama',
    version: '0.2.0',

    ///////////////
    // Branding
    ///////////////
    color: {
        primary: '#009EF7',
        secondary: '#6610f2',
        success: '#50CD89',
        warning: '#FFC700',
        danger: '#F1416C'
    },

    logo: {
        favicon: '/media/logos/favicon.ico',
        dark: '/media/logos/logo_dark.png',
        light: '/media/logos/logo.png',
        side_dark: '/media/logos/sidelogo_dark.png',
        side_light: '/media/logos/logo.png'
    },

    loader: {
        logo: '/media/logos/logo.png',
        display: true,
        type: 'default'
    },

    copyright: {
        text: 'International Austral Sport S.A',
        link: 'https://www.austral.es'
    },

    ///////////////
    // Router
    ///////////////
    homepage: 'dashboardOrders',

    ///////////////
    // Vendor
    ///////////////
    vendor: {
        // Use Webfont instead SVG
        fontAwesomeKit: 'https://kit.fontawesome.com/17d2853bf1.js',
        sentryDSN: ''
    },

    ///////////////
    // Developer
    ///////////////
    debug: false
}

export default defaultState
