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

// TAILWIND
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'
const config = resolveConfig(tailwindConfig).theme

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
    appContentBg: '#0c0c0d', // dark
    appBorderColor: '#000', // black
    appBg: '#04060a',

    // Text colors
    textColor: 'white',
    textInverseColor: 'black',

    // Toolbar default and active colors
    barTextColor: '#fff', //white
    barSelectedColor: '#01dc83', //success
    barBg: '#18181b', //gray-900

    // Form colors
    inputBg: '#18181b', //gray-900
    inputBorder: '#27272a', //gray-800
    inputTextColor: 'black', //black
    inputBorderRadius: 4
}

const light = {
    ...themes.normal,
    ...brand,

    // UI
    appContentBg: '#fafafa', //gray-50
    appBorderColor: '#e4e4e7', //gray-200
    appBg: '#e4e4e7', //gray-200

    // Text colors
    textColor: 'black',
    textInverseColor: 'white',

    // Toolbar default and active colors
    barTextColor: '#6b7280',
    barSelectedColor: '#0095e8',
    barBg: '#fff',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
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
