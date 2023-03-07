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
        favicon:
            'https://kodamaui.s3.eu-west-1.amazonaws.com/logos/favicon.png',
        dark: 'https://kodamaui.s3.eu-west-1.amazonaws.com/logos/logo-dark.png',
        light: 'https://kodamaui.s3.eu-west-1.amazonaws.com/logos/logo.png',
        side_dark:
            'https://kodamaui.s3.eu-west-1.amazonaws.com/logos/sidelogo-dark.png',
        side_light:
            'https://kodamaui.s3.eu-west-1.amazonaws.com/logos/sidelogo.png'
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
    homepage: 'dashboard',

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
