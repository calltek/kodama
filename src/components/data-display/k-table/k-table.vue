<template>
    <div
        :id="id"
        class="k-table"
        :class="{
            'k-table-infinite': pagination === 'infinite'
        }"
    >
        <div
            v-if="header"
            class="k-table-header"
            :class="{ 'k-table-header-clean': clean }"
        >
            <slot name="header-left">
                <h3 class="k-table-header-left">
                    <k-title :size="5" bold>
                        <slot name="title" :selected="selected" :query="query">
                            Listado
                        </slot>

                        <template #subtitle>
                            <slot
                                name="subtitle"
                                :selected="selected"
                                :query="query"
                            >
                                <span class="whitespace-nowrap font-normal">
                                    {{ total }} registros
                                </span>
                            </slot>
                        </template>
                    </k-title>
                </h3>
            </slot>

            <div class="k-table-header-toolbar">
                <slot
                    name="header-right"
                    :selected="selected"
                    :query="query"
                ></slot>

                <div class="mx-2" />

                <k-button
                    v-if="cardMode"
                    icon="filter"
                    :color="query.filter ? 'primary' : 'gray'"
                    title="Filtrar"
                    :loading="loading"
                    class="mr-2"
                    @click="modalOpened = true"
                />

                <k-button
                    v-else
                    icon="filter-slash"
                    color="gray"
                    title="Limpiar filtros"
                    :loading="loading"
                    class="mr-2"
                    @click="resetFilters"
                />

                <k-button
                    v-if="params.strict"
                    icon="object-intersect"
                    color="gray"
                    title="Filtro estricto"
                    :loading="loading"
                    class="mr-2"
                    @click="strict(false)"
                />
                <k-button
                    v-else
                    icon="object-union"
                    color="gray"
                    title="Filtro flexible"
                    :loading="loading"
                    class="mr-2"
                    @click="strict(true)"
                />

                <k-button
                    icon="rotate"
                    color="primary"
                    light
                    title="Refrescar"
                    :loading="loading"
                    @click="refresh"
                />
            </div>
        </div>

        <template v-if="cardMode">
            <component :is="cardTag" :class="cardClasses">
                <template v-for="(item, itemKey) in data" :key="itemKey">
                    <slot
                        name="card"
                        v-bind="{
                            row: item,
                            query: query,
                            index: itemKey
                        }"
                    ></slot>
                </template>
            </component>
        </template>
        <div
            v-else
            class="k-table-body"
            :class="{ 'k-table-body-clean': clean }"
        >
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

            <div class="k-table-content">
                <div class="k-table-tr k-table-head">
                    <div v-if="selected" class="k-table-td">
                        <input
                            type="checkbox"
                            class="k-checkbox w-4 h-4 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-primary focus:ring-primary dark:focus:ring-primary"
                            :checked="isCheckedAll"
                            @change="toggleGlobalCheck"
                        />
                    </div>

                    <div
                        v-for="(col, key) in cols"
                        :key="key"
                        :style="col.style"
                        class="k-table-td"
                    >
                        <k-table-order
                            v-if="col.order && col.index"
                            :value="
                                params.order
                                    ? params.order[col.index] || null
                                    : null
                            "
                            class="-mr-3"
                            @order="order(col.index, $event)"
                        >
                            {{ col.title }}
                        </k-table-order>
                        <template v-else>
                            {{ col.title }}
                        </template>

                        <template v-if="col.filter && col.index">
                            <k-table-filter-select
                                v-if="
                                    col.filter.type === 'select' &&
                                    col.filter.options.length > 0
                                "
                                :options="col.filter.options"
                                :value="
                                    params.filter && params.filter[col.index]
                                        ? params.filter[col.index]
                                        : null
                                "
                                @filter="filter(col.index, $event)"
                            />
                            <k-table-filter-date
                                v-else-if="col.filter.type === 'date'"
                                :min="col.filter.min"
                                :max="col.filter.max"
                                :value="
                                    params.filter && params.filter[col.index]
                                        ? params.filter[col.index]
                                        : null
                                "
                                @filter="filter(col.index, $event)"
                            />
                            <k-table-filter-range
                                v-else-if="col.filter.type === 'range'"
                                :min="col.filter.min"
                                :max="col.filter.max"
                                :value="
                                    params.filter && params.filter[col.index]
                                        ? params.filter[col.index]
                                        : null
                                "
                                @filter="filter(col.index, $event)"
                            />
                            <k-table-filter-text
                                v-else-if="col.filter.type === 'text'"
                                :value="
                                    params.filter && params.filter[col.index]
                                        ? params.filter[col.index]
                                        : null
                                "
                                @filter="filter(col.index, $event)"
                            />
                            <k-table-filter-number
                                v-else-if="col.filter.type === 'number'"
                                :min="col.filter.min"
                                :max="col.filter.max"
                                :value="
                                    params.filter && params.filter[col.index]
                                        ? params.filter[col.index]
                                        : null
                                "
                                @filter="filter(col.index, $event)"
                            />
                        </template>
                    </div>
                </div>

                <template v-for="(item, itemKey) in data" :key="itemKey">
                    <div class="k-table-tr">
                        <div v-if="selected" class="k-table-td w-6">
                            <div>
                                <input
                                    type="checkbox"
                                    class="k-checkbox w-4 h-4 -mt-1 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-primary focus:ring-primary dark:focus:ring-primary"
                                    :checked="isRowChecked[itemKey]"
                                    :disabled="isRowDisabled[itemKey]"
                                    @change="toggleCheck(itemKey)"
                                />
                            </div>
                        </div>

                        <div
                            v-for="(col, colKey) in cols"
                            :key="colKey"
                            :style="col.style"
                            class="k-table-td"
                        >
                            <k-table-date
                                v-if="col.makeup === 'date'"
                                :value="item[col.index]"
                                :class="{ 'cursor-pointer': col.url }"
                                @click="goToUrl(col, item)"
                            />

                            <k-table-image
                                v-else-if="col.makeup === 'image'"
                                :value="item[col.index]"
                            />

                            <k-table-status
                                v-else-if="col.makeup === 'status'"
                                :value="item[col.index]"
                                :class="{ 'cursor-pointer': col.url }"
                                @click="goToUrl(col, item)"
                            />

                            <k-table-price
                                v-else-if="col.makeup === 'price'"
                                :value="item[col.index]"
                                :class="{ 'cursor-pointer': col.url }"
                                @click="goToUrl(col, item)"
                            />

                            <k-table-code
                                v-else-if="col.makeup === 'code'"
                                :value="item[col.index]"
                                :class="{ 'cursor-pointer': col.url }"
                                @click="goToUrl(col, item)"
                            />

                            <!-- @slot Slots personalizados -->
                            <slot
                                v-else-if="col.slot"
                                :name="col.slot"
                                v-bind="{
                                    row: item,
                                    value: item[col.index],
                                    query: query,
                                    index: itemKey
                                }"
                            />

                            <div v-else>
                                <span
                                    :class="{ 'cursor-pointer': col.url }"
                                    @click="goToUrl(col, item)"
                                >
                                    {{ item[col.index] }}
                                </span>
                            </div>
                        </div>

                        <div
                            v-if="hasSlot('content')"
                            class="k-table-td"
                            align="right"
                        >
                            <a
                                class="btn btn-icon btn-gray-300 cursor-pointer"
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
                        </div>
                    </div>
                    <tr
                        v-if="hasSlot('content')"
                        v-show="isRowOpen[itemKey]"
                        class="k-table-tr"
                    >
                        <td :colspan="colLength">
                            <!--
                                @slot Contenido adicional de la fila
                                @mock Click me
                            -->
                            <slot
                                name="content"
                                :row="item"
                                :query="query"
                                :index="itemKey"
                            />
                        </td>
                    </tr>
                </template>
            </div>

            <div
                v-if="enable404 && !loading && data.length <= 0"
                class="k-table-404"
            >
                <k-icon icon="binary-slash" type="fad" class="mb-6 text-6xl" />

                <k-title tag="h3" :size="4" bold center class="text-gray-600">
                    Sin resultados
                </k-title>

                <k-title tag="h4" :size="6" center class="text-gray-600">
                    Prueba con una consulta diferente
                </k-title>
            </div>
        </div>

        <div v-if="isMore" class="card-footer text-center border-0 mt-8">
            <k-table-limit
                :loading="loading"
                :value="params.limit"
                :type="pagination"
                :page="params.page"
                :total="total"
                @limit="limit"
                @load-more="loadMore(false)"
                @next="loadMore(true)"
                @prev="loadLess(true)"
            />
        </div>

        <k-drawer v-model="modalOpened" title="Filtros" :width="400">
            <template #footer>
                <div class="ml-auto"></div>
                <k-button
                    icon="filter-slash"
                    color="danger"
                    class="mr-2"
                    @click="resetAndClose"
                >
                    Resetear
                </k-button>
                <k-button
                    icon="filter"
                    color="primary"
                    @click="modalOpened = false"
                >
                    Guardar
                </k-button>
            </template>

            <div class="flex flex-col -m-5">
                <template v-for="(col, key) in cols" :key="key">
                    <div
                        v-if="col.order || col.filter"
                        class="text-base border-b border-b-gray-100 dark:border-b-gray-700 last:border-0 uppercase font-bold p-5 flex flex-row justify-between items-center"
                    >
                        <k-table-order
                            v-if="col.order && col.index"
                            :value="
                                params.order
                                    ? params.order[col.index] || null
                                    : null
                            "
                            @order="order(col.index, $event)"
                        >
                            {{ col.title }}
                        </k-table-order>
                        <template v-else>
                            {{ col.title }}
                        </template>

                        <template v-if="col.filter && col.index">
                            <k-table-filter-select
                                v-if="
                                    col.filter.type === 'select' &&
                                    col.filter.options.length > 0
                                "
                                :options="col.filter.options"
                                :value="
                                    params.filter && params.filter[col.index]
                                        ? params.filter[col.index]
                                        : null
                                "
                                modal
                                @filter="filter(col.index, $event)"
                            />
                            <k-table-filter-date
                                v-else-if="col.filter.type === 'date'"
                                :min="col.filter.min"
                                :max="col.filter.max"
                                :value="
                                    params.filter && params.filter[col.index]
                                        ? params.filter[col.index]
                                        : null
                                "
                                modal
                                @filter="filter(col.index, $event)"
                            />
                            <k-table-filter-range
                                v-else-if="col.filter.type === 'range'"
                                :min="col.filter.min"
                                :max="col.filter.max"
                                :value="
                                    params.filter && params.filter[col.index]
                                        ? params.filter[col.index]
                                        : null
                                "
                                modal
                                @filter="filter(col.index, $event)"
                            />
                            <k-table-filter-text
                                v-else-if="col.filter.type === 'text'"
                                :value="
                                    params.filter && params.filter[col.index]
                                        ? params.filter[col.index]
                                        : null
                                "
                                modal
                                @filter="filter(col.index, $event)"
                            />
                            <k-table-filter-number
                                v-else-if="col.filter.type === 'number'"
                                :min="col.filter.min"
                                :max="col.filter.max"
                                :value="
                                    params.filter && params.filter[col.index]
                                        ? params.filter[col.index]
                                        : null
                                "
                                modal
                                @filter="filter(col.index, $event)"
                            />
                        </template>
                    </div>
                </template>
            </div>
        </k-drawer>
    </div>
</template>

<script lang="ts">
    import {
        defineComponent,
        watch,
        onMounted,
        computed,
        ref,
        onUnmounted
    } from 'vue'
    import { emitter } from '@/plugins'

    import props from './k-table.props'
    import useColumn from './lib/columns'
    import useCheck from './lib/check'
    import useCollapse from './lib/collapse'
    import useFetch, { enable404 } from './lib/fetch'
    import useFilter, { params } from './lib/filter'

    import KTableDate from './slots/date.vue'
    import KTableImage from './slots/image.vue'
    import KTableStatus from './slots/status.vue'
    import KTablePrice from './slots/price.vue'
    import KTableCode from './slots/code.vue'

    import KTableOrder from './filters/order.vue'
    import KTableLimit from './filters/limit.vue'
    import KTableFilterSelect from './filters/select.vue'
    import KTableFilterDate from './filters/date.vue'
    import KTableFilterRange from './filters/range.vue'
    import KTableFilterText from './filters/text.vue'
    import KTableFilterNumber from './filters/number.vue'

    import { useConfig } from '../../../store'
    import { uid } from '@/helpers/utils'
    import { useRouter } from 'vue-router'

    export default defineComponent({
        name: 'KTable',
        autoload: true,
        components: {
            KTableDate,
            KTableImage,
            KTableStatus,
            KTablePrice,
            KTableCode,
            KTableOrder,
            KTableLimit,
            KTableFilterSelect,
            KTableFilterDate,
            KTableFilterRange,
            KTableFilterText,
            KTableFilterNumber
        },
        props: props,
        emits: ['fetch', 'filter'],
        setup(props, ctx) {
            const hasSlot = (name: string) => !!ctx.slots[name]
            const id = uid()
            const config = useConfig()
            const router = useRouter()

            const modalOpened = ref(false)
            const { isRowOpen, toggleRow } = useCollapse(props)
            const { cols, colLength } = useColumn(props, ctx.slots)
            const {
                toggleCheck,
                isRowChecked,
                isRowDisabled,
                toggleGlobalCheck,
                populateChecks,
                uncheckDisabledRows,
                isCheckedAll
            } = useCheck(props)
            const { isMore, loadMore, loadLess, busy, data, refresh } =
                useFetch(ctx, props)
            const {
                order,
                loadStoreParams,
                limit,
                filter,
                query,
                resetFilters,
                strict
            } = useFilter(ctx, props)

            // Create checks when data its modified
            watch(data, populateChecks, { deep: true })

            // Remove selected checks id disabledRows changes
            watch(isRowDisabled, uncheckDisabledRows, { deep: true })

            populateChecks()
            loadStoreParams()

            const isMobile = computed(() => {
                const isMobileView = config.get('isMobileView', false)
                const isTabletView = config.get('isTabletView', false)

                if (isMobileView || isTabletView) return true
                return false
            })

            const cardMode = computed(() => {
                return (
                    props.card === true ||
                    (props.card === 'auto' && isMobile.value)
                )
            })

            const resetAndClose = () => {
                resetFilters()
                modalOpened.value = false
            }

            const goToUrl = (col: any, item: any) => {
                if (col.url) {
                    router.push({
                        name: col.url.name,
                        params: { id: item[col.url.id] }
                    })
                }
            }

            onMounted(() => {
                enable404.value = true
                ctx.emit('fetch', query.value)

                emitter.on(`ktable_${props.store}_fetch`, () => {
                    ctx.emit('fetch', query.value)
                })

                emitter.on(`ktable_${props.store}_next`, () => {
                    if (props.pagination === 'infinite') {
                        loadMore(false)
                    } else {
                        loadMore(true)
                    }
                })

                emitter.on(`ktable_${props.store}_prev`, () => {
                    if (props.pagination === 'infinite') {
                        loadLess(false)
                    } else {
                        loadLess(true)
                    }
                })
            })

            onUnmounted(() => {
                emitter.off(`ktable_${props.store}_fetch`)
                emitter.off(`ktable_${props.store}_next`)
                emitter.off(`ktable_${props.store}_prev`)
            })

            return {
                hasSlot,
                cols,
                id,
                refresh,
                colLength,
                toggleCheck,
                isRowChecked,
                isRowDisabled,
                toggleGlobalCheck,
                busy,
                enable404,
                isCheckedAll,
                isMore,
                loadMore,
                loadLess,
                isRowOpen,
                toggleRow,
                params,
                loadStoreParams,
                order,
                limit,
                filter,
                resetFilters,
                strict,
                query,
                isMobile,
                modalOpened,
                cardMode,
                resetAndClose,
                goToUrl
            }
        }
    })
</script>

<style lang="scss" scoped>
    .k-table {
        @apply w-full flex flex-col;

        .k-table-header {
            @apply px-4 py-2 mb-5 flex flex-row rounded-xl bg-white dark:bg-gray-800 select-none;

            // CLEAN MODE
            &.k-table-header-clean {
                @apply p-0 mb-3;
            }

            .k-table-header-left {
                @apply flex flex-col items-start dark:text-white;
            }

            .k-table-header-toolbar {
                @apply flex flex-row items-center justify-end w-full;
            }
        }

        .k-table-body {
            @apply rounded-xl bg-white dark:bg-gray-800 px-4 pb-2 pt-0 relative overflow-x-auto;

            // CLEAN MODE
            &.k-table-body-clean {
                @apply p-0 h-auto min-h-max;
            }

            .k-table-content {
                @apply text-gray-900 border-0 dark:text-white text-left table box-border w-full;

                .k-table-tr {
                    @apply table-row;

                    .k-table-td {
                        @apply p-2 table-cell align-middle;
                    }
                }

                .k-table-tr.k-table-head {
                    @apply sticky top-0 left-0 bg-white dark:bg-gray-800 z-10 select-none;

                    .k-table-td {
                        @apply text-gray-500 uppercase font-semibold text-sm whitespace-nowrap px-2 py-3;
                    }
                }
            }

            .k-table-404 {
                @apply flex w-full flex-col items-center justify-center p-8;
            }

            &::-webkit-scrollbar {
                @apply w-2 h-2;
            }

            &::-webkit-scrollbar-corner {
                background: rgba(0, 0, 0, 0);
            }
        }
    }

    // .k-table.k-table-infinite {
    //     @apply h-full;

    //     .k-table-body {
    //         @apply overflow-auto h-0 min-h-0 flex-auto;
    //     }
    // }
</style>
