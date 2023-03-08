import React from 'react'
import { app } from '@storybook/vue3'
import { themes } from '@storybook/theming'
import { DocsContainer } from '@storybook/addon-docs'
import { useDarkMode } from 'storybook-dark-mode'

// PINIA
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// KODAMA
import { createApp } from '../src/main'
import '../src/config/_style.ts'

// CUSTOM CONFIG
import router from './app/config/router'
import menu from './app/config/menu'
import settings from './app/config/settings'
import { useAuth } from './app/modules/auth'

const components = import.meta.globEager('./app/components/**/*.vue')
const layouts = import.meta.globEager('./app/layout/**/*.vue')

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const vm = createApp(
    {
        router: router,
        components: { ...components, ...layouts },
        menu: menu,
        settings: settings,
        auth: {
            getName: () => {
                const auth = useAuth()
                return auth.name
            },
            getLastName: () => {
                const auth = useAuth()
                return auth.lastname
            },
            isLoggedIn: () => {
                const auth = useAuth()
                return auth.isLoggedIn
            },
            login: (username, password) => {
                const auth = useAuth()
                return auth.login(username, password)
            },
            forgot: (email) => {
                const auth = useAuth()
                return auth.forgot(email)
            },
            logout: () => {
                const auth = useAuth()
                return auth.logout()
            }
        }
    },
    app
)

vm.use(pinia)

const brand = {
    // Brand
    brandTitle: 'Kodama',
    brandUrl: 'https://calltek.es',
    brandImage: 'https://place-hold.it/350x150',
    brandTarget: '_self'
}

const dark = {
    ...themes.dark,
    ...brand,

    // UI
    appContentBg: '#111827', // gray-900
    appBorderColor: '#1F2937', // gray-800
    appBg: '#0b0f19',

    // Text colors
    textColor: '#9CA3AF', // gray-400

    // Toolbar default and active colors
    barTextColor: '#9CA3AF', // gray-400
    barSelectedColor: '#1A56DB', //primary
    barBg: '#111827', //gray-900

    // Form colors
    inputBg: '#374151', //gray-700
    inputBorder: '#4B5563', //gray-600
    inputTextColor: '#9CA3AF', //gray-400
    inputBorderRadius: 4
}

const light = {
    ...themes.normal,
    ...brand,

    // UI
    appContentBg: '#F3F4F6', // gray-100
    appBorderColor: '#D1D5DB', //gray-300
    appBg: '#0b0f19',

    // Text colors
    textColor: '#9CA3AF',

    // Toolbar default and active colors
    barTextColor: '#4B5563', //gray-600
    barSelectedColor: '#1A56DB', //primary
    barBg: '#fff',

    // Form colors
    inputBg: '#F9FAFB',
    inputBorder: '#D1D5DB',
    inputTextColor: '#111827',
    inputBorderRadius: 4
}

export const parameters = {
    layout: 'centered',
    darkMode: {
        classTarget: 'html',
        stylePreview: true,

        // Override the default dark theme
        dark: dark,
        // Override the default light theme
        light: light
    },
    docs: {
        container: (props) => {
            const isDark = useDarkMode()

            const { id: storyId, storyById } = props.context
            const {
                parameters: { docs = {} }
            } = storyById(storyId)
            docs.theme = isDark ? dark : light

            return React.createElement(DocsContainer, props)
        }
    }
}
