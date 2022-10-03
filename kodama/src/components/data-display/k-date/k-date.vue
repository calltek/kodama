<template>
    <span class="badge badge-light-primary">
        <div class="d-flex flex-row align-items-center">
            <k-icon icon="clock" :size="3" class="me-2" />
            <template v-if="value">
                <div class="text-start" v-if="isMultiple">
                    {{ text }}
                    <br />
                    <span class="opacity-40">{{ from }}</span>
                </div>
                <div class="text-start" v-else>
                    {{ text }}
                    <br />
                    <span class="opacity-40">{{ from }}</span>
                </div>
            </template>
            <div class="text-start" v-else>
                Sin definir
                <br />
                <span class="opacity-40"> ??? </span>
            </div>
        </div>
    </span>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType } from 'vue'
    import { moment } from '../../../plugins'
    import KIcon from '../k-icon/k-icon.vue'

    export default defineComponent({
        name: 'KDate',
        autoload: true,
        components: { KIcon },
        props: {
            value: {
                type: [Array, String] as PropType<string[] | string>,
                default: ''
            }
        },
        setup(props) {
            const isMultiple = computed(() => {
                if (Array.isArray(props.value)) return true
                return false
            })

            const text = computed(() => {
                if (isMultiple.value) return moment(props.value[0]).format('LL')
                return moment(props.value).format('LL')
            })

            const from = computed(() => {
                if (isMultiple.value) return moment(props.value[1]).format('LL')
                return moment(props.value).fromNow()
            })

            const tippyText = computed(() => {
                if (isMultiple.value)
                    return props.value[0] + '-' + props.value[1]
                return props.value
            })

            return { props, text, from, isMultiple, tippyText }
        }
    })
</script>
