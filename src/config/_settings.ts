interface Fixed {
    desktop: boolean
    tabletAndMobile: boolean
}

export interface CustomConfig extends Partial<Config> {
    // General
    name: string
    version: string

    ///////////////
    // Router
    ///////////////
    homepage: string
}

interface Config {
    // General
    name: string
    version: string

    ///////////////
    // Router
    ///////////////
    homepage: string

    ///////////////
    // Branding
    ///////////////
    darkMode: boolean

    logo: {
        favicon: string
        dark: string
        light: string
        side_dark: string
        side_light: string
    }

    copyright: {
        text: string
        link: string
    }

    ///////////////
    // Auth
    ///////////////
    auth: {
        background: string
        signup: boolean
    }

    ///////////////
    // Views
    ///////////////
    changelog: boolean
    search: boolean

    ///////////////
    // Responsive
    ///////////////
    isMobileView: boolean
    isTabletView: boolean

    ///////////////
    // Layout
    ///////////////
    aside: {
        collapsed: boolean
    }

    ///////////////
    // Vendor
    ///////////////
    vendor: {
        fontAwesomeKit: string
        sentryDSN: string
    }

    ///////////////
    // Locale
    ///////////////
    locale: {
        current: string
        fallback: string
        available: string[]
    }

    ///////////////
    // Developer
    ///////////////
    debug: boolean
}

const defaultSettings: Config = {
    // General
    name: 'Kodama',
    version: '0.1.0',

    ///////////////
    // Branding
    ///////////////
    darkMode: false,

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
        text: 'Kodama UI',
        link: 'https://calltek.es'
    },

    ///////////////
    // Router
    ///////////////
    homepage: 'dashboard',

    ///////////////
    // Auth
    ///////////////
    auth: {
        background: '',
        signup: false
    },

    ///////////////
    // Views
    ///////////////
    changelog: false,
    search: false,

    ///////////////
    // Responsive
    ///////////////
    isMobileView: false,
    isTabletView: false,

    ///////////////
    // Layout
    ///////////////
    aside: {
        collapsed: true
    },

    ///////////////
    // Vendor
    ///////////////
    vendor: {
        fontAwesomeKit: '',
        sentryDSN: ''
    },

    ///////////////
    // Locale
    ///////////////
    locale: {
        current: 'es',
        fallback: 'es',
        available: ['es']
    },

    ///////////////
    // Developer
    ///////////////
    debug: false
}

export default defaultSettings
export type { Config }
