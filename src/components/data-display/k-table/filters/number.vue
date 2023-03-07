<template>
    <k-tooltip :visible="visible">
        <k-icon
            icon="filter"
            :class="{ 'text-primary': defaultValue }"
            class="ml-2 cursor-pointer"
            @click="visible = !visible"
        />

        <template #content>
            <div class="flex items-center">
                <k-input
                    v-model="inputText"
                    type="number"
                    size="sm"
                    :width="90"
                    :min="min"
                    :max="max || undefined"
                    placeholder="0"
                    @keyup.enter="filter"
                />

                <div class="ml-4 flex align-items-center">
                    <k-button
                        icon="xmark"
                        color="danger"
                        size="sm"
                        title="Resetear"
                        class="mr-2"
                        @click="reset"
                    />

                    <k-button
                        icon="check"
                        color="success"
                        size="sm"
                        title="Aplicar"
                        @click="filter"
                    />
                </div>
            </div>
        </template>
    </k-tooltip>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
    import { uid } from '../../../../helpers/utils'

    export default defineComponent({
        name: 'KTableFilterNumber',

        props: {
            value: {
                type: Object as PropType<Record<string, any> | null>,
                default: null
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 0
            }
        },
        emits: ['filter'],
        setup(props, ctx) {
            const id = uid()
            const dropdown = ref('dropdown')
            const inputText = ref()
            const visible = ref(false)

            const defaultValue = computed(() => {
                if (props.value && props.value.$eq) {
                    return props.value.$eq
                }

                return ''
            })

            onMounted(() => {
                if (props.value && props.value.$eq) {
                    inputText.value = props.value.$eq
                }
            })

            const filter = () => {
                const data = {
                    $eq: inputText.value
                }

                ctx.emit('filter', data)

                visible.value = false
            }

            const reset = () => {
                inputText.value = undefined
                ctx.emit('filter', null)
            }

            return {
                id,
                dropdown,
                filter,
                defaultValue,
                reset,
                inputText,
                visible
            }
        }
    })
</script>
