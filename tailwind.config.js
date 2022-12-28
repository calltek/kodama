/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            white: 'white',
            black: 'black',
            light: '#eff2f5',
            dark: '#181C32',
            gray: {
                50: '#f5f8fa',
                100: '#eff2f5',
                200: '#E4E6EF',
                300: '#d1d5db',
                400: '#B5B5C3',
                500: '#A1A5B7',
                600: '#7E8299',
                700: '#5E6278',
                800: '#3F4254',
                900: '#181C32',
                1000: '#080b12'
            },

            // Status
            primary: '#0095e8',
            secondary: '#5014d0',
            success: '#01dc83',
            warning: '#f1bc00',
            danger: '#d9214e',
            info: '#35e4d8',

            // Inverse Colors
            inverse: {
                white: '#000000',
                light: '#2B2B40',
                black: '#ffffff',
                dark: '#ffffff',
                primary: '#ffffff',
                secondary: '#ffffff',
                success: '#ffffff',
                warning: '#ffffff',
                danger: '#ffffff',
                info: '#ffffff'
            }
        }
    },
    darkMode: 'class'
    // Prevent purgecss
    // safelist: [
    //     {
    //         pattern: /./,
    //         variants: ['hover', 'focus']
    //     }
    // ]
}
