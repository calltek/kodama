import { computed } from 'vue'
import { useConfig } from '../store'
import { Config } from '../config/_settings'

// Returns all config config
export const config = computed((): Config => {
    const config = useConfig()
    return config.get()
})

//////////////////////////////////////
// GENERAL
//////////////////////////////////////

// Get application name
export const name = computed((): Config['name'] => {
    const config = useConfig()
    return config.get('name')
})

// Get kodama version
export const version = computed((): Config['version'] => {
    const config = useConfig()
    return config.get('version')
})

// Get homepage
export const homepage = computed((): Config['homepage'] => {
    const config = useConfig()
    return config.get('homepage')
})

//////////////////////////////////////
// BRANDING
//////////////////////////////////////

// Get custom colors
export const color = computed((): Config['color'] => {
    const config = useConfig()
    return config.get('color')
})

export const logo = computed((): Config['logo'] => {
    const config = useConfig()
    return config.get('logo')
})

// Check if the page loader is enabled
export const loaderEnabled = computed(() => {
    const config = useConfig()
    return config.get('loader.display') === true
})

// Page loader logo image
export const loaderLogo = computed((): Config['loader']['logo'] => {
    const config = useConfig()
    return config.get('loader.logo')
})

export const loaderType = computed((): Config['loader']['type'] => {
    const config = useConfig()
    return config.get('loader.type')
})

// Get copyright info
export const copyright = computed((): Config['copyright'] => {
    const config = useConfig()
    return config.get('copyright')
})

//////////////////////////////////////
// AUTH
//////////////////////////////////////
export const authBackground = computed((): Config['auth']['background'] => {
    const config = useConfig()
    return config.get('auth.background')
})

// Check if enabled signup
export const signupEnabled = computed(() => {
    const config = useConfig()
    return config.get('auth.signup') === true
})

//////////////////////////////////////
// VIEWS
//////////////////////////////////////

// Check if is changelog view enabled
export const changelogEnabled = computed(() => {
    const config = useConfig()
    return config.get('changelog') === true
})

// Check if enabled global search
export const searchEnabled = computed(() => {
    const config = useConfig()
    return config.get('search') === true
})

// Check if scroll top is enabled
export const scrollTopEnabled = computed(() => {
    const config = useConfig()
    return config.get('scrollTop') === true
})

//////////////////////////////////////
// LAYOUT
//////////////////////////////////////

// Check if header container is fluid
export const headerWidthFluid = computed(() => {
    const config = useConfig()
    return config.get('header.width') === 'fluid'
})

// Get the aside display
export const asideDisplay = computed(() => {
    const config = useConfig()
    return config.get('aside.display') === true
})

// Aside minimized
export const asideMinimized = computed(() => {
    const config = useConfig()
    return config.get('aside.minimized') === true
})

// Check if container width is fluid
export const contentWidthFluid = computed(() => {
    const config = useConfig()
    return config.get('content.width') === 'fluid'
})

// Check if the aside menu is enabled
export const asideEnabled = computed(() => {
    const config = useConfig()
    return !!config.get('aside.display')
})

// Check if footer container is fluid
export const footerWidthFluid = computed(() => {
    const config = useConfig()
    return config.get('footer.width') === 'fluid'
})

//////////////////////////////////////
// VENDOR
//////////////////////////////////////

export const fontAwesomeKit = computed(
    (): Config['vendor']['fontAwesomeKit'] => {
        const config = useConfig()
        return config.get('vendor.fontAwesomeKit')
    }
)

export const sentryDSN = computed((): Config['vendor']['sentryDSN'] => {
    const config = useConfig()
    return config.get('vendor.sentryDSN')
})

//////////////////////////////////////
// DEVELOPER
//////////////////////////////////////

export const debug = computed((): Config['debug'] => {
    const config = useConfig()
    return config.get('debug')
})
