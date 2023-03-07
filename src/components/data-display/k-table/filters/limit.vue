<template>
    <div>
        <k-button
            :loading="loading"
            :disabled="loading"
            size="sm"
            class="mr-2"
            @click="loadMore()"
        >
            Cargar más
        </k-button>

        <k-tooltip :visible="visible">
            <k-button size="sm" @click="visible = !visible">
                <k-icon icon="ellipsis" />
            </k-button>

            <template #content>
                <ul class="text-center">
                    <li>
                        <a
                            class="dropdown-item p-3 cursor-pointer"
                            :class="{ active: value === 10 }"
                            @click="limit(10)"
                        >
                            10
                        </a>
                    </li>
                    <li>
                        <a
                            class="dropdown-item p-3 cursor-pointer"
                            :class="{ active: value === 20 }"
                            @click="limit(20)"
                        >
                            20
                        </a>
                    </li>
                    <li>
                        <a
                            class="dropdown-item p-3 cursor-pointer"
                            :class="{ active: value === 30 }"
                            @click="limit(30)"
                        >
                            30
                        </a>
                    </li>
                    <li>
                        <a
                            class="dropdown-item p-3 cursor-pointer"
                            :class="{ active: value === 50 }"
                            @click="limit(50)"
                        >
                            50
                        </a>
                    </li>
                    <li>
                        <a
                            class="dropdown-item p-3 cursor-pointer"
                            :class="{ active: value === 100 }"
                            @click="limit(100)"
                        >
                            100
                        </a>
                    </li>
                </ul>
            </template>
        </k-tooltip>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'

    export default defineComponent({
        name: 'KTableLimit',

        props: {
            value: {
                type: Number,
                default: 20
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        emits: ['limit', 'nextPage'],
        setup(props, ctx) {
            const visible = ref(false)

            const limit = (value: number) => {
                ctx.emit('limit', value)
            }

            const loadMore = () => {
                ctx.emit('nextPage')
            }

            return { limit, loadMore, visible }
        }
    })
</script>

<style scoped>
    .hide-after:after {
        display: none;
    }
</style>
