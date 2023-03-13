<template>
    <div
        :id="accordionTrigger"
        :data-accordion-scope="accordionTarget"
        data-accordion-trigger
        :data-accordion-open="open"
        :class="parentClasses"
    >
        <slot name="header"></slot>
    </div>
    <div :id="accordionTarget" :class="{ hidden: !open }">
        <slot name="content"></slot>
    </div>
</template>

<script lang="ts">
    import { uid } from '@/helpers/utils'
    import { defineComponent, getCurrentInstance } from 'vue'

    export default defineComponent({
        name: 'KAccordionItem',
        props: {
            open: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            const accordionTarget = uid()
            const accordionTrigger = uid()
            const instance = getCurrentInstance()

            const parentClasses = instance?.parent?.props?.classes || ''

            return { accordionTarget, accordionTrigger, parentClasses }
        }
    })
</script>

<style scoped></style>
