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
    color: {
        primary: string
        secondary: string
        success: string
        warning: string
        danger: string
    }

    logo: {
        favicon: string
        dark: string
        light: string
        side_dark: string
        side_light: string
    }

    loader: {
        logo: string
        display: boolean
        type: 'default' | 'spinner-message' | 'spinner-logo'
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
    scrollTop: boolean
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
    header: {
        display: boolean
        width: 'fixed' | 'fluid'
        fixed: Fixed
    }
    aside: {
        display: boolean
        fixed: boolean
        minimized: boolean
        minimize: boolean
        hoverable: boolean
    }
    content: {
        width: 'fixed' | 'fluid'
    }
    footer: {
        width: 'fixed' | 'fluid'
    }

    ///////////////
    // Vendor
    ///////////////
    vendor: {
        fontAwesomeKit: string
        sentryDSN: string
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
        logo: 'https://kodamaui.s3.eu-west-1.amazonaws.com/logos/sidelogo.png',
        display: true,
        type: 'default'
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
    scrollTop: true,
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
    header: {
        display: true,
        width: 'fluid',
        fixed: {
            desktop: true,
            tabletAndMobile: true
        }
    },
    aside: {
        display: true,
        fixed: true,
        minimized: false,
        minimize: true,
        hoverable: true
    },
    content: {
        width: 'fluid'
    },
    footer: {
        width: 'fluid'
    },

    ///////////////
    // Vendor
    ///////////////
    vendor: {
        fontAwesomeKit: '',
        sentryDSN: ''
    },

    ///////////////
    // Developer
    ///////////////
    debug: false
}

export default defaultSettings
export type { Config }
