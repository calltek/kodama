<template>
    <div class="k-simple-table">
        <div class="k-simple-table-body" :style="{ maxHeight: maxHeight }">
            <transition
                name="animated_fade"
                enter-active-class="animate__animated animate__faster animate__fadeIn"
                leave-active-class="animate__animated animate__faster animate__fadeOut"
            >
                <div
                    v-if="loading"
                    class="flex z-40 absolute top-0 left-0 w-full h-full items-center justify-center bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 cursor-progress"
                >
                    <k-icon
                        icon="spinner-third"
                        spin
                        class="text-primary"
                        :size="40"
                    />
                </div>
            </transition>

            <div class="k-simple-table-content">
                <div class="k-simple-table-tr k-simple-table-head">
                    <div
                        v-for="(col, key) in cols"
                        :key="key"
                        :style="col.style"
                        class="k-simple-table-td"
                    >
                        {{ col.title }}
                    </div>
                </div>

                <template v-for="(item, itemKey) in data" :key="itemKey">
                    <div class="k-simple-table-tr">
                        <div
                            v-for="(col, colKey) in cols"
                            :key="colKey"
                            :style="col.style"
                            class="k-simple-table-td"
                        >
                            <slot
                                v-if="col.slot"
                                :name="col.slot"
                                v-bind="{
                                    row: item,
                                    value: item[col.index],
                                    index: itemKey
                                }"
                            />

                            <div v-else>
                                {{ item[col.index] }}
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import props from './k-simple-table.props'
    import useColumn from './lib/columns'

    export default defineComponent({
        name: 'KSimpleTable',
        autoload: true,
        props: props,
        emits: ['fetch', 'filter'],
        setup(props, ctx) {
            const hasSlot = (name: string) => !!ctx.slots[name]

            const { cols, colLength } = useColumn(props)

            return {
                hasSlot,
                cols,
                colLength
            }
        }
    })
</script>

<style lang="scss" scoped>
    .k-simple-table {
        .k-simple-table-body {
            @apply relative overflow-auto;

            .k-simple-table-content {
                @apply text-gray-900 border-0 dark:text-white text-left table box-border w-full;

                .k-simple-table-tr {
                    @apply table-row;

                    .k-simple-table-td {
                        @apply p-2 table-cell align-middle text-sm;
                    }
                }

                .k-simple-table-tr:last-child {
                    .k-simple-table-td {
                        @apply border-b-0;
                    }
                }

                .k-simple-table-tr.k-simple-table-head {
                    @apply sticky top-0 left-0 bg-gray-100 dark:bg-gray-700 z-10;

                    .k-simple-table-td {
                        @apply text-gray-500 dark:text-gray-100 uppercase font-bold text-sm whitespace-nowrap px-2 border-none;
                    }

                    .k-simple-table-td:first-child {
                        @apply rounded-l-xl;
                    }

                    .k-simple-table-td:last-child {
                        @apply rounded-r-xl;
                    }
                }
            }

            &::-webkit-scrollbar {
                @apply w-1.5 h-1.5;
            }

            &::-webkit-scrollbar-corner {
                background: rgba(0, 0, 0, 0);
            }
        }
    }
</style>
