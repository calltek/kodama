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

            const update = async () => {
                if (updateSW) await updateSW(true)
                window.location.reload()
            }

            onMounted(async () => {
                if (!('serviceWorker' in navigator)) return

                // Check if there's already a SW waiting right now (e.g. page opened after deploy)
                const reg = await navigator.serviceWorker.getRegistration()
                if (reg?.waiting) {
                    updateAvailable.value = true
                    return
                }

                updateSW = registerSW({
                    onNeedRefresh() {
                        updateAvailable.value = true
                    },
                    onRegistered(r: any) {
                        if (!r) return

                        // Also check waiting after registration in case it raced
                        if (r.waiting) {
                            updateAvailable.value = true
                        }

                        // Listen for new SW installing while page is open
                        r.addEventListener('updatefound', () => {
                            const newSW = r.installing
                            if (!newSW) return
                            newSW.addEventListener('statechange', () => {
                                if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
                                    updateAvailable.value = true
                                }
                            })
                        })

                        setInterval(() => {
                            r.update()
                        }, 60000)
                    }
                })
            })

            return { update, updateAvailable }
        }
    })
</script>

<style scoped></style>
