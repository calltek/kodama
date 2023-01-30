<template>
    <k-date simple :value="value" />
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import { moment, utils } from '../../../../plugins'

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
                return moment(props.value).format('LL')
            })

            const from = computed(() => {
                return utils.ucfirst(moment(props.value).fromNow())
            })

            return { props, text, from }
        }
    })
</script>

<style scoped></style>
