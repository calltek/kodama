template
<template>
    <button :id="id" :class="buttonClasses" @click="click">
        <span v-if="isLoading">
            <i
                v-if="isLoading"
                :class="[
                    'far',
                    'fa-spinner-third',
                    'fa-spin',
                    hasSlot('default') ? 'me-2' : ''
                ]"
            />
        </span>

        <span
            v-if="icon && !isLoading"
            class="d-inline-flex align-items-center"
        >
            <i :class="iconClasses" />
        </span>

        <template v-if="isLoading && typeof loading === 'string'">
            {{ loading }}
        </template>

        <slot v-else />
    </button>
</template>

<script lang="ts">
    import { defineComponent, computed, onMounted } from 'vue'
    import tippy from 'tippy.js'

    import props from './k-button.props'
    import { parseButtonClasses, parseIconClasses } from './k-button.utils'

    export default defineComponent({
        name: 'KButton',
        autoload: true,
        props: props,
        emits: ['click'],
        setup(props, ctx) {
            const hasSlot = (name: string) => !!ctx.slots[name]

            const buttonClasses = computed(() =>
                parseButtonClasses(props, ctx.slots)
            )
            const iconClasses = computed(() =>
                parseIconClasses(props, ctx.slots)
            )

            const type = computed(() => {
                if (props.submit) return 'submit'
                return 'button'
            })

            const isLoading = computed(() => {
                if (typeof props.loading === 'string') return true
                return props.loading
            })

            const click = (event: any) => {
                console.log(props.disabled)
                if (props.disabled === false && props.loading === false) {
                    ctx.emit('click')
                } else {
                    event.preventDefault()
                }
            }

            onMounted(() => {
                if (props.title) {
                    tippy('#' + props.id, {
                        content: props.title
                    })
                }
            })

            return {
                buttonClasses,
                type,
                isLoading,
                hasSlot,
                iconClasses,
                click
            }
        }
    })
</script>

<style scoped></style>
