<template>
    <button :id="id" :class="buttonClasses" :type="type" @click="click">
        <template v-if="loading">
            <k-icon
                class="p-0"
                :class="{ 'mr-3': hasSlot('default') }"
                icon="spinner-third"
                spin
            />

            <span v-if="hasSlot('default')"> Cargando... </span>
        </template>

        <template v-else>
            <k-icon
                v-if="icon"
                :icon="icon"
                :type="iconType"
                :class="{ 'mr-2': hasSlot('default') }"
            />

            <span v-if="hasSlot('default')">
                <slot />
            </span>
        </template>
    </button>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'

    import props from './k-button.props'
    import { parseButtonClasses } from './k-button.utils'

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
                click
            }
        }
    })
</script>

<style lang="scss">
    .k-button {
        @apply text-center font-semibold rounded-lg focus:outline-none transition-all whitespace-nowrap;

        ///////////////////////
        // SIZES
        ///////////////////////
        &.k-button-xs {
            @apply text-xs px-2 py-1;

            &.k-button-icon-xs {
                @apply p-1;

                i {
                    @apply w-4 h-4;
                }
            }
        }

        &.k-button-sm {
            @apply text-sm px-3 py-1.5;

            &.k-button-icon-sm {
                @apply p-1.5;

                i {
                    @apply w-5 h-5;
                }
            }
        }

        &.k-button-md {
            @apply text-base px-4 py-2;

            &.k-button-icon-md {
                @apply p-2;

                i {
                    @apply w-6 h-6;
                }
            }
        }

        &.k-button-lg {
            @apply text-lg px-5 py-2.5;

            &.k-button-icon-lg {
                @apply p-2.5;

                i {
                    @apply w-7 h-7;
                }
            }
        }

        &.k-button-xl {
            @apply text-xl px-6 py-3;

            &.k-button-icon-xl {
                @apply p-3;

                i {
                    @apply w-7 h-7;
                }
            }
        }

        &.k-button-icon {
            & > span {
                display: flex !important;

                i {
                    @apply flex items-center justify-center;
                }
            }
        }

        ///////////////////////
        // ZOOM
        ///////////////////////
        &.k-button-zoom {
            @apply duration-75 ease-in hover:scale-110;
        }
    }

    // .k-button-icon {
    //     i {
    //         @apply flex items-center justify-center;
    //     }

    //     &.k-button-icon-xs i {
    //         @apply w-3 h-3;
    //     }

    //     &.k-button-icon-sm i {
    //         @apply w-4 h-4;
    //     }

    //     &.k-button-icon-md i {
    //         @apply w-5 h-5;
    //     }

    //     &.k-button-icon-lg i {
    //         @apply w-6 h-6;
    //     }

    //     &.k-button-icon-xl {
    //         @apply p-3;

    //         i {
    //             @apply p-3.5 w-7 h-7;
    //         }
    //     }
    // }
</style>
