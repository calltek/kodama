<template>
    <div ref="dropdown" class="dropdown d-inline-flex ms-2">
        <span
            class="cursor-pointer"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
            :class="{ 'text-primary': defaultValue }"
        >
            <i class="fad fa-filter" />
        </span>

        <div class="dropdown-menu p-0">
            <div class="d-flex align-items-center p-4">
                <k-input
                    type="text"
                    size="sm"
                    :width="180"
                    placeholder="Lorem ipsum"
                    v-model="inputText"
                    @keyup.enter="filter"
                />

                <div class="ms-4 d-flex align-items-center">
                    <k-button
                        @click="reset"
                        icon="xmark"
                        color="danger"
                        size="sm"
                        title="Resetear"
                        class="me-2"
                    />

                    <k-button
                        @click="filter"
                        icon="check"
                        color="success"
                        size="sm"
                        title="Aplicar"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
    import { uid } from '../../../../helpers/utils'
    import KIcon from '../../k-icon/k-icon.vue'
    import KInput from '../../../user-actions/k-input/k-input.vue'
    import KButton from '../../../user-actions/k-button/k-button.vue'
    import * as bootstrap from 'bootstrap'

    export default defineComponent({
        name: 'KTableFilterText',
        components: { KButton, KInput, KIcon },
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
                const bs = new bootstrap.Dropdown(dropdown.value)
                bs.hide()
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
