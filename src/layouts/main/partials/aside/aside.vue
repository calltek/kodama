<template>
    <aside id="k-aside" :class="{ collapsed: collapsed }">
        <div
            class="px-3 pb-5 pt-5 flex relative"
            :class="collapsed ? 'justify-center' : 'justify-between'"
        >
            <k-logo
                dark
                :side="!collapsed"
                class="cursor-pointer max-w-[14rem]"
                @click="collapsed = false"
            />

            <k-button
                v-if="!collapsed"
                icon="chevrons-left"
                link
                color="primary"
                class="-mr-2"
                @click="collapsed = true"
            ></k-button>
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
    import { computed, defineComponent, resolveDynamicComponent } from 'vue'
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

            return { collapsed, isComponent }
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
