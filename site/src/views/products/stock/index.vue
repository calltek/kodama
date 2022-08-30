<template>
    <k-layout title="Listado de stocks" :icon="['fad', 'fa-pallet-boxes']" :breads="true">
        <!-- <template #topbar>
            <div class="d-flex align-items-stretch overflow-auto pt-3 pt-lg-0">
                <div class="d-flex align-items-center">
                    <router-link :to="{ name: 'groupingForm' }">
                        <k-button icon-left="layer-plus">
                            Nueva agrupación
                        </k-button>
                    </router-link>
                </div>
            </div>
        </template> -->

        <!-- <template #topbar-mobile>
            <router-link :to="{ name: 'groupingForm' }">
                <k-button icon="layer-plus" title="Nueva agrupación"
            /></router-link>
        </template> -->
        <require-shop only-one>
            <div class="card">
                <div class="card-header border-0 pt-5">
                    <h3 class="card-title align-items-start flex-column">
                        <span class="card-label fw-bolder fs-3 mb-1"> Listados de stock </span>

                        <span class="text-muted mt-1 fw-bold fs-7"> {{ total }} registros </span>
                    </h3>
                    <div class="card-toolbar">
                        <k-button
                            icon="rotate"
                            title="Refrescar"
                            light
                            :loading="loading"
                            color="primary"
                            @click="fetch({ page: 1, reset: true })"
                        />
                    </div>
                </div>

                <div class="card-body pt-3">
                    <k-table :columns="tableColumns" :data="data" :total="total" :loading="loading" @fetch="fetch">
                        <template #reference="{ value }">
                            <k-badge size="lg">
                                <k-icon icon="qrcode" class="me-1" />
                                {{ value }}
                            </k-badge>
                        </template>

                        <template #stock="{ value }">
                            <k-badge circle :color="getStockColor(value)">
                                {{ value }}
                            </k-badge>
                        </template>

                        <template #content="parent">
                            <k-table
                                :columns="tableColumnsAttrs"
                                :data="parent.row.attributes"
                                :total="parent.row.attributes.length"
                                :height="10"
                            >
                                <template #image>
                                    <k-image :src="parent.row.image" zoom :height="20" />
                                </template>

                                <template #name="{ row }"> {{ row.type }} {{ row.name }} </template>

                                <template #status="{ value }">
                                    <k-badge size="sm" :color="value ? 'danger' : 'success'" class="ml-2">
                                        <k-icon :icon="value ? 'times' : 'check'" class="me-1" />
                                        {{ value ? 'Inactivo' : 'Activo' }}
                                    </k-badge>
                                </template>

                                <template #stock="{ value }">
                                    <k-badge circle :color="getStockColor(value)">
                                        {{ value }}
                                    </k-badge>
                                </template>
                            </k-table>
                        </template>
                    </k-table>
                </div>
            </div>
        </require-shop>
    </k-layout>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import { loading, tableColumns, tableColumnsAttrs, data, total } from './_variables'
    import { fetch, getStockColor } from './_actions'

    export default defineComponent({
        name: 'ProductStock',
        setup() {
            // onMounted(() => {
            //     fetch({ page: 1 })
            // })

            return {
                loading,
                tableColumns,
                tableColumnsAttrs,
                data,
                total,
                fetch,
                getStockColor,
            }
        },
    })
</script>

<style scoped></style>
