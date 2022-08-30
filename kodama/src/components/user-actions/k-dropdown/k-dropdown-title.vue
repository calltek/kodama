<template>
    <div class="menu-item px-3">
        <div
            class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase text-start"
        >
            <i v-if="icon" :class="iconClasses" />

            <template v-if="!hasSlot('default')">{{ title }}</template>
            <slot v-else></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, PropType } from 'vue'

    export default defineComponent({
        name: 'KDropdownTitle',
        autoload: true,
        props: {
            icon: {
                type: [Array, String] as PropType<string[] | string>,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        },
        setup(props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]
            const iconClasses = computed(() => {
                const classes: string[] = ['me-2']

                if (!Array.isArray(props.icon)) {
                    classes.push(`fad fa-${props.icon}`)
                } else {
                    props.icon.forEach((icon: string) => {
                        classes.push(icon)
                    })
                }

                return classes
            })

            return { iconClasses, hasSlot }
        }
    })
</script>

<style scoped></style>
