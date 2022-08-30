<template>
    <div class="table-responsive position-relative">
        <loading
            :active="loading"
            :can-cancel="false"
            :is-full-page="false"
            loader="bars"
            :color="color.primary"
            :z-index="99"
        />

        <table
            class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0"
            :style="{ 'min-height': `${height}px` }"
        >
            <thead>
                <tr class="fw-bolder text-muted">
                    <th v-if="selected" class="w-25px">
                        <div
                            class="form-check form-check-sm form-check-custom form-check-solid"
                        >
                            <input
                                class="form-check-input"
                                type="checkbox"
                                :checked="isCheckedAll"
                                @change="toggleGlobalCheck"
                            />
                        </div>
                    </th>

                    <th
                        v-for="(col, key) in cols"
                        :key="key"
                        :style="col.style"
                    >
                        {{ col.title }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <template v-for="(item, itemKey) in data" :key="itemKey">
                    <tr>
                        <td v-if="selected">
                            <div
                                class="form-check form-check-sm form-check-custom form-check-solid"
                            >
                                <input
                                    :checked="isRowChecked[itemKey]"
                                    class="form-check-input widget-13-check"
                                    type="checkbox"
                                    @change="toggleCheck(itemKey)"
                                />
                            </div>
                        </td>

                        <td
                            v-for="(col, colKey) in cols"
                            :key="colKey"
                            :style="col.style"
                        >
                            <k-table-date
                                v-if="col.makeup === 'date'"
                                :value="item[col.index]"
                            />

                            <k-table-image
                                v-else-if="col.makeup === 'image'"
                                :value="item[col.index]"
                            />

                            <k-table-status
                                v-else-if="col.makeup === 'status'"
                                :value="item[col.index]"
                            />

                            <slot
                                v-else-if="col.slot"
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
                        </td>

                        <td v-if="hasSlot('content')" align="right">
                            <a
                                class="btn btn-icon btn-light cursor-pointer"
                                @click="toggleRow(itemKey)"
                            >
                                <i
                                    :class="[
                                        isRowOpen[itemKey]
                                            ? 'fa-chevron-up'
                                            : 'fa-chevron-down',
                                        'fas'
                                    ]"
                                ></i>
                            </a>
                        </td>
                    </tr>
                    <tr v-if="hasSlot('content')" v-show="isRowOpen[itemKey]">
                        <td :colspan="colLength">
                            <slot
                                name="content"
                                v-bind="{ row: item, index: itemKey }"
                            />
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>

        <div v-if="isMore" class="text-center">
            <button
                type="button"
                class="btn btn-primary fs-6 px-8 py-4"
                @click="loadMore()"
            >
                Cargar más
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        defineComponent,
        ref,
        computed,
        watch,
        reactive,
        onMounted
    } from 'vue'

    import { color } from '../../../helpers/config'
    import { KTableParams } from './k-table.types'

    import props from './k-table.props'
    import useColumn from './lib/columns'
    import useCheck from './lib/check'
    import useCollapse from './lib/collapse'

    import KTableDate from './slots/date.vue'
    import KTableImage from './slots/image.vue'
    import KTableStatus from './slots/status.vue'

    export default defineComponent({
        name: 'KTable',
        autoload: true,
        components: {
            KTableDate,
            KTableImage,
            KTableStatus
        },
        props: props,
        emits: ['fetch'],
        setup(props, ctx) {
            const hasSlot = (name: string) => !!ctx.slots[name]
            const { isRowOpen, toggleRow } = useCollapse(props)

            const params: KTableParams = reactive({
                page: 1,
                order: undefined,
                filter: undefined,
                reset: true
            })

            const { cols, colLength } = useColumn(props, ctx.slots)
            const {
                toggleCheck,
                isRowChecked,
                toggleGlobalCheck,
                populateChecks,
                isCheckedAll
            } = useCheck(props)

            const enable404 = ref(false)

            const busy = computed(() => {
                if (props.loading || props.data.length >= props.total) {
                    return true
                }

                return false
            })

            const loadMore = () => {
                if (isMore.value) {
                    params.page += 1
                    params.reset = false

                    ctx.emit('fetch', params)
                }
            }

            const data = computed(() => {
                return props.data
            })

            const isMore = computed(() => {
                return props.data.length < props.total
            })

            watch(data, populateChecks, { deep: true })

            populateChecks()

            onMounted(() => {
                enable404.value = true
                ctx.emit('fetch', params)
            })

            return {
                color,
                hasSlot,
                cols,
                fetch,
                colLength,
                toggleCheck,
                isRowChecked,
                toggleGlobalCheck,
                busy,
                enable404,
                isCheckedAll,
                isMore,
                loadMore,
                isRowOpen,
                toggleRow
            }
        }
    })
</script>

<style scoped></style>
