<template>
    <k-tooltip v-if="!modal" :visible="visible">
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
                    type="text"
                    size="sm"
                    :width="150"
                    placeholder="Lorem ipsum"
                    @keyup.enter="filter"
                />

                <div class="ml-4 flex items-center">
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
            type="text"
            size="sm"
            :width="150"
            placeholder="Lorem ipsum"
            @keyup.enter="filter"
        />

        <div class="ml-4 flex items-center">
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
            },
            modal: {
                type: Boolean,
                default: false
            }
        },
        emits: ['filter'],
        setup(props, ctx) {
            const dropdown = ref('dropdown')
            const inputText = ref('')
            const visible = ref(false)

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
                ctx.emit('filter', data)
                visible.value = false
            }

            const reset = () => {
                inputText.value = ''
                ctx.emit('filter', null)
                visible.value = false
            }

            return { visible, dropdown, filter, defaultValue, reset, inputText }
        }
    })
</script>
