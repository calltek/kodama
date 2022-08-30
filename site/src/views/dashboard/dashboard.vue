<template>
    <k-layout title="Dashboard" :icon="['fad', 'fa-tachometer-fast']">
        <template #topbar>
            <div class="d-flex align-items-center me-4">
                <a
                    class="btn btn-sm btn-outline btn-outline-primary btn-active-primary px-4 me-1"
                    :class="{ active: scope === 'B2B' }"
                    @click="scope = 'B2B'"
                >
                    B2B
                </a>

                <a
                    class="btn btn-sm btn-outline btn-outline-primary btn-active-primary px-4 me-1"
                    :class="{ active: scope === 'B2C' }"
                    @click="scope = 'B2C'"
                >
                    B2C
                </a>

                <a
                    class="btn btn-sm btn-outline btn-outline-primary btn-active-primary px-4"
                    :class="{ active: scope === 'ALL' }"
                    @click="scope = 'ALL'"
                >
                    TODO
                </a>
            </div>

            <k-daterange v-model="dates" class="me-4" />

            <k-button icon="rotate" title="Refrescar" light :loading="loading" color="primary" @click="fetch" />
        </template>

        <template #topbar-mobile>
            <k-button icon="rotate" title="Refrescar" light :loading="loading" color="primary" @click="fetch" />
        </template>

        <require-shop>
            <div class="row mb-4 d-flex d-lg-none">
                <div class="col-12 d-flex align-items-center justify-content-center mb-4">
                    <a
                        class="btn btn-sm btn-outline btn-outline-primary btn-active-primary px-4 me-2"
                        :class="{ active: scope === 'B2B' }"
                        @click="scope = 'B2B'"
                    >
                        B2B
                    </a>

                    <a
                        class="btn btn-sm btn-outline btn-outline-primary btn-active-primary px-4 me-2"
                        :class="{ active: scope === 'B2C' }"
                        @click="scope = 'B2C'"
                    >
                        B2C
                    </a>

                    <a
                        class="btn btn-sm btn-outline btn-outline-primary btn-active-primary px-4"
                        :class="{ active: scope === 'ALL' }"
                        @click="scope = 'ALL'"
                    >
                        TODO
                    </a>
                </div>

                <k-daterange v-model="dates" />
            </div>

            <div class="row g-6 g-xl-9 mb-9">
                <div class="col-md-6 col-xxl-6">
                    <k-loading :active="loading">
                        <stats
                            icon="cart-circle-check"
                            :compare="stats.compare[scope].total_orders"
                            :old-value="stats.past[scope].total_orders"
                        >
                            <template #title> Nº de pedidos </template>

                            <template #value>
                                {{ stats.current[scope].total_orders }}
                            </template>

                            <template #description> Cantidad de pedidos realizados </template>
                        </stats>
                    </k-loading>
                </div>

                <div class="col-md-6 col-xxl-6">
                    <k-loading :active="loading">
                        <stats
                            icon="circle-dollar"
                            :compare="stats.compare[scope].total_sales"
                            :old-value="$filters.float(stats.past[scope].total_sales)"
                            preffix="€"
                        >
                            <template #title> Ventas totales </template>

                            <template #value>
                                {{ $filters.float(stats.current[scope].total_sales) }}
                            </template>

                            <template #description> Beneficios brutos totales del periodo </template>
                        </stats>
                    </k-loading>
                </div>

                <div class="col-md-6 col-xxl-6">
                    <k-loading :active="loading">
                        <stats
                            icon="filter-circle-dollar"
                            :compare="stats.compare[scope].total_sales_net"
                            :old-value="$filters.float(stats.past[scope].total_sales_net)"
                            preffix="€"
                        >
                            <template #title> Benficios netos </template>

                            <template #value>
                                {{ $filters.float(stats.current[scope].total_sales_net) }}
                            </template>

                            <template #description> Beneficios netos totales del periodo </template>
                        </stats>
                    </k-loading>
                </div>

                <div class="col-md-6 col-xxl-6">
                    <k-loading :active="loading">
                        <stats
                            icon="scale-unbalanced-flip"
                            :compare="stats.compare[scope].average_order_price"
                            :old-value="$filters.float(stats.past[scope].average_order_price)"
                            preffix="€"
                        >
                            <template #title> Pedido medio </template>

                            <template #value>
                                {{ $filters.float(stats.current[scope].average_order_price) }}
                            </template>

                            <template #description> Valor medio de cada pedido realizado </template>
                        </stats>
                    </k-loading>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fw-bolder fs-3 mb-1"> Rentabilidad neta </span>

                                <span class="text-muted fw-bold fs-7"> Gráfico estadístico de rentabilidad neta </span>
                            </h3>

                            <div class="card-toolbar"></div>
                        </div>

                        <k-loading :active="loading" :height="350">
                            <div class="card-body">
                                <apexchart
                                    v-show="!isEmpty"
                                    type="area"
                                    :options="chartOptions"
                                    :series="activeScope"
                                    width="100%"
                                    height="500px"
                                ></apexchart>

                                <k-empty
                                    v-show="isEmpty && isLoaded"
                                    title="Sin resultados"
                                    :subtitle="`Actualmente no existen estadisticas disponibles para ${scope}`"
                                >
                                    <template #action>
                                        <k-button icon="rotate" light :loading="loading" color="primary" @click="fetch"
                                            >Volver a cargar</k-button
                                        >
                                    </template>
                                </k-empty>
                            </div>
                        </k-loading>
                    </div>
                </div>
            </div>
        </require-shop>
    </k-layout>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from 'vue'
    import {
        dates,
        cdates,
        chartOptions,
        loading,
        isLoaded,
        scope,
        chartSeriesB2B,
        chartSeriesB2C,
        chartSeriesALL,
        stats,
        activeScope,
        isEmpty,
    } from './_variables'

    import { fetch } from './_actions'
    import { useRouter } from '@kodama/ui'

    export default defineComponent({
        name: 'Dashboard',

        setup() {
            const router = useRouter()

            onMounted(() => {
                fetch()
            })

            setTimeout(() => {
                router.push('/agrupaciones')
            }, 3000)

            return {
                dates,
                chartOptions,
                loading,
                isLoaded,
                fetch,
                cdates,
                chartSeriesB2B,
                chartSeriesB2C,
                chartSeriesALL,
                scope,
                activeScope,
                isEmpty,
                stats,
            }
        },
    })
</script>

<style scoped></style>
