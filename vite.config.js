import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({}),
        dts({
            insertTypesEntry: true
        }),
        viteStaticCopy({
            targets: [
                {
                    src: './plugin.js',
                    dest: './'
                }
            ]
        })
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: 'Kodama',
            formats: ['es', 'umd'],
            fileName: (format) => `kodama.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
        commonjsOptions: {
            esmExternals: true
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'tailwind.config': path.resolve(__dirname, './tailwind.config.js')
        }
    }
})
