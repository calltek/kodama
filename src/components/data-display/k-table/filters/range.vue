<template>
    <k-tooltip>
        <k-icon
            icon="filter"
            :class="{ 'text-primary': defaultValue }"
            class="ml-2"
        />

        <template #content>
            <div class="flex align-items-center px-6 py-4">
                <div
                    :id="`${id}`"
                    class="noUi-target noUi-target-primary w-150px w-xxl-200px noUi-sm"
                ></div>

                <div class="ms-10 flex align-items-center">
                    <a
                        v-tippy="'Resetear'"
                        class="text-danger cursor-pointer me-2 d-inline-flex"
                        @click="reset"
                    >
                        <k-icon icon="square-xmark" :size="1" />
                    </a>

                    <a
                        v-tippy="'Aceptar'"
                        class="text-success cursor-pointer d-inline-flex"
                        @click="filter"
                    >
                        <k-icon icon="square-check" :size="1" />
                    </a>
                </div>
            </div>
        </template>
    </k-tooltip>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
    // import noUiSlider from 'nouislider/dist/nouislider.js'
    import { uid } from '../../../../helpers/utils'

    export default defineComponent({
        name: 'KTableFilterRange',

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
            const internalValue = ref([0, 0])
            const bs = ref()

            const initSlider = (): void => {
                const slider: Element | any = document.querySelector(`#${id}`)

                if (!slider) {
                    return
                }

                slider.innerHTML = ''

                // noUiSlider.create(slider, {
                //     start: defaultValue.value
                //         ? defaultValue.value
                //         : [props.min, props.max],
                //     connect: true,
                //     range: {
                //         min: props.min,
                //         max: props.max
                //     },
                //     tooltips: true
                // })

                // slider.noUiSlider.on('change', function (values: string[]) {
                //     const data = [parseFloat(values[0]), parseFloat(values[1])]
                //     internalValue.value = data
                // })
            }

            onMounted(() => {
                initSlider()
            })

            const defaultValue = computed(() => {
                if (props.value && props.value.$gte && props.value.$lte) {
                    return [props.value.$gte, props.value.$lte]
                }

                return ''
            })

            const filter = () => {
                const data = {
                    $gte: internalValue.value[0],
                    $lte: internalValue.value[1]
                }

                bs.value.hide()
                ctx.emit('filter', data)
            }

            const reset = () => {
                bs.value.hide()
                ctx.emit('filter', null)
            }

            return { id, dropdown, filter, defaultValue, reset }
        }
    })
</script>
