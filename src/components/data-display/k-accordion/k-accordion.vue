<template>
    <div :id="accordionId" class="k-accordion">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { uid } from '@/helpers/utils'
    import {
        Accordion,
        AccordionInterface,
        AccordionItem,
        AccordionOptions
    } from 'flowbite'
    import { defineComponent, onMounted, ref, Ref } from 'vue'

    export default defineComponent({
        name: 'KAccordion',
        props: {
            classes: {
                type: String,
                default: ''
            },
            activeClasses: {
                type: String,
                default:
                    'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
            },
            inactiveClasses: {
                type: String,
                default: 'text-gray-500 dark:text-gray-400'
            },
            alwaysOpen: {
                type: Boolean,
                default: false
            }
        },
        setup(props) {
            const accordionId = uid()

            const init = () => {
                const accordion: Ref<AccordionInterface | null> = ref(null)

                const getAccordionItems = () => {
                    const items: AccordionItem[] = []

                    const accordionTriggers = document.querySelectorAll(
                        `#${accordionId} [data-accordion-trigger]`
                    )

                    accordionTriggers.forEach((trigger) => {
                        const triggerId = trigger.getAttribute('id')
                        const targetId = trigger.getAttribute(
                            'data-accordion-scope'
                        )

                        if (triggerId && targetId) {
                            const triggerEl = document.getElementById(triggerId)
                            const targetEl = document.getElementById(targetId)
                            const open =
                                trigger.getAttribute('data-accordion-open') ===
                                'true'
                                    ? true
                                    : false || false

                            if (triggerEl && targetEl) {
                                items.push({
                                    id: triggerId,
                                    triggerEl: triggerEl,
                                    targetEl: targetEl,
                                    active: open
                                })
                            }
                        }
                    })

                    return items
                }

                const options: AccordionOptions = {
                    alwaysOpen: false,
                    activeClasses: `${props.activeClasses}`,
                    inactiveClasses: `${props.inactiveClasses}`
                    // onOpen: (item) => {
                    //     console.log('accordion item has been shown')
                    //     console.log(item)
                    // },
                    // onClose: (item) => {
                    //     console.log('accordion item has been hidden')
                    //     console.log(item)
                    // },
                    // onToggle: (item) => {
                    //     console.log('accordion item has been toggled')
                    //     console.log(item)
                    // }
                }

                const accordionItems = getAccordionItems()

                accordion.value = new Accordion(accordionItems, options)
            }

            onMounted(() => {
                init()
            })

            return { accordionId }
        }
    })
</script>

<style scoped></style>
