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
                :selected="isActive(o.value)"
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
                type: Object as PropType<Record<string, string | number | boolean | (string | number | boolean)[]> | null>,
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
                values: string | number | boolean | (string | number | boolean)[] | null
            ) => {
                ctx.emit('filter', values === null ? null : { [operator]: values })
            }

            const reset = () => {
                ctx.emit('filter', null)
                tooltip.value?.hide()
            }

            const normalizeValue = (val: unknown): string | number | boolean => {
                if (typeof val === 'string') {
                    const trimmed = val.trim()
                    if (trimmed === 'true') return true
                    if (trimmed === 'false') return false
                    const num = Number(trimmed)
                    if (!isNaN(num) && trimmed !== '') return num
                    return trimmed
                }
                return val as string | number | boolean
            }

            const valuesMatch = (a: unknown, b: unknown): boolean => {
                const normA = normalizeValue(a)
                const normB = normalizeValue(b)
                return normA === normB
            }

            const active = computed(() => {
                const raw = props.value?.$in
                let rawValues: unknown[] = []
                
                if (typeof raw === 'string') {
                    rawValues = raw
                        .split(',')
                        .map((v) => v.trim())
                        .filter((v) => v !== '')
                } else if (Array.isArray(raw)) {
                    rawValues = raw
                } else if (raw !== undefined && raw !== null) {
                    rawValues = [raw]
                }

                return rawValues
                    .map((rawVal) => {
                        const found = props.options.find(opt => valuesMatch(opt.value, rawVal))
                        return found?.value
                    })
                    .filter((v): v is string | number | boolean => v !== undefined)
            })

            const isActive = (value: KTableColumnFilter['value']): boolean => {
                return active.value.some((v) => valuesMatch(v, value))
            }

            const toggleFilter = (value: KTableColumnFilter['value']) => {
                const current = [...active.value]
                const index = current.findIndex((v) => valuesMatch(v, value))

                if (index === -1) {
                    current.push(value)
                } else {
                    current.splice(index, 1)
                }

                if (current.length === 0) {
                    filter('$in', null)
                    return
                }

                const normalizedValues = current.map(v => normalizeValue(v))

                if (normalizedValues.length === 1) {
                    filter('$in', normalizedValues[0])
                    return
                }

                filter('$in', normalizedValues)
            }

            return { tooltip, filter, reset, active, isActive, toggleFilter }
        }
    })
</script>

