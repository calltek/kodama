<template>
    <k-tooltip :content="text">
        <k-icon type="fad" :icon="icon" class="dark:text-white text-gray-200" />

        <template #content>
            <div class="flex flex-col text-sm">
                <div
                    class="border-b border-b-gray-600 px-4 py-1 text-center uppercase font-bold flex justify-center"
                >
                    <span>Ayuda</span>
                </div>

                <div class="px-4 py-2">
                    <slot v-if="hasSlot('default')"></slot>
                    <template v-else>{{ text }}</template>
                </div>
            </div>
        </template>
    </k-tooltip>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KHelp',
        autoload: true,
        props: {
            text: {
                type: String,
                default: '',
                description: 'Texto de la ayuda'
            },
            icon: {
                type: String,
                default: 'seal-question',
                description: 'Icono'
            }
        },
        setup(_props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]

            return { hasSlot }
        }
    })
</script>

<style scoped></style>
