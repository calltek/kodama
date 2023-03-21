<template>
    <i :class="classes" :style="style"></i>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType, StyleValue } from 'vue'

    export default defineComponent({
        name: 'KIcon',
        autoload: true,
        props: {
            icon: {
                type: String as PropType<string>,
                required: true,
                description: 'Icono'
            },
            type: {
                type: String as PropType<'fas' | 'fal' | 'fad' | 'far'>,
                default: 'fad',
                options: ['fas', 'fal', 'fad', 'far'],
                control: 'inline-radio',
                description: 'Tipo de icono'
            },
            size: {
                type: Number,
                default: 0,
                description: 'Tamaño del icono'
            },
            spin: {
                type: Boolean,
                default: false,
                description: 'Animación de rotación'
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

                return aclass
            })

            const style = computed((): StyleValue => {
                const style: StyleValue = {}

                if (props.size > 0) {
                    style['font-size'] = props.size + 'px'
                }

                return style
            })

            return { classes, style }
        }
    })
</script>
