<template>
    <k-badge size="xs" color="primary">
        <k-tooltip :content="tippyText">
            <div class="flex flex-row items-center">
                <k-icon
                    icon="clock"
                    :class="simple ? 'text-xs mr-2' : 'text-xl mr-4'"
                />

                <template v-if="value">
                    <div v-if="isMultiple" class="text-left flex flex-col">
                        {{ text }}
                        <span v-if="!simple" class="opacity-40">{{
                            from
                        }}</span>
                    </div>
                    <div v-else class="text-left flex flex-col">
                        {{ text }}
                        <span v-if="!simple" class="opacity-40">{{
                            from
                        }}</span>
                    </div>
                </template>
                <div v-else class="text-left flex flex-col">
                    Sin definir
                    <span v-if="!simple" class="opacity-40"> ??? </span>
                </div>
            </div>
        </k-tooltip>
    </k-badge>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType } from 'vue'
    import { dayjs } from '../../../plugins'

    export default defineComponent({
        name: 'KDate',
        autoload: true,
        props: {
            value: {
                type: [Array, String] as PropType<string[] | string>,
                default: '',
                description: 'Valor del campo'
            },
            simple: {
                type: Boolean,
                default: false,
                description: 'Arroja menos datos'
            }
        },
        setup(props) {
            const isMultiple = computed(() => {
                if (Array.isArray(props.value)) return true
                return false
            })

            const text = computed(() => {
                if (isMultiple.value) return dayjs(props.value[0]).format('LL')
                return dayjs(props.value.toString()).format('LL')
            })

            const from = computed(() => {
                if (isMultiple.value) return dayjs(props.value[1]).format('LL')
                return dayjs(props.value.toString()).fromNow()
            })

            const tippyText = computed(() => {
                if (Array.isArray(props.value)) {
                    return (
                        dayjs(props.value[0]).format('YYYY-MM-DD HH:mm:ss') +
                        ' - ' +
                        dayjs(props.value[1]).format('YYYY-MM-DD HH:mm:ss')
                    )
                } else {
                    return dayjs(props.value).format('YYYY-MM-DD HH:mm:ss')
                }
            })

            return { props, text, from, isMultiple, tippyText }
        }
    })
</script>
