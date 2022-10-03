<template>
    <div :style="style" :class="$style.morph">
        <k-bubble-1 v-if="type === 1" :color="color"></k-bubble-1>
        <k-bubble-2 v-else-if="type === 2" :color="color"></k-bubble-2>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import KBubble1 from './types/bubble-1.vue'
    import KBubble2 from './types/bubble-2.vue'

    export default defineComponent({
        name: 'KBubbles',
        autoload: true,
        components: {
            'k-bubble-1': KBubble1,
            'k-bubble-2': KBubble2
        },
        props: {
            type: {
                type: Number,
                default: 1
            },
            color: {
                type: String,
                default: '#ececec'
            },
            width: {
                type: Number,
                default: 300
            },
            zIndex: {
                type: Number,
                default: -1
            },
            top: {
                type: [Number, String],
                default: ''
            },
            left: {
                type: [Number, String],
                default: ''
            },
            bottom: {
                type: [Number, String],
                default: ''
            },
            right: {
                type: [Number, String],
                default: ''
            },
            rotate: {
                type: Number,
                default: 0
            }
        },
        setup(props) {
            const style = computed(() => {
                const s: any = {}

                s.width = `${props.width}px`

                s['z-index'] = props.zIndex

                if (props.top !== '') {
                    s.top = `${props.top}px`
                }

                if (props.left !== '') {
                    s.left = `${props.left}px`
                }

                if (props.bottom !== '') {
                    s.bottom = `${props.bottom}px`
                }

                if (props.right !== '') {
                    s.right = `${props.right}px`
                }

                if (props.rotate !== 0) {
                    s.transform = `rotate(${props.rotate}deg)`
                }

                return s
            })

            return { style }
        }
    })
</script>

<style lang="scss" module>
    .morph {
        position: absolute;
    }
</style>
