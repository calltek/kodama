<template>
    <header>
        <nav class="px-4 lg:px-6 py-2.5 bg-sidebar text-gray-200 select-none">
            <div class="flex flex-wrap items-center">
                <div class="flex sm:hidden">
                    <k-button
                        icon="chevrons-right"
                        link
                        color="primary"
                        @click="collapsed = false"
                    ></k-button>
                </div>

                <div class="hidden sm:flex justify-start items-center">
                    <k-toolbar-left :collapsed="collapsed" />
                </div>

                <div class="ml-auto"></div>

                <div class="flex flex-row gap-4 items-center">
                    <k-updater />

                    <k-toolbar-right :collapsed="collapsed" />

                    <k-debug />

                    <div class="flex items-center lg:order-2">
                        <k-dropdown>
                            <div>
                                <k-avatar
                                    :name="fullname"
                                    :size="42"
                                    :tooltip="false"
                                    square
                                    class="cursor-pointer"
                                />
                            </div>

                            <template #header>
                                <div class="flex gap-4 items-center">
                                    <k-avatar
                                        :name="fullname"
                                        :size="40"
                                        :tooltip="false"
                                    />
                                    <div>
                                        Bienvenido <br />
                                        <strong>{{ firstname }}</strong>
                                    </div>
                                </div>
                            </template>

                            <template #content>
                                <k-dropdown-menu @click="toggleTheme">
                                    <k-icon
                                        :icon="darkMode ? 'sun' : 'moon'"
                                        type="fal"
                                        class="mr-2"
                                    />
                                    {{
                                        darkMode ? 'Modo claro' : 'Modo oscuro'
                                    }}
                                </k-dropdown-menu>
                                <k-dropdown-menu
                                    class="size-config"
                                    @click="cycleFontSize"
                                >
                                    <k-icon
                                        icon="text-size"
                                        type="fal"
                                        class="mr-2"
                                    />
                                    Tamaño
                                    <ul class="size-list">
                                        <li>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    value="small"
                                                    :checked="
                                                        fontSize === 'small'
                                                    "
                                                    @change="
                                                        setFontSize('small')
                                                    "
                                                />
                                                SM
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    value="medium"
                                                    :checked="
                                                        fontSize === 'medium'
                                                    "
                                                    @change="
                                                        setFontSize('medium')
                                                    "
                                                />
                                                MD
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    value="large"
                                                    :checked="
                                                        fontSize === 'large'
                                                    "
                                                    @change="
                                                        setFontSize('large')
                                                    "
                                                />
                                                LG
                                            </label>
                                        </li>
                                    </ul>
                                </k-dropdown-menu>
                                <k-dropdown-menus
                                    v-if="defaultRoutes.profile"
                                    @click="$router.push(defaultRoutes.profile)"
                                >
                                    <k-icon
                                        icon="address-card"
                                        type="fal"
                                        class="mr-2"
                                    />
                                    Mi Perfil
                                </k-dropdown-menus>
                                <k-dropdown-menu
                                    v-if="defaultRoutes.configuration"
                                    @click="
                                        $router.push(
                                            defaultRoutes.configuration
                                        )
                                    "
                                >
                                    <k-icon
                                        icon="gear"
                                        type="fal"
                                        class="mr-2"
                                    />
                                    Configuración
                                </k-dropdown-menu>
                            </template>

                            <template #footer>
                                <a
                                    class="text-danger cursor-pointer block"
                                    @click="logout()"
                                >
                                    <k-icon
                                        icon="right-from-bracket"
                                        class="mr-2"
                                    />
                                    Cerrar sesión
                                </a>
                            </template>
                        </k-dropdown>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
    import { defineComponent, computed, inject } from 'vue'

    import KUpdater from './_updater.vue'
    import KDebug from './_debug.vue'

    import { defaultRoutes } from '@/helpers/config'
    import { useConfig } from '@/store'
    import { KodamaParams } from '@/config'

    export default defineComponent({
        name: 'KTopbar',
        components: {
            KUpdater,
            KDebug
        },
        setup() {
            const auth = inject('$auth') as KodamaParams['auth']

            const logout = () => {
                auth.logout()
            }

            const firstname = computed(() => {
                return auth.getLastName() || 'Jhon'
            })

            const fullname = computed(() => {
                const name = auth.getName() || 'Jhon'
                const lastname = auth.getLastName() || 'Doe'
                return `${name} ${lastname}`
            })

            const collapsed = computed({
                get() {
                    const config = useConfig()
                    return config.get('aside.collapsed') || false
                },
                set(value) {
                    const config = useConfig()
                    config.set('aside.collapsed', value)
                }
            })

            const darkMode = computed(() => {
                const config = useConfig()
                return config.get('darkMode')
            })

            const toggleTheme = () => {
                const config = useConfig()

                if (darkMode.value) {
                    config.set('darkMode', false)

                    document
                        .getElementsByTagName('html')[0]
                        .classList.remove('dark')
                    document
                        .getElementsByTagName('html')[0]
                        .classList.add('light')
                } else {
                    config.set('darkMode', true)

                    document
                        .getElementsByTagName('html')[0]
                        .classList.remove('light')
                    document
                        .getElementsByTagName('html')[0]
                        .classList.add('dark')
                }
            }

            const fontSize = computed(() => {
                const config = useConfig()
                return config.get('fontSize') || 'medium'
            })

            const setFontSize = (size: 'small' | 'medium' | 'large') => {
                const config = useConfig()
                config.set('fontSize', size)

                const root = document.documentElement
                const sizes = {
                    small: '.8rem',
                    medium: '.9rem',
                    large: '1rem'
                }

                root.style.setProperty('--font-size-base', sizes[size])
            }

            const cycleFontSize = (event: Event) => {
                if ((event.target as HTMLElement).closest('label')) {
                    return
                }

                const sizes = ['small', 'medium', 'large'] as const
                const currentIndex = sizes.indexOf(
                    fontSize.value as 'small' | 'medium' | 'large'
                )
                const nextIndex = (currentIndex + 1) % sizes.length
                setFontSize(sizes[nextIndex])
            }

            return {
                //Variables
                firstname,
                fullname,
                collapsed,
                darkMode,
                defaultRoutes,
                fontSize,

                // Methods
                logout,
                toggleTheme,
                setFontSize,
                cycleFontSize
            }
        }
    })
</script>

<style lang="scss">
    .size-config {
        @apply items-center;
        display: flex !important;

        .size-list {
            @apply flex gap-2 items-center pl-8;
            li {
                @apply h-full w-fit;
                padding: 0 !important;
                background: transparent;
                box-shadow: none !important;
                border: 0;
                label {
                    @apply h-full w-full flex rounded-md items-center justify-center px-2 py-0.5 border border-gray-300 text-xs;
                    &:has(input:checked) {
                        @apply bg-primary text-white;
                    }
                    input {
                        @apply absolute opacity-0 w-0 h-0;
                    }
                }
            }
        }
    }
</style>
