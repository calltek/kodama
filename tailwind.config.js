/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            sidebar: '#0b0f19',
            toolbar: '#0d121f',

            // Mono Colors
            white: 'white',
            black: 'black',
            gray: {
                50: '#F9FAFB',
                100: '#F3F4F6',
                200: '#E5E7EB',
                300: '#D1D5DB',
                400: '#9CA3AF',
                500: '#6B7280',
                600: '#4B5563',
                700: '#374151',
                800: '#1F2937',
                900: '#111827'
            },

            // Brand
            primary: '#1A56DB',
            secondary: '#5014d0',

            // Status
            success: '#01dc83',
            warning: '#f1bc00',
            danger: '#d9214e',
            info: '#35e4d8'
        },
        fontFamily: {
            sans: ['Montserrat', 'ui-sans-serif'],
            title: ['Rubik', 'ui-sans-serif']
        }
    },
    darkMode: 'class',
    plugins: [require('flowbite/plugin')]
}
