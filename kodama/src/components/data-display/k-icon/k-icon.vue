<template>
    <span
        :key="key"
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
    import {
        defineComponent,
        computed,
        ref,
        watch,
        PropType,
        StyleValue
    } from 'vue'

    export default defineComponent({
        name: 'KIcon',
        autoload: true,
        props: {
            icon: {
                type: [Array, String] as PropType<string[] | string>,
                required: true
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
            const key = ref(Math.floor(Math.random() * 100))

            const classes = computed(() => {
                const aclass: any[] = ['k-icon']
                if (Array.isArray(props.icon)) {
                    aclass.push(props.icon[0])
                    aclass.push(`fa-${props.icon[1]}`)
                } else {
                    aclass.push('fad')
                    aclass.push(`fa-${props.icon}`)
                }

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

            watch(
                () => props,
                () => {
                    key.value = Math.floor(Math.random() * 100)
                },
                { deep: true }
            )

            return { classes, style, key }
        }
    })
</script>

<style scoped>
    .k-icon {
        color: inherit;
    }
</style>
