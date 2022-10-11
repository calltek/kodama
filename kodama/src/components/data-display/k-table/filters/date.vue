<template>
    <div ref="dropdown" class="dropdown d-inline-flex ms-2 position-absolute">
        <span
            class="cursor-pointer"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            :class="{ 'text-primary': defaultValue }"
        >
            <i class="fad fa-calendar" />
        </span>

        <!-- <ul >

        </ul> -->

        <div class="dropdown-menu p-0">
            <k-datepicker
                :minDate="min"
                :maxDate="max"
                :time="false"
                :value="defaultValue"
                @change="filter"
                inline
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType, ref } from 'vue'
    import { moment } from '../../../../plugins'
    import * as bootstrap from 'bootstrap'

    import KDatepicker from '../../../user-actions/k-datepicker/k-datepicker.vue'

    export default defineComponent({
        name: 'KTableFilterDate',
        components: { KDatepicker },
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
            const dropdown = ref('dropdown')

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

                const bs = new bootstrap.Dropdown(dropdown.value)
                bs.hide()

                ctx.emit('filter', data)
            }

            return { dropdown, filter, defaultValue }
        }
    })
</script>

<style scoped></style>
