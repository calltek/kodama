/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            white: 'white',
            black: 'black',

            light: '#f3f4f6',
            dark: '#111827',

            gray: {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827',
                1000: '#080b12'
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
    // Prevent purgecss
    // safelist: [
    //     {
    //         pattern: /./,
    //         variants: ['hover', 'focus']
    //     }
    // ]
}
