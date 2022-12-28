<template>
    <span
        :style="{
            'display': 'inline-flex',
            'align-items': 'center',
            'justify-content': 'center'
        }"
    >
        <i :class="classes" :style="style"></i>
    </span>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType, StyleValue } from 'vue'

    export default defineComponent({
        name: 'KIcon',
        autoload: true,
        props: {
            icon: {
                type: String as PropType<string>,
                required: true
            },
            type: {
                type: String as PropType<'fas' | 'fal' | 'fad' | 'far'>,
                default: 'fad'
            },
            size: {
                type: [String, Number],
                default: 0
            },
            spin: {
                type: Boolean,
                default: false
            }
        },
        setup(props) {
            const classes = computed(() => {
                const aclass: any[] = ['k-icon']

                aclass.push(props.type)
                aclass.push(`fa-${props.icon}`)

                if (props.spin) {
                    aclass.push('fa-spin')
                }

                if (props.size > 0) {
                    aclass.push(`fs-${props.size}`)
                }

                return aclass
            })

            const style = computed((): StyleValue => {
                const style: StyleValue = {}

                if (typeof props.size === 'string') {
                    style['font-size'] = props.size + 'px'
                }

                return style
            })

            return { classes, style }
        }
    })
</script>

<style scoped>
    .k-icon {
        color: inherit;
    }
</style>
