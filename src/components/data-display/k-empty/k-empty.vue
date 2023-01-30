<template>
    <div class="max-w-md overflow-hidden">
        <img :src="img404" class="mb-4 w-full" />

        <div class="mb-6 text-center whitespace-normal">
            <k-title
                v-if="!hasSlot('default')"
                :size="3"
                bolder
                uppercase
                class="text-gray-900"
            >
                {{ title }}
                <template v-if="subtitle" #subtitle>
                    {{ subtitle }}
                </template>
            </k-title>
            <slot v-else></slot>
            <slot v-if="hasSlot('subtitle')" name="subtitle"></slot>
        </div>

        <div class="flex justify-center">
            <slot name="action"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'KEmpty',
        autoload: true,
        props: {
            title: {
                type: String,
                default: 'No se encontraron resultados',
                description: 'Título'
            },
            subtitle: {
                type: String,
                default: '',
                description: 'Subtítulo'
            },
            image: {
                type: String,
                default: '',
                description: 'Url de la imagen'
            }
        },
        setup(props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]

            const img404 = computed(() => {
                if (props.image) return props.image
                return 'https://kodamaui.s3.eu-west-1.amazonaws.com/errors/404/frontend/404-1.svg'
            })

            return { hasSlot, img404 }
        }
    })
</script>

<style scoped></style>
