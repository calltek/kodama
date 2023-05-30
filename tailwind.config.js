const KodamaPlugin = require('kodama-ui/plugin.js')

module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx,mdx}',
        './node_modules/kodama-ui/dist/**/*.js'
    ],
    plugins: [KodamaPlugin]
}
