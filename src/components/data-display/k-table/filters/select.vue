<template>
    <k-dropdown>
        <k-icon
            icon="filter"
            :class="{ 'text-primary': active !== null }"
            class="ml-2"
        />

        <template #content>
            <k-dropdown-item>
                <k-icon class="mr-2" icon="list" /> Todo
            </k-dropdown-item>
            <k-dropdown-item
                v-for="(o, i) in options"
                :key="i"
                @click="filter('$eq', o.value)"
            >
                <k-icon v-if="o.icon" class="mr-2" :icon="o.icon" />
                {{ o.title }}
            </k-dropdown-item>
        </template>
    </k-dropdown>

    <!-- <ul class="py-0 overflow-hidden">
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
            </ul> -->
</template>

<script lang="ts">
    import { computed, defineComponent, PropType, ref } from 'vue'
    import { QueryFilterOperator } from '../../../../store/modules/query'
    import { KTableColumnFilter } from '../k-table.types'

    export default defineComponent({
        name: 'KTableFilterSelect',

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
