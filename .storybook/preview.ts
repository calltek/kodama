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
        auth: useAuth
    },
    app
)

vm.use(pinia)

const dark = {
    ...themes.dark,

    // UI
    appContentBg: '#111827',
    appBorderColor: '#080b12',
    appBg: '#080b12',

    // Text colors
    textColor: 'white',
    textInverseColor: 'black',

    // Toolbar default and active colors
    barTextColor: '#fff',
    barSelectedColor: '#01dc83',
    barBg: '#182238',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    // Brand
    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://place-hold.it/350x150',
    brandTarget: '_self'
}

const light = {
    ...themes.normal,

    // UI
    appContentBg: '#ffffff',
    appBorderColor: '#f4f7f9',
    appBg: '#f7f9fc',

    // Text colors
    textColor: '#111827',
    textInverseColor: 'white',

    // Toolbar default and active colors
    barTextColor: '#6b7280',
    barSelectedColor: '#0095e8',
    barBg: '#dcdfe3',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    // Brand
    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://place-hold.it/350x150',
    brandTarget: '_self'
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
