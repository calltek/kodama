<template>
    <popper arrow>
        <k-icon
            icon="calendar"
            :class="{ 'text-primary': defaultValue }"
            class="ml-2"
        />

        <template #content>
            <k-datepicker
                :min-date="min"
                :max-date="max"
                :time="false"
                :value="defaultValue"
                inline
                @change="filter"
            />
        </template>
    </popper>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType } from 'vue'
    import { moment } from '@/plugins'

    export default defineComponent({
        name: 'KTableFilterDate',
        props: {
            value: {
                type: Object as PropType<Record<string, any> | null>,
                default: null
            },
            min: {
                type: String,
                default: ''
            },
            max: {
                type: String,
                default: moment().format('YYYY-MM-DD')
            }
        },
        emits: ['filter'],
        setup(props, ctx) {
            const defaultValue = computed(() => {
                if (props.value && props.value.$gte && props.value.$lte) {
                    return [props.value.$gte, props.value.$lte]
                }

                return ''
            })

            const filter = (value: string[]) => {
                const data = {
                    $gte: `${value[0]} 00:00:00`,
                    $lte: `${value[1]} 23:59:59`
                }

                ctx.emit('filter', data)
            }

            return { filter, defaultValue }
        }
    })
</script>

<style scoped></style>
