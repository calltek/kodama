<template>
    <k-date simple :value="value" />
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import { dayjs, utils } from '../../../../plugins'

    export default defineComponent({
        name: 'KTableDate',
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        setup(props) {
            const text = computed(() => {
                return dayjs(props.value).format('LL')
            })

            const from = computed(() => {
                return utils.ucfirst(dayjs(props.value).fromNow())
            })

            return { props, text, from }
        }
    })
</script>

<style scoped></style>
