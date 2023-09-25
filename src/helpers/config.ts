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
export const homepage = computed((): Config['routes']['homepage'] => {
    const config = useConfig()
    return config.get('routes.homepage')
})

// Get default routes
export const defaultRoutes = computed((): Config['routes'] => {
    const config = useConfig()
    return config.get('routes')
})

//////////////////////////////////////
// BRANDING
//////////////////////////////////////

export const logo = computed((): Config['logo'] => {
    const config = useConfig()
    return config.get('logo')
})

// Get copyright info
export const copyright = computed((): Config['copyright'] => {
    const config = useConfig()
    return config.get('copyright')
})

export const darkMode = computed(() => {
    const config = useConfig()
    return config.get('darkMode')
})

export const bubbleColor = computed(() => {
    if (darkMode.value) {
        return '#1F2937'
    }

    return '#F3F4F6'
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

//////////////////////////////////////
// LAYOUT
//////////////////////////////////////

// Get the aside display
export const asideCollapsed = computed(() => {
    const config = useConfig()
    return config.get('aside.collapsed') === true
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
