<template>
    <tippy :content="value">
        <span class="badge badge-light-primary">
            <div class="flex flex-row align-items-center">
                <i class="fad fa-clock me-2 fs-3" />
                <div class="text-start">
                    {{ text }}
                    <br />
                    <span class="opacity-40">{{ from }}</span>
                </div>
            </div>
        </span>
    </tippy>
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
