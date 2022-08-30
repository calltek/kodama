<template>
    <div class="card h-100">
        <div class="card-header flex-nowrap border-0 pt-9">
            <div class="card-title m-0">
                <div class="h-45px w-45px bg-light me-5 d-flex align-items-center justify-content-center">
                    <k-icon :icon="icon" :size="1"></k-icon>
                </div>

                <div class="d-flex flex-column">
                    <k-title :size="2" uppercase bolder class="m-0">
                        <slot name="title"></slot>
                    </k-title>

                    <k-title :size="5" color="gray-400">
                        <slot name="description"> </slot>
                    </k-title>
                </div>
            </div>
        </div>
        <div class="card-body d-flex flex-column px-9 pt-6 pb-8">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <div class="fs-2tx fw-bolder" :class="`text-${color}`">
                    <slot name="value"></slot>
                    <sup class="fs-1">
                        {{ preffix }}
                    </sup>
                </div>

                <k-badge v-tippy="`${oldValue}${preffix} en el periodo anterior!`" size="lg" :color="color">
                    <k-icon :icon="iconType" class="me-2"></k-icon>

                    {{ $filters.float(compare) }} %
                </k-badge>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType } from 'vue'

    export default defineComponent({
        autoload: true,
        name: 'Stats',
        components: {},
        props: {
            icon: {
                type: [Array, String] as PropType<string[] | string>,
                default: () => ['far', 'tachometer-fast'],
            },
            compare: {
                type: Number,
                default: 0,
            },
            preffix: {
                type: String,
                default: '',
            },
            oldValue: {
                type: [String, Number],
                default: 0,
            },
        },
        setup(props) {
            const color = computed(() => {
                if (props.compare > 0) {
                    return 'success'
                } else if (props.compare < 0) {
                    return 'danger'
                } else {
                    return 'gray-300'
                }
            })

            const iconType = computed(() => {
                if (props.compare > 0) {
                    return 'up'
                } else if (props.compare < 0) {
                    return 'down'
                } else {
                    return 'equals'
                }
            })

            return { color, iconType }
        },
    })
</script>
