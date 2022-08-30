<template>
    <tippy
        v-if="updateAvailable"
        content="🍾 Actualización disponible"
        placement="right"
    >
        <a
            href="#"
            class="btn btn-icon btn-sm pulse pulse-success mb-n2"
            @click="update"
        >
            <div class="pulse-ring"></div>
            <i
                class="fad fa-cloud-arrow-down text-success text-hover-primary fs-4"
            />
        </a>
    </tippy>
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
                                }, 60000)
                        }
                    })
                }
            })

            return { update, updateAvailable }
        }
    })
</script>

<style scoped></style>
