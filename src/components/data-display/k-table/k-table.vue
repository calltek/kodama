<template>
    <div class="card bg-transparent">
        <div
            v-if="header"
            class="card-header rounded-4"
            :class="clean ? 'p-0 mb-3' : 'bg-white mb-5 border-0 px-7'"
        >
            <slot name="header-left">
                <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bolder fs-3 mb-1">
                        <slot name="title" :selected="selected" :query="query">
                            Listados de stock
                        </slot>
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                        {{ total }} registros
                    </span>
                </h3>
            </slot>

            <div class="card-toolbar">
                <slot
                    name="header-right"
                    :selected="selected"
                    :query="query"
                ></slot>

                <k-button
                    icon="filter-slash"
                    color="light"
                    title="Limpiar filtros"
                    :loading="loading"
                    class="m-2"
                    @click="resetFilters"
                />

                <k-button
                    v-if="params.strict"
                    icon="object-intersect"
                    color="light"
                    title="Filtro estricto"
                    :loading="loading"
                    class="me-2"
                    @click="strict(false)"
                />
                <k-button
                    v-else
                    icon="object-union"
                    color="light"
                    title="Filtro flexible"
                    :loading="loading"
                    class="me-2"
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

        <template v-if="cards === true || (cards === 'auto' && isMobile)">
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
        </template>
        <div
            v-else
            class="card-body rounded-4 position-relative"
            :class="clean ? 'p-0' : 'bg-white px-7 py-4'"
        >
            <div class="table-responsive">
                <loading
                    :active="loading"
                    :can-cancel="false"
                    :is-full-page="false"
                    loader="bars"
                    color="#000"
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
                                class="text-uppercase"
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
                                            params.filter &&
                                            params.filter[col.index]
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
                                            params.filter &&
                                            params.filter[col.index]
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
                                            params.filter &&
                                            params.filter[col.index]
                                                ? params.filter[col.index]
                                                : null
                                        "
                                        @filter="filter(col.index, $event)"
                                    />
                                    <k-table-filter-text
                                        v-else-if="col.filter.type === 'text'"
                                        :value="
                                            params.filter &&
                                            params.filter[col.index]
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
                                            params.filter &&
                                            params.filter[col.index]
                                                ? params.filter[col.index]
                                                : null
                                        "
                                        @filter="filter(col.index, $event)"
                                    />
                                </template>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <template
                            v-for="(item, itemKey) in data"
                            :key="itemKey"
                        >
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

                                    <k-table-price
                                        v-else-if="col.makeup === 'price'"
                                        :value="item[col.index]"
                                    />

                                    <k-table-code
                                        v-else-if="col.makeup === 'code'"
                                        :value="item[col.index]"
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
                            <tr
                                v-if="hasSlot('content')"
                                v-show="isRowOpen[itemKey]"
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
                    </tbody>
                </table>
            </div>
        </div>

        <div v-if="isMore" class="card-footer text-center border-0">
            <k-table-limit
                :loading="loading"
                :value="params.limit"
                @limit="limit"
                @next-page="loadMore"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, watch, onMounted, computed } from 'vue'

    import 'vue-loading-overlay/dist/vue-loading.css'
    import Loading from 'vue-loading-overlay'

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

    import KButton from '../../user-actions/k-button/k-button.vue'
    import { useConfig } from '../../../store'

    export default defineComponent({
        name: 'KTable',
        autoload: true,
        components: {
            Loading,
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
            KTableFilterNumber,
            KButton
        },
        props: props,
        emits: ['fetch', 'filter'],
        setup(props, ctx) {
            const hasSlot = (name: string) => !!ctx.slots[name]
            const config = useConfig()

            const { isRowOpen, toggleRow } = useCollapse(props)
            const { cols, colLength } = useColumn(props, ctx.slots)
            const {
                toggleCheck,
                isRowChecked,
                toggleGlobalCheck,
                populateChecks,
                isCheckedAll
            } = useCheck(props)
            const { isMore, loadMore, busy, data, refresh } = useFetch(
                ctx,
                props
            )
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

            populateChecks()
            loadStoreParams()

            const isMobile = computed(() => {
                const isMobileView = config.get('isMobileView', false)
                const isTabletView = config.get('isTabletView', false)

                if (isMobileView || isTabletView) return true
                return false
            })

            onMounted(() => {
                enable404.value = true
                ctx.emit('fetch', query.value)
            })

            return {
                hasSlot,
                cols,
                refresh,
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
                toggleRow,
                params,
                loadStoreParams,
                order,
                limit,
                filter,
                resetFilters,
                strict,
                query,
                isMobile
            }
        }
    })
</script>

<style scoped></style>
