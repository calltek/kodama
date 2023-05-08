<template>
    <k-tooltip
        v-if="!modal"
        ref="tooltip"
        interactive
        trigger="click"
        theme="filter"
        :arrow="false"
        hide-on-click
        placement="bottom"
    >
        <div class="inline-block">
            <k-button
                size="sm"
                icon="filter"
                link
                :color="defaultValue ? 'primary' : 'gray'"
            />
        </div>

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
    <div v-else class="flex items-center">
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
            },
            modal: {
                type: Boolean,
                default: false
            }
        },
        emits: ['filter'],
        setup(props, ctx) {
            const id = uid()
            const tooltip = ref()
            const inputText = ref()

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
                tooltip.value?.hide()
            }

            const reset = () => {
                inputText.value = undefined
                ctx.emit('filter', null)
                tooltip.value?.hide()
            }

            return {
                id,
                filter,
                defaultValue,
                reset,
                inputText,
                tooltip
            }
        }
    })
</script>
