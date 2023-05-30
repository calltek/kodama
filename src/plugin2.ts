import plugin from 'tailwindcss/plugin'

// const myPlugin: typeof plugin = () => {
//     // Agrega tus estilos personalizados aquí
// }

// const config = {
//     darkMode: 'class',
//     theme: {
//         colors: {
//             transparent: 'transparent',
//             sidebar: '#0b0f19',
//             toolbar: '#0d121f',
//             white: 'white',
//             black: 'black',
//             gray: {
//                 50: '#F9FAFB',
//                 100: '#F3F4F6',
//                 200: '#E5E7EB',
//                 300: '#D1D5DB',
//                 400: '#9CA3AF',
//                 500: '#6B7280',
//                 600: '#4B5563',
//                 700: '#374151',
//                 800: '#1F2937',
//                 900: '#111827'
//             },
//             primary: '#1A56DB',
//             secondary: '#5014d0',
//             success: '#01dc83',
//             warning: '#f1bc00',
//             danger: '#d9214e',
//             info: '#35e4d8'
//         },
//         fontFamily: {
//             sans: ['Montserrat', 'ui-sans-serif'],
//             title: ['Rubik', 'ui-sans-serif']
//         }
//     }
// }

export default plugin(
    function ({ addBase, theme }) {
        return true
    },
    {
        darkMode: 'class',
        theme: {
            colors: {
                transparent: 'transparent',
                sidebar: '#0b0f19',
                toolbar: '#0d121f',
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
                primary: '#1A56DB',
                secondary: '#5014d0',
                success: '#01dc83',
                warning: '#f1bc00',
                danger: '#d9214e',
                info: '#35e4d8'
            },
            fontFamily: {
                sans: ['Montserrat', 'ui-sans-serif'],
                title: ['Rubik', 'ui-sans-serif']
            }
        }
    }
)
