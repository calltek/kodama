<template>
    <button :id="id" :class="buttonClasses" :type="type" @click="click">
        <template v-if="loading">
            <i
                class="p-0 mr-3"
                :class="['far', 'fa-spinner-third', 'fa-spin']"
            />

            <span> Cargando... </span>
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

            const click = (event: any) => {
                if (props.disabled === false && props.loading === false) {
                    ctx.emit('click')
                } else {
                    event.preventDefault()
                }
            }

            return {
                buttonClasses,
                type,

                hasSlot,
                iconClasses,
                click
            }
        }
    })
</script>

<style scoped lang="scss">
    .k-button-icon {
        i {
            @apply flex items-center justify-center;
        }

        &.k-button-icon-xs i {
            @apply w-3 h-3;
        }

        &.k-button-icon-sm i {
            @apply w-4 h-4;
        }

        &.k-button-icon-md i {
            @apply w-5 h-5;
        }

        &.k-button-icon-lg i {
            @apply w-6 h-6;
        }

        &.k-button-icon-xl {
            @apply p-3;

            i {
                @apply p-3.5 w-7 h-7;
            }
        }
    }

    .k-button-zoom {
        @apply duration-75 ease-in hover:scale-110;
    }
</style>
