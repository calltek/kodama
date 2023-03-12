<template>
    <k-dropdown tag="span">
        <k-icon
            icon="filter"
            :class="{ 'text-primary': active !== null }"
            class="ml-2 cursor-pointer"
        />

        <template #content>
            <k-dropdown-item @click="reset()">
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
