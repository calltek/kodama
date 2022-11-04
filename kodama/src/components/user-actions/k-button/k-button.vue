template
<template>
    <button :id="id" :class="buttonClasses" @click="click">
        <template v-if="isLoading">
            <i class="p-0" :class="['far', 'fa-spinner-third', 'fa-spin']" />

            <span v-if="typeof loading === 'string'" class="ms-3">
                {{ loading }}
            </span>
            <span v-else-if="hasSlot('default')" class="ms-3">
                <slot />
            </span>
        </template>

        <template v-else>
            <i v-if="icon" :class="iconClasses" />

            <span>
                <slot />
            </span>
        </template>
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
                if (typeof props.loading === 'string' && props.loading !== '')
                    return true
                return props.loading
            })

            const click = (event: any) => {
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
