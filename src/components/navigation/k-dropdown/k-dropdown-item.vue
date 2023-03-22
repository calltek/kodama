<template>
    <li class="" @click="click">
        <slot></slot>
    </li>
</template>

<script lang="ts">
    import { defineComponent, getCurrentInstance } from 'vue'

    export default defineComponent({
        name: 'KDropdownItem',
        props: {
            closable: {
                type: Boolean,
                default: true
            }
        },
        emits: ['click'],
        setup(props) {
            const ctx = getCurrentInstance()

            const click = () => {
                ctx?.emit('click')

                const parent: any = ctx?.parent
                if (
                    props.closable &&
                    parent &&
                    parent.ctx &&
                    parent.ctx.dropdown
                ) {
                    parent.ctx.dropdown?.hide()
                }
            }

            return { click }
        }
    })
</script>

<style scoped></style>
