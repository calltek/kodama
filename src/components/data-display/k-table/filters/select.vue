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
                :color="active && active.length > 0 ? 'primary' : 'gray'"
            />
        </div>

        <template #content>
            <k-dropdown-menu @click="reset()">
                <k-icon class="mr-2" icon="list" /> Todo
            </k-dropdown-menu>
            <k-dropdown-menu
                v-for="(o, i) in options"
                :key="i"
                :selected="active && active.includes(o.value)"
                @click.stop="toggleFilter(o.value)"
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
        :close-on-select="false"
        track-by="value"
        label-by="title"
    >
        <template #option="{ option }">
            <div @click.stop="toggleFilter(option.value)">
                <k-icon v-if="option.icon" class="mr-2" :icon="option.icon" />
                {{ option.title }}
            </div>
        </template>
    </k-select>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType, ref } from 'vue'
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
                values: KTableColumnFilter['value']
            ) => {
                ctx.emit('filter', { [operator]: values })
                // tooltip.value?.hide()
            }

            const reset = () => {
                ctx.emit('filter', null)
                tooltip.value?.hide()
            }
            const parseValue = (rawVal: string) => {
                const found = props.options.find(
                    (opt) => String(opt.value) === rawVal.trim()
                )
                return found?.value ?? rawVal.trim()
            }

            const active = computed(() => {
                const raw = props.value?.$in
                if (typeof raw === 'string') {
                    return raw
                        .split(',')
                        .map((v) => v.trim())
                        .filter((v) => v !== '')
                        .map(parseValue)
                }
                return []
            })

            const toggleFilter = (value: KTableColumnFilter['value']) => {
                const current = [...active.value]
                const index = current.indexOf(value)

                if (index === -1) {
                    current.push(value)
                } else {
                    current.splice(index, 1)
                }

                const result = current.map((v) => String(v)).join(',')
                filter('$in', result)
            }

            return { tooltip, filter, reset, active, toggleFilter }
        }
    })
</script>

<style scoped></style>
