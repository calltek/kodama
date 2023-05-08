<template>
    <k-tooltip
        v-if="!modal"
        ref="tooltip"
        interactive
        trigger="click"
        theme="transparent"
        :arrow="false"
        hide-on-click
        placement="bottom"
        :max-width="400"
    >
        <div class="inline-block">
            <k-button
                size="sm"
                icon="calendar"
                link
                :color="defaultValue ? 'primary' : 'gray'"
            />
        </div>

        <template #content>
            <k-datepicker
                :min-date="min"
                :max-date="max"
                :range="true"
                :time="false"
                :clearable="true"
                :value="defaultValue"
                inline
                @change="filter"
            />
        </template>
    </k-tooltip>
    <k-datepicker
        v-else
        :min-date="min"
        :max-date="max"
        :range="true"
        :time="false"
        :clearable="true"
        :value="defaultValue"
        size="sm"
        @change="filter"
    />
</template>

<script lang="ts">
    import { computed, defineComponent, PropType, ref } from 'vue'
    import { dayjs } from '@/plugins'

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
                default: dayjs().format('YYYY-MM-DD')
            },
            modal: {
                type: Boolean,
                default: false
            }
        },
        emits: ['filter'],
        setup(props, ctx) {
            const tooltip = ref()

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
                tooltip.value?.hide()
            }

            return { filter, defaultValue, tooltip }
        }
    })
</script>

<style scoped></style>
