<template>
    <k-dropdown
        v-if="!modal"
        ref="tooltip"
        placement="bottom"
        :max-height="200"
        tag="span"
        hide-on-click
    >
        <div class="inline-block">
            <k-button
                size="sm"
                icon="filter"
                link
                :color="active !== null ? 'primary' : 'gray'"
            />
        </div>

        <template #content>
            <k-dropdown-menu @click="reset()">
                <k-icon class="mr-2" icon="list" /> Todo
            </k-dropdown-menu>
            <k-dropdown-menu
                v-for="(o, i) in options"
                :key="i"
                :selected="active === o.value"
                @click="filter('$eq', o.value)"
            >
                <k-icon v-if="o.icon" class="mr-2" :icon="o.icon" />
                {{ o.title }}
            </k-dropdown-menu>
        </template>
    </k-dropdown>
    <k-select
        v-else
        size="sm"
        :option="options"
        :close-on-select="true"
        track-by="value"
        label-by="title"
    >
        <!-- <k-select-option
            v-for="(o, i) in options"
            :key="i"
            :value="o.value"
            click="filter('$eq', o.value)"
        >
            <k-icon v-if="o.icon" class="mr-2" :icon="o.icon" />
            {{ o.title }}
        </k-select-option> -->

        <template #option="{ option }">
            <div @click="filter('$eq', option.value)">
                <k-icon v-if="option.icon" class="mr-2" :icon="option.icon" />
                {{ option.title }}asdasd
            </div>
        </template>
    </k-select>
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
            },
            modal: {
                type: Boolean,
                default: false
            }
        },
        emits: ['filter'],
        setup(props, ctx) {
            const tooltip = ref()

            const filter = (
                operator: string,
                value: KTableColumnFilter['value']
            ) => {
                ctx.emit('filter', { [operator]: value })
                tooltip.value?.hide()
            }

            const reset = () => {
                ctx.emit('filter', null)
                tooltip.value?.hide()
            }

            const active = computed(() => {
                if (props.value && props.value.$eq !== undefined) {
                    return props.value.$eq
                }

                return null
            })

            return { tooltip, filter, reset, active }
        }
    })
</script>

<style scoped></style>
