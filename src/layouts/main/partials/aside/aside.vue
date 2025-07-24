<template>
    <aside id="k-aside" :class="{ collapsed: collapsed }">
        <div
            class="px-3 pb-5 pt-5 flex relative"
            :class="collapsed ? 'justify-center' : 'justify-between'"
        >
            <div
                v-if="isMobile && menuType === 'simple'"
                class="flex items-center cursor-pointer"
                @click="handlerColapsed(true)"
            >
                <k-icon icon="xmark" type="far" class="text-lg mx-2" />
                <k-title :size="5">MENU</k-title>
            </div>

            <k-logo
                v-else-if="!collapsed"
                dark
                side
                class="cursor-pointer max-w-[14rem]"
                @click="handlerColapsed(true)"
            />
            <k-logo
                v-else
                dark
                :side="false"
                class="cursor-pointer max-w-[54px]"
                @click="handlerColapsed(false)"
            />

            <k-button
                v-if="(isMobile || menuType === 'default') && !collapsed"
                icon="chevrons-left"
                link
                color="primary"
                class="-mr-2"
                @click="handlerColapsed(true)"
            />
        </div>
        <div class="overflow-y-auto py-5 px-3 h-full flex-1">
            <k-menu :collapsed="collapsed" />
        </div>
        <div class="justify-center p-4 space-x-4">
            <k-aside-footer :collapsed="collapsed" />
        </div>
    </aside>
</template>

<script lang="ts">
    import { useConfig } from '@/store'
    import {
        computed,
        defineComponent,
        resolveDynamicComponent
    } from 'vue'
    import KMenu from './menu.vue'

    export default defineComponent({
        name: 'KAside',
        components: {
            KMenu
        },
        setup() {
            const isComponent = (name: string) =>
                typeof resolveDynamicComponent(name) !== 'string'

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

            const isMobile = computed(() => {
                const config = useConfig()
                return config.get('isMobileView') || false
            })

            const menuType = computed(() => {
                const config = useConfig()
                return config.get('menuType') || 'default'
            })

            const handlerColapsed = (value?: boolean) => {
                if (
                    (!collapsed.value &&
                        menuType.value === 'block' &&
                        !isMobile.value) ||
                    (!collapsed.value &&
                        menuType.value === 'simple' &&
                        !isMobile.value)
                ) {
                    collapsed.value = false
                } else {
                    collapsed.value = value ?? !collapsed.value
                }
            }

            return {
                collapsed,
                menuType,
                isMobile,

                isComponent,
                handlerColapsed
            }
        }
    })
</script>

<style lang="scss" scoped>
    #k-aside {
        @apply w-80 min-w-[18rem] transition-all fixed z-50 sm:z-0 sm:relative h-screen bg-sidebar text-gray-100 flex flex-col;

        &.collapsed {
            @apply w-20 hidden sm:flex min-w-max;
        }
    }
</style>
