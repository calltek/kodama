import { Config } from '@kodama/ui'

const defaultState: Config = {
    // General
    name: 'Austral',
    version: '0.2.0',

    ///////////////
    // Branding
    ///////////////
    color: {
        primary: '#009EF7',
        secondary: '#6610f2',
        success: '#50CD89',
        warning: '#FFC700',
        danger: '#F1416C',
    },

    logo: {
        favicon: '/logos/favicon.png',
        dark: '/logos/logo_dark.png',
        light: '/logos/logo.png',
        side_dark: '/logos/sidelogo_dark.png',
        side_light: '/logos/sidelogo.png',
    },

    loader: {
        logo: '/logos/logo.png',
        display: true,
        type: 'default',
    },

    copyright: {
        text: 'International Austral Sport S.A',
        link: 'https://www.austral.es',
    },

    ///////////////
    // Router
    ///////////////
    homepage: 'dashboard',

    ///////////////
    // Vendor
    ///////////////
    vendor: {
        fontAwesomeKit: 'https://kit.fontawesome.com/17d2853bf1.js',
        sentryDSN: '',
    },

    ///////////////
    // Developer
    ///////////////
    debug: true,
}

export default defaultState
