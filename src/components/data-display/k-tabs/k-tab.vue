<template>
    <section
        v-show="isActive"
        :id="paneId"
        ref="tab"
        :data-tab-id="computedId"
        :aria-hidden="!isActive"
        :class="classes"
        role="tabpanel"
    >
        <slot />
    </section>
</template>

<script lang="ts">
    import {
        computed,
        defineComponent,
        onBeforeMount,
        onBeforeUnmount,
        ref,
        watch
    } from 'vue'
    import { injectStrict } from './utils'
    import {
        AddTabKey,
        DeleteTabKey,
        TabsProviderKey,
        UpdateTabKey
    } from './symbols'

    export default defineComponent({
        name: 'KTab',
        props: {
            id: {
                type: String,
                default: null
            },
            classes: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        setup(props) {
            const isActive = ref(false)

            const tabsProvider = injectStrict(TabsProviderKey)
            const addTab = injectStrict(AddTabKey)
            const updateTab = injectStrict(UpdateTabKey)
            const deleteTab = injectStrict(DeleteTabKey)

            const computedId = props.id
                ? props.id
                : props.title.toLowerCase().replace(/ /g, '-')

            const header = computed(() => props.title)
            const paneId = computedId + '-pane'
            const hash = computed(
                () => '#' + (!props.disabled ? computedId : '')
            )

            watch(
                () => tabsProvider.activeTabHash,
                () => {
                    isActive.value = hash.value === tabsProvider.activeTabHash
                }
            )

            watch(
                () => Object.assign({}, props),
                () => {
                    updateTab(computedId, {
                        name: props.title,
                        header: header.value,
                        isDisabled: props.disabled,
                        hash: hash.value,
                        index: tabsProvider.tabs.length,
                        computedId: computedId,
                        paneId: paneId
                    })
                }
            )

            onBeforeMount(() => {
                addTab({
                    name: props.title,
                    header: header.value,
                    isDisabled: props.disabled,
                    hash: hash.value,
                    index: tabsProvider.tabs.length,
                    computedId: computedId,
                    paneId: paneId
                })
            })

            onBeforeUnmount(() => {
                deleteTab(computedId)
            })

            return { header: header.value, computedId, paneId, hash, isActive }
        }
    })
</script>

<style scoped></style>
