<template>
    <popper arrow :content="text" hover>
        <k-icon type="fad" :icon="icon" />

        <template #content>
            <div class="flex flex-col -mx-4 -my-2 text-sm">
                <div
                    class="border-b border-b-gray-600 px-4 py-1 text-center uppercase font-bold flex justify-center"
                >
                    <span>Ayuda</span>
                </div>

                <div class="px-4 py-2">
                    {{ text }}
                </div>
            </div>
        </template>
    </popper>
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
        }
    })
</script>

<style scoped></style>
