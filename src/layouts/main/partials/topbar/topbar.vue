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
                    <k-toolbar-search />
                </div>

                <div class="ml-auto"></div>

                <div class="flex flex-row gap-4">
                    <k-updater />

                    <k-theme />

                    <div class="flex items-center lg:order-2">
                        <k-dropdown click>
                            <k-avatar
                                :name="fullname"
                                :size="42"
                                :tooltip="false"
                                square
                                class="cursor-pointer"
                            />

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
                                <k-dropdown-item>
                                    <router-link to="/pages/profile/overview">
                                        <k-icon
                                            icon="address-card"
                                            type="fal"
                                            class="mr-2"
                                        />
                                        Mi Perfil
                                    </router-link>
                                </k-dropdown-item>
                                <k-dropdown-item>
                                    <router-link to="/pages/profile/overview">
                                        <k-icon
                                            icon="gear"
                                            type="fal"
                                            class="mr-2"
                                        />
                                        Configuración
                                    </router-link>
                                </k-dropdown-item>
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

    // import GlobalSearch from './global-search/global-search.vue'
    import KUpdater from './updater.vue'
    import KTheme from './theme.vue'

    import { searchEnabled } from '@/helpers/config'
    import { useConfig } from '@/store'
    import { KodamaParams } from '@/config'

    export default defineComponent({
        name: 'KTopbar',
        components: {
            KUpdater,
            KTheme
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

            return { firstname, fullname, searchEnabled, logout, collapsed }
        }
    })
</script>
