const defaultState = {
    // General
    name: 'Kodama',
    version: '0.2.0',

    ///////////////
    // Branding
    ///////////////

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
    debug: true
}

export default defaultState
