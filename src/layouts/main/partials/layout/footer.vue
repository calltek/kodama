<template>
    <div id="k-footer" class="p-4 dark:bg-gray-800 bg-white hidden sm:flex">
        <div
            class="flex flex-col md:flex-row items-center justify-between text-sm w-full text-gray-800 dark:text-gray-200"
        >
            <div class="order-2 md:order-1">
                <span class="font-bold mr-1">&copy; 2023 - </span>
                <a
                    :href="copyright.link"
                    target="_blank"
                    class="uppercase text-hover-primary font-semibold"
                >
                    {{ copyright.text }}
                </a>
            </div>

            <ul class="font-semibold order-1 flex flex-row gap-4 select-none">
                <li class="whitespace-nowrap">
                    <a
                        class="cursor-pointer"
                        href="https://calltek.es/soporte"
                        target="_blank"
                    >
                        <k-icon icon="life-ring" class="mr-1" />
                        Soporte
                    </a>
                </li>

                <li class="whitespace-nowrap">
                    <a href="https://calltek.es/blog" target="_blank">
                        <k-icon icon="blog" class="mr-1" /> Noticias
                    </a>
                </li>

                <template v-if="changelogEnabled">
                    <li class="menu-item">
                        <router-link
                            :to="{ name: 'changelog' }"
                            class="menu-link px-2"
                        >
                            <k-icon icon="cat-space" class="mr-1" />
                            Registro de cambios
                        </router-link>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { changelogEnabled, copyright } from '@/helpers/config'

    export default defineComponent({
        name: 'KTFooter',
        setup() {
            return {
                changelogEnabled,
                copyright
            }
        }
    })
</script>
