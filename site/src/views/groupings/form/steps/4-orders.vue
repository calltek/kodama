<template>
    <div class="w-100">
        <div class="pb-10 pb-lg-15">
            <div
                class="d-flex flex-row justify-content-between align-items-center"
            >
                <div>
                    <h2 class="fw-bolder d-flex align-items-center text-dark">
                        Listado de pedidos
                    </h2>
                    <div class="text-gray-400 fw-bold fs-6">
                        Selecciona todas las lineas de pedido que necesites para
                        la agrupación.
                    </div>
                </div>
                <div>
                    <k-button
                        icon="rotate"
                        light
                        title="Refrescar"
                        :loading="loading"
                        color="primary"
                        @click="fetchLineItems(dates[0], dates[1])"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                {{ selectedShops.length }}
                <k-table
                    :selected="productsSelected"
                    :columns="tableColumns"
                    :data="data"
                    :total="total"
                    :loading="loading"
                    class="bg-white p-4 rounded-4"
                    @fetch="fetchLineItems(dates[0], dates[1])"
                >
                    <template #content="{ row, index }">
                        <div class="p-4 bg-lighten ms-n4 me-n4 my-n3">
                            <div v-if="row && row.multiple">
                                <div v-for="(a, i) in row.attributes" :key="i">
                                    <k-title
                                        :size="4"
                                        uppercase
                                        bold
                                        class="mt-4"
                                    >
                                        {{ a.type }} {{ a.name }}
                                    </k-title>

                                    <k-table
                                        :columns="tableColumnsChildren"
                                        :data="a.orders"
                                        :selected="
                                            attributesSelected[row.id][a.id]
                                        "
                                        :height="0"
                                    >
                                        <template #client="{ row }">
                                            {{ row.client_name }}
                                            {{ row.client_lastname }} <br />
                                            <small>
                                                <k-icon
                                                    :icon="['fad', 'envelope']"
                                                    class="me-1"
                                                />{{ row.client_email }}
                                            </small>
                                        </template>
                                    </k-table>
                                </div>
                            </div>
                            <div v-else>
                                <k-table
                                    v-if="row"
                                    :columns="tableColumnsChildren"
                                    :data="row.orders"
                                />
                            </div>
                        </div>
                    </template>

                    <template #image="{ value }">
                        <!-- <img class="rounded-lg w-10 h-10 object-contain image-fit bg-white zoom-in shadow-none" data-action="zoom" :src="value" /> -->

                        <div class="symbol symbol-45px">
                            <img :src="value" />
                        </div>
                    </template>
                </k-table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, watch, computed } from 'vue'

    import {
        onProductSelected,
        onAttributeSelected,
        fetchLineItems
    } from './_actions'

    import {
        productsSelected,
        attributesSelected,
        data,
        total,
        loading,
        tableColumns,
        tableColumnsChildren
    } from './_variables'

    import { useShop } from '../../../../store'

    export default defineComponent({
        name: 'Step4Orders',
        props: {
            dates: {
                type: Object as () => [string, string],
                required: true
            },
            selected: {
                type: Array,
                required: true
            }
        },
        emits: ['update:selected'],
        setup(props, ctx) {
            const shop = useShop()

            const selectedShops = computed(() => {
                return shop.selected.length
            })

            watch(productsSelected, onProductSelected)

            watch(
                attributesSelected,
                () => {
                    const order_lines = onAttributeSelected()
                    ctx.emit('update:selected', order_lines)
                },
                {
                    deep: true
                }
            )

            const resetLineItems = () => {
                data.value = []
                fetchLineItems(props.dates[0], props.dates[1])
            }

            watch(props.dates, () => {
                resetLineItems()
            })

            watch(selectedShops, () => {
                resetLineItems()
            })

            return {
                productsSelected,
                attributesSelected,
                tableColumns,
                data,
                total,
                loading,
                tableColumnsChildren,
                fetchLineItems,
                selectedShops
            }
        }
    })
</script>

<style scoped></style>
