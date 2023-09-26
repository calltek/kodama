<template>
    <div class="k-tabs" :class="[classes, shadow ? 'k-tab-shadow' : '']">
        <ul role="tablist" class="k-tab-list">
            <li
                v-for="(tab, i) in state.tabs"
                :key="i"
                class="k-tab-item"
                :class="{
                    'k-tab-active': tab.isActive,
                    'k-tab-disabled': tab.isDisabled
                }"
                role="presentation"
                @click="selectTab(tab.hash, $event)"
            >
                <a
                    role="tab"
                    :aria-controls="tab.paneId"
                    :aria-selected="tab.isActive"
                    :href="tab.hash"
                    v-html="tab.header"
                />
            </li>
        </ul>

        <div class="k-tab-pane">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, provide, reactive } from 'vue'
    import { Tab, TabsState } from './types'
    import {
        AddTabKey,
        DeleteTabKey,
        TabsProviderKey,
        UpdateTabKey
    } from './symbols'

    export default defineComponent({
        name: 'KTabs',
        props: {
            modelValue: {
                type: [String, Number],
                default: 0
            },
            classes: {
                type: String,
                default: ''
            },
            shadow: {
                type: Boolean,
                default: true
            }
        },
        emits: ['changed', 'clicked'],
        setup(_props, { emit }) {
            const state: TabsState = reactive({
                activeTabHash: '',
                lastActiveTabHash: '',
                tabs: []
            })

            provide(TabsProviderKey, state)
            provide(AddTabKey, (tab) => {
                state.tabs.push(tab)
            })
            provide(UpdateTabKey, (computedId: string, data: Tab) => {
                const tabIndex = state.tabs.findIndex(
                    (tab) => tab.computedId === computedId
                )
                data.isActive = state.tabs[tabIndex].isActive
                state.tabs[tabIndex] = data
            })
            provide(DeleteTabKey, (computedId) => {
                const tabIndex = state.tabs.findIndex(
                    (tab) => tab.computedId === computedId
                )
                state.tabs.splice(tabIndex, 1)
            })

            const selectTab = (
                selectedTabHash: string,
                event?: Event
            ): void => {
                if (event) {
                    event.preventDefault()
                }

                const selectedTab = findTab(selectedTabHash)
                if (!selectedTab) {
                    return
                }

                if (event && selectedTab.isDisabled) {
                    event.preventDefault()
                    return
                }

                if (state.lastActiveTabHash === selectedTab.hash) {
                    emit('clicked', { tab: selectedTab })
                    return
                }
                state.tabs.forEach((tab) => {
                    tab.isActive = tab.hash === selectedTab.hash
                })

                emit('changed', { tab: selectedTab })

                state.lastActiveTabHash = state.activeTabHash = selectedTab.hash
            }

            const findTab = (hash: string): Tab | undefined => {
                return state.tabs.find((tab) => tab.hash === hash)
            }

            onMounted(() => {
                if (!state.tabs.length) {
                    return
                }

                window.addEventListener('hashchange', () =>
                    selectTab(window.location.hash)
                )

                if (findTab(window.location.hash)) {
                    selectTab(window.location.hash)
                    return
                }

                // if (props.cacheLifetime > 0) {
                //     const storageKey = `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`
                //     const previousSelectedTabHash =
                //         expiringStorage.get(storageKey)
                //     if (
                //         previousSelectedTabHash !== null &&
                //         findTab(previousSelectedTabHash)
                //     ) {
                //         selectTab(previousSelectedTabHash)
                //         return
                //     }
                //     if (
                //         props.options.defaultTabHash &&
                //         findTab('#' + props.options.defaultTabHash)
                //     ) {
                //         selectTab('#' + props.options.defaultTabHash)
                //         return
                //     }
                // }

                selectTab(state.tabs[0].hash)
            })

            return { state, selectTab, findTab }
        }
    })
</script>

<style scoped lang="scss">
    .k-tabs {
        @apply text-gray-700 dark:text-white;
        .k-tab-list {
            @apply flex flex-row select-none border-b border-b-gray-200 dark:border-b-gray-700 overflow-x-auto;

            .k-tab-item {
                @apply bg-gray-200 dark:bg-gray-600 rounded-t-xl py-4 px-6 font-semibold whitespace-nowrap cursor-pointer border-t border-r border-gray-200 dark:border-gray-700;

                &.k-tab-active {
                    @apply bg-white dark:bg-gray-800;
                }
            }
        }

        .k-tab-pane {
            @apply bg-white dark:bg-gray-800 p-5 rounded-b-xl;
        }

        &.k-tab-shadow {
            .k-tab-pane {
                @apply shadow-xl;
            }
        }
    }
</style>
