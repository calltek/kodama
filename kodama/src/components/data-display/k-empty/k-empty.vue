<template>
    <div>
        <div class="w-100 text-center">
            <img :src="img404" class="mw-100 mb-10 h-lg-450px" />
        </div>

        <div class="mb-10 text-center">
            <h1
                v-if="!hasSlot('default')"
                class="fw-bolder text-dark text-uppercase"
            >
                {{ title }}
            </h1>
            <slot v-else></slot>

            <h5
                v-if="!hasSlot('subtitle') && subtitle"
                class="text-muted fw-bold"
            >
                {{ subtitle }}
            </h5>
            <slot v-else-if="hasSlot('subtitle')" name="subtitle"></slot>
        </div>

        <div class="d-flex justify-content-center">
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
                default: 'No se encontraron resultados'
            },
            subtitle: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            }
        },
        setup(props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]

            const img404 = computed(() => {
                if (props.image) return props.image
                return `https://kodamaui.s3.eu-west-1.amazonaws.com/errors/404/frontend/404-1.svg`
            })

            return { hasSlot, img404 }
        }
    })
</script>

<style scoped></style>
