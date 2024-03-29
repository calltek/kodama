import React from 'react'
import type { Preview } from '@storybook/vue3'
import { themes } from '@storybook/theming'
import { setup } from '@storybook/vue3'


// PINIA
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// KODAMA
import { createApp } from '../src/main'
import '../src/config/_style'

// CUSTOM CONFIG
import router from './app/config/router'
import menu from './app/config/menu'
import settings from './app/config/settings'
import { useAuth } from './app/modules/auth'
import { useDarkMode } from 'storybook-dark-mode'
import { DocsContainer } from '@storybook/blocks'

setup((app) => {
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
})

const brand = {
    // Brand
    brandTitle: 'Kodama',
    brandUrl: 'https://calltek.es',
    brandImage: 'https://place-hold.it/350x150',
    brandTarget: '_blank'
}

const dark = {
    ...themes.dark,
    ...brand,

    // UI
    appContentBg: '#111827', // gray-900
    appBorderColor: '#1F2937', // gray-800
    appBg: '#0b0f19',

    // Text colors
    textColor: '#9CA3AF', // gray-700

    // Toolbar default and active colors
    barTextColor: '#9CA3AF', // gray-400
    barSelectedColor: '#1A56DB', //primary
    barBg: '#1F2937', //gray-900

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
    appContentBg: '#fff', // gray-100
    appBorderColor: '#D1D5DB', //gray-300
    appBg: '#0b0f19',

    // Text colors
    textColor: '#374151',

    // Toolbar default and active colors
    barTextColor: '#4B5563', //gray-600
    barSelectedColor: '#1A56DB', //primary
    barBg: '#f3f4f6',

    // Form colors
    inputBg: '#F9FAFB',
    inputBorder: '#D1D5DB',
    inputTextColor: '#111827',
    inputBorderRadius: 4
}

const preview: Preview = {
    parameters: {
        layout: 'centered',
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        darkMode: {
            classTarget: 'html',
            stylePreview: true,
            dark: dark,
            light: light
        },

        docs: {
            container: ({ children, context }) => {
                return (
                    <DocsContainer
                        context={context}
                        theme={useDarkMode() ? dark : light}
                    >{children}</DocsContainer>
                );
            },
        },
    }
}

export default preview
