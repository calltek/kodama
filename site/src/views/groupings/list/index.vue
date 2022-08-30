<template>
    <k-layout title="Listado de agrupaciones" :icon="['fad', 'fa-pallet-boxes']" :breads="true">
        <template #topbar>
            <div class="d-flex align-items-stretch overflow-auto pt-3 pt-lg-0">
                <div class="d-flex align-items-center">
                    <router-link :to="{ name: 'groupingForm' }">
                        <k-button icon-left="layer-plus"> Nueva agrupación </k-button>
                    </router-link>
                </div>
            </div>
        </template>

        <template #topbar-mobile>
            <router-link :to="{ name: 'groupingForm' }">
                <k-button icon="layer-plus" title="Nueva agrupación"
            /></router-link>
        </template>

        <div class="card">
            <div class="card-header border-0 pt-5">
                <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bolder fs-3 mb-1">Últimas agrupaciones</span>

                    <span class="text-muted mt-1 fw-bold fs-7">{{ total }} registros</span>
                </h3>
                <div class="card-toolbar">
                    <k-button
                        icon="rotate"
                        title="Refrescar"
                        light
                        :loading="loading.listing"
                        color="primary"
                        @click="list({ page: 1 })"
                    />
                </div>
            </div>

            <div class="card-body pt-3">
                <k-table
                    index="id"
                    :selected="selected"
                    :columns="tableColumns"
                    :data="data"
                    :total="total"
                    :loading="loading.listing"
                    @fetch="list"
                >
                    <template #employee="{ value }">
                        <k-avatar :name="`${value.firstname} ${value.lastname}`" :size="40" />
                    </template>

                    <template #actions="{ row }">
                        <div class="d-flex justify-content-end">
                            <k-dropdown class="me-2" :disabled="loading.exporting">
                                <k-button icon="grid" color="primary" light :loading="loading.exporting" />

                                <template #menu>
                                    <k-dropdown-title icon="file-excel" title="Excel" />

                                    <k-dropdown-menu
                                        title="Agrupación General"
                                        @click="downloadDoc(row.id, 'generalgrouping', 'Agrupacion General.xlsx')"
                                    />

                                    <k-dropdown-menu
                                        title="Detalle de cliente"
                                        @click="downloadDoc(row.id, 'clientdetail', 'Detalle Cliente.xlsx')"
                                    />

                                    <k-dropdown-submenu title="Detalle de producto">
                                        <template #menu>
                                            <k-dropdown-menu
                                                title="General"
                                                @click="downloadDoc(row.id, 'productdetail', 'Detalle Producto.xlsx')"
                                            />
                                            <k-dropdown-menu
                                                title="Tallas"
                                                @click="
                                                    downloadDoc(
                                                        row.id,
                                                        'productsizedetail',
                                                        'Detalle Producto Tallas.xlsx'
                                                    )
                                                "
                                            />
                                        </template>
                                    </k-dropdown-submenu>

                                    <k-dropdown-separator />

                                    <k-dropdown-title icon="file-pdf" title="PDF" />

                                    <k-dropdown-menu
                                        title="Fichas técnicas"
                                        @click="downloadDoc(row.id, 'imagetech', 'Fichas Técnicas.pdf')"
                                    />

                                    <k-dropdown-separator />

                                    <k-dropdown-menu @click="renderDocs(row.id)">
                                        <div class="d-flex w-100 align-items-center justify-content-between">
                                            <span>Regenerar documentos</span>

                                            <k-help>
                                                Este proceso regenera todos los documentos de la agrupación
                                                seleccionada. El proceso puede tardar un rato en completarse.
                                            </k-help>
                                        </div>
                                    </k-dropdown-menu>
                                </template>
                            </k-dropdown>

                            <tippy content="Eliminar agrupación" placement="left">
                                <k-confirm @ok="removeGrouping(row.id)">
                                    <k-button icon="trash-can" color="danger" :loading="loading.deleting" />
                                </k-confirm>
                            </tippy>
                        </div>
                    </template>
                </k-table>
            </div>
        </div>
    </k-layout>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { selected, loading, data, total, tableColumns } from './_variables'
    import { downloadDoc, list, renderDocs, removeGrouping } from './_actions'

    export default defineComponent({
        name: 'GroupingList',
        setup() {
            return {
                data,
                total,
                selected,
                loading,
                tableColumns,
                downloadDoc,
                renderDocs,
                list,
                removeGrouping,
            }
        },
    })
</script>

<style scoped></style>
