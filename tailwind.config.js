/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            transparent: 'transparent',

            // Mono Colors
            white: 'white',
            black: 'black',
            gray: {
                50: '#fafafa',
                100: '#f4f4f5',
                200: '#e4e4e7',
                300: '#d4d4d8',
                400: '#a1a1aa',
                500: '#71717a',
                600: '#52525b',
                700: '#3f3f46',
                800: '#27272a',
                900: '#18181b'
            },

            // Brand
            primary: '#0095e8',
            secondary: '#5014d0',

            // Status
            success: '#01dc83',
            warning: '#f1bc00',
            danger: '#d9214e',
            info: '#35e4d8'
        }
    },
    darkMode: 'class'
}
