<template>
    <k-button
        outline
        color="gray"
        :icon="darkMode ? 'moon' : 'sun'"
        icon-type="fal"
        @click="toggleTheme"
    />
</template>

<script type="module" lang="ts">
    import { useConfig } from '@/store'
    import { computed, defineComponent } from 'vue'

    export default defineComponent({
        name: 'KTheme',
        setup() {
            const darkMode = computed(() => {
                const config = useConfig()
                return config.get('darkMode')
            })

            const toggleTheme = () => {
                const config = useConfig()

                if (darkMode.value) {
                    config.set('darkMode', false)

                    document
                        .getElementsByTagName('html')[0]
                        .classList.remove('dark')
                    document
                        .getElementsByTagName('html')[0]
                        .classList.add('light')
                } else {
                    config.set('darkMode', true)

                    document
                        .getElementsByTagName('html')[0]
                        .classList.remove('light')
                    document
                        .getElementsByTagName('html')[0]
                        .classList.add('dark')
                }
            }

            return { toggleTheme, darkMode }
        }
    })
</script>

<style scoped></style>
