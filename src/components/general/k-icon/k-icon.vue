<template>
    <i :class="classes" :style="style"></i>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType, StyleValue } from 'vue'
    import { colors } from '@/helpers/utils'

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
                control: { type: 'inline-radio' },
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
            },
            color: {
                type: String,
                control: { type: 'inline-radio' },
                options: colors,
                validator: (val: string) => colors.includes(val) || val === '',
                default: '',
                description: 'Color del icono'
            }
        },
        setup(props) {
            const style = computed((): StyleValue => {
                const style: StyleValue = {}

                if (props.size > 0) {
                    style['font-size'] = props.size + 'px'
                }

                return style
            })

            const classes = computed(() => {
                let classes: string[] = ['k-icon']

                classes.push(props.type)
                classes.push(`fa-${props.icon}`)

                if (props.spin) {
                    classes.push('fa-spin')
                }

                if (props.color === 'white') {
                    classes.push('text-white')
                } else if (props.color === 'black') {
                    classes.push('text-black')
                } else if (props.color === 'gray') {
                    classes.push('text-gray-300 ')
                } else if (props.color === 'primary') {
                    classes.push('text-primary')
                } else if (props.color === 'secondary') {
                    classes.push('text-secondary')
                } else if (props.color === 'success') {
                    classes.push('text-success')
                } else if (props.color === 'warning') {
                    classes.push('text-warning ')
                } else if (props.color === 'danger') {
                    classes.push('text-danger ')
                } else if (props.color === 'info') {
                    classes.push('text-info')
                }

                return classes
            })

            return { classes, style }
        }
    })
</script>
