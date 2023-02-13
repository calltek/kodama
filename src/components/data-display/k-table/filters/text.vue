<template>
    <popper arrow>
        <k-icon
            icon="filter"
            :class="{ 'text-primary': defaultValue }"
            class="ml-2"
        />

        <template #content>
            <div class="flex align-items-center p-4">
                <k-input
                    v-model="inputText"
                    type="text"
                    size="sm"
                    :width="20"
                    placeholder="Lorem ipsum"
                    @keyup.enter="filter"
                />

                <div class="ms-4 flex align-items-center">
                    <k-button
                        icon="xmark"
                        color="danger"
                        size="sm"
                        title="Resetear"
                        class="me-2"
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
    </popper>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
    import { uid } from '../../../../helpers/utils'

    export default defineComponent({
        name: 'KTableFilterText',
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
                default: 100
            }
        },
        emits: ['filter'],
        setup(props, ctx) {
            const id = uid()
            const dropdown = ref('dropdown')
            const inputText = ref('')

            const hideModal = () => {
                // const bs = new bootstrap.Dropdown(dropdown.value)
                // bs.hide()
            }

            const defaultValue = computed(() => {
                if (props.value && props.value.$like) {
                    return props.value.$like
                }

                return ''
            })

            onMounted(() => {
                if (props.value && props.value.$like) {
                    inputText.value = props.value.$like
                }
            })

            const filter = () => {
                const data = {
                    $like: inputText.value
                }

                hideModal()
                ctx.emit('filter', data)
            }

            const reset = () => {
                hideModal()
                inputText.value = ''
                ctx.emit('filter', null)
            }

            return { id, dropdown, filter, defaultValue, reset, inputText }
        }
    })
</script>
