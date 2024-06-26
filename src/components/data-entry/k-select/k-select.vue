<template>
    <div :class="[classes]">
        <label v-if="hasLabel">
            <slot v-if="hasSlot('default')" />
            <template v-else>{{ label }}</template>

            <span v-if="required" class="font-bold text-danger ml-1">*</span>
            <template v-if="firstError">
                <k-tooltip :content="firstError">
                    <k-icon icon="triangle-exclamation" class="ml-2" />
                </k-tooltip>
            </template>
        </label>

        <multiselect
            :id="uuid"
            v-model="model"
            :options="options"
            :close-on-select="fCloseOnSelect"
            :placeholder="placeholder"
            :label="labelBy"
            :searchable="searchable"
            :hide-selected="hideSelected"
            :allow-empty="!required"
            :show-labels="false"
            :style="style"
            :disabled="disabled"
            :multiple="multiple"
            :track-by="trackBy"
            :clear-on-select="clearOnSelect"
            :max="max > 0 ? max : undefined"
            :loading="loading"
            :max-height="maxHeight > 0 ? maxHeight : undefined"
            :show-no-results="show404"
            :internal-search="!ajax"
            :limit="limit > 0 ? limit : undefined"
            :tag-placeholder="tagPlaceholder"
            :taggable="free"
            :show-no-options="showNoOptions"
            @open="$emit('open')"
            @close="$emit('close')"
            @select="$emit('select', $event)"
            @remove="$emit('remove', $event)"
            @search-change="fetch"
            @tag="addTag($event)"
        >
            <template #singleLabel="{ option }">
                <slot name="singleLabel" v-bind="{ option }"></slot>
            </template>

            <template #option="{ option, search }">
                <slot name="option" v-bind="{ option, search }"></slot>
            </template>

            <template #maxElements>
                Se alcanzó el nº máximo de elementos seleccionados
            </template>

            <template #noResult> Sin resultados </template>

            <template #noOptions> No hay opciones disponibles </template>

            <template #beforeList>
                <slot name="beforeList"></slot>
            </template>

            <template #afterList>
                <slot name="afterList"></slot>
            </template>

            <template #caret="{ toggle }">
                <slot name="caret" v-bind="{ toggle }"></slot>
            </template>

            <template #placeholder>
                <slot name="placeholder"></slot>
            </template>

            <template #tag="{ option, remove }">
                <slot name="tag" v-bind="{ option, remove }"></slot>
            </template>
        </multiselect>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, ref } from 'vue'
    import Multiselect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.css'
    import props from './k-select.props'
    import { uid, debounce } from '@/helpers/utils'

    export default defineComponent({
        name: 'KSelect',
        components: {
            Multiselect
        },
        props: props,
        emits: [
            'update:modelValue',
            'open',
            'close',
            'select',
            'remove',
            'fetch',
            'tag'
        ],
        setup(props, ctx) {
            const uuid = props.id || uid()
            const hasSlot = (name: string) => !!ctx.slots[name]

            const disableFetch = ref(false)

            const model = computed({
                get() {
                    if (
                        props.modelValue &&
                        typeof props.modelValue === 'object'
                    ) {
                        //check if value is array
                        if (Array.isArray(props.modelValue)) {
                            return props.modelValue.map((item: any) => {
                                if (item && typeof item === 'object') {
                                    return {
                                        label: item[props.labelBy],
                                        value: item[props.trackBy]
                                    }
                                } else {
                                    const option: any = props.options.find(
                                        (option: any) =>
                                            option[props.trackBy].toString() ===
                                            item.toString()
                                    )

                                    if (option) {
                                        return {
                                            label: option[props.labelBy],
                                            value: item
                                        }
                                    } else {
                                        return {
                                            label: item,
                                            value: item
                                        }
                                    }
                                }
                            })
                        } else {
                            return {
                                label: props.modelValue[props.labelBy],
                                value: props.modelValue[props.trackBy]
                            }
                        }
                    } else if (props.modelValue) {
                        //find label by value
                        const option: any = props.options.find(
                            (option: any) =>
                                option[props.trackBy].toString() ===
                                props.modelValue.toString()
                        )

                        if (option) {
                            return {
                                label: option[props.labelBy],
                                value: props.modelValue
                            }
                        } else {
                            return {
                                label: props.modelValue,
                                value: props.modelValue
                            }
                        }
                    } else {
                        return null
                    }
                },
                set(value) {
                    //check if value is object
                    if (value && typeof value === 'object') {
                        //check if value is array
                        if (Array.isArray(value)) {
                            //check if value is empty
                            if (value.length > 0) {
                                updateModelValue(
                                    value.map((item: any) => {
                                        if (item && typeof item === 'object') {
                                            return item[props.trackBy]
                                        } else {
                                            return item
                                        }
                                    })
                                )
                            } else {
                                updateModelValue(null)
                            }
                        } else {
                            //check if value is empty
                            if (Object.keys(value).length > 0) {
                                updateModelValue(
                                    value[props.trackBy as keyof typeof value]
                                )
                            } else {
                                updateModelValue(null)
                            }
                        }
                    } else {
                        updateModelValue(value)
                    }
                }
            })

            const updateModelValue = (value: any) => {
                disableFetch.value = true
                ctx.emit('update:modelValue', value)

                setTimeout(() => {
                    disableFetch.value = false
                }, 1000)
            }

            const classes = computed(() => {
                const classes = ['k-select', `k-select-${props.size}`]

                if (props.errors.length > 0) {
                    classes.push('k-select-danger')
                } else if (props.status) {
                    classes.push(`k-select-${props.status}`)
                }

                return classes
            })

            const fCloseOnSelect = computed(() => {
                return props.closeOnSelect === 'auto'
                    ? !props.multiple
                    : props.closeOnSelect
            })

            const style = computed(() => {
                const style: any = {}

                if (props.width > 0) {
                    style['width'] = props.width + 'px'
                }

                return style
            })

            const hasLabel = computed(() => {
                return props.label || hasSlot('default')
            })

            const firstError = computed(() => {
                const error =
                    props.errors.length > 0 ? props.errors[0].$message : ''
                return error.toString()
            })

            const fetch = debounce(($event: any) => {
                if (disableFetch.value) return
                ctx.emit('fetch', $event)
            }, 500)

            const addTag = (newTag: string) => {
                const tag: any = {}

                tag[props.trackBy] = newTag
                tag[props.labelBy] = newTag

                if (Array.isArray(model.value)) {
                    model.value = [...model.value, tag]
                } else {
                    model.value = tag
                }

                ctx.emit('tag', newTag)
            }

            return {
                model,
                classes,
                hasLabel,
                firstError,
                uuid,
                hasSlot,
                style,
                fCloseOnSelect,
                addTag,
                fetch
            }
        }
    })
</script>

<style lang="scss">
    @import './k-select.scss';
</style>
