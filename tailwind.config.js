const KodamaPlugin = require('kodama-ui/plugin')

module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx,mdx}',
        './node_modules/kodama-ui/dist/**/*.js'
    ],
    plugins: [KodamaPlugin],
    theme: {
        extend: {
            minHeight: {
                9: '2.25rem',
                10: '2.5rem',
                12: '3rem',
                14: '3.5rem'
            }
        }
    }
}
