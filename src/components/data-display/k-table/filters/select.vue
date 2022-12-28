<template>
    <div ref="dropdown" class="dropdown d-inline-flex ms-2">
        <span
            class="cursor-pointer"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            :class="{ 'text-primary': active !== null }"
        >
            <i class="fad fa-filter" />
        </span>

        <ul class="dropdown-menu py-0 overflow-hidden">
            <li
                class="dropdown-item py-2 px-4 cursor-pointer opacity-40"
                @click="reset()"
            >
                <b><k-icon class="me-2" icon="list" /> Todo</b>
            </li>
            <li><hr class="dropdown-divider m-0" /></li>
            <li
                v-for="(o, i) in options"
                :key="i"
                class="dropdown-item py-2 px-4 cursor-pointer"
                :class="{ active: active === o.value }"
                @click="filter('$eq', o.value)"
            >
                <b>
                    <k-icon v-if="o.icon" class="me-2" :icon="o.icon" />
                    {{ o.title }}
                </b>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
    import { QueryFilterOperator } from '../../../../store/modules/query'
    import { KTableColumnFilter } from '../k-table.types'
    // import * as bootstrap from 'bootstrap'
    import KIcon from '../../k-icon/k-icon.vue'

    export default defineComponent({
        name: 'KTableFilterSelect',
        components: { KIcon },
        props: {
            options: {
                type: Object as PropType<KTableColumnFilter[]>,
                required: true
            },
            value: {
                type: Object as PropType<Record<string, any> | null>,
                default: null
            }
        },
        emits: ['filter'],
        setup(props, ctx) {
            const dropdown = ref('dropdown')

            const hideModal = () => {
                // const bs = new bootstrap.Dropdown(dropdown.value)
                // bs.hide()
            }

            const filter = (
                operator: QueryFilterOperator,
                value: KTableColumnFilter['value']
            ) => {
                hideModal()
                ctx.emit('filter', { [operator]: value })
            }

            const reset = () => {
                hideModal()
                ctx.emit('filter', null)
            }

            const active = computed(() => {
                if (props.value && props.value.$eq !== undefined) {
                    return props.value.$eq
                }

                return null
            })

            return { dropdown, filter, reset, active }
        }
    })
</script>

<style scoped></style>
