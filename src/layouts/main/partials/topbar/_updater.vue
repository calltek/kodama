<template>
    <k-tooltip
        v-if="updateAvailable"
        content="🍾 Actualización disponible"
        placement="left"
    >
        <k-button
            neon
            color="success"
            icon="cloud-arrow-down"
            @click="update"
        />
    </k-tooltip>
</template>

<script type="module" lang="ts">
    import { defineComponent, onMounted, ref } from 'vue'
    import { registerSW } from 'virtual:pwa-register'

    export default defineComponent({
        name: 'KUpdater',
        setup() {
            let updateAvailable = ref(false)
            let updateSW: any = null

            const update = () => {
                if (updateSW) updateSW(true)
            }

            onMounted(() => {
                if ('serviceWorker' in navigator) {
                    updateSW = registerSW({
                        onNeedRefresh() {
                            updateAvailable.value = true
                        },
                        onRegistered(r: any) {
                            r &&
                                setInterval(() => {
                                    r.update()
                                }, 5000) // Actualizar cada 5 segundos
                        }
                    })
                }
            })

            return { update, updateAvailable }
        }
    })
</script>

<style scoped></style>
