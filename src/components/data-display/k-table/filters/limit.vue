<template>
    <div class="flex flex-row justify-center gap-4">
        <k-button
            v-if="type === 'infinite'"
            :loading="loading"
            :disabled="loading"
            @click="$emit('loadMore')"
        >
            Cargar más
        </k-button>

        <k-button
            v-if="type === 'manual'"
            icon="chevrons-left"
            :disabled="loading || page <= 1"
            @click="$emit('prev')"
            color="gray"
        >
        </k-button>

        <k-dropdown placement="top">
            <k-button>
                <k-icon v-if="type === 'infinite'" icon="ellipsis" />
                <span v-else>{{ page }}</span>
            </k-button>

            <template #content>
                <k-dropdown-menu :selected="value === 10">
                    <a
                        class="dropdown-item p-3 cursor-pointer"
                        :class="{ active: value === 10 }"
                        @click="limit(10)"
                    >
                        10
                    </a>
                </k-dropdown-menu>
                <k-dropdown-menu :selected="value === 20">
                    <a
                        class="dropdown-item p-3 cursor-pointer"
                        :class="{ active: value === 20 }"
                        @click="limit(20)"
                    >
                        20
                    </a>
                </k-dropdown-menu>
                <k-dropdown-menu :selected="value === 30">
                    <a
                        class="dropdown-item p-3 cursor-pointer"
                        :class="{ active: value === 30 }"
                        @click="limit(30)"
                    >
                        30
                    </a>
                </k-dropdown-menu>
                <k-dropdown-menu :selected="value === 50">
                    <a
                        class="dropdown-item p-3 cursor-pointer"
                        :class="{ active: value === 50 }"
                        @click="limit(50)"
                    >
                        50
                    </a>
                </k-dropdown-menu>
                <k-dropdown-menu :selected="value === 100">
                    <a
                        class="dropdown-item p-3 cursor-pointer"
                        :class="{ active: value === 100 }"
                        @click="limit(100)"
                    >
                        100
                    </a>
                </k-dropdown-menu>
            </template>
        </k-dropdown>

        <k-button
            v-if="type === 'manual'"
            icon="chevrons-right"
            color="gray"
            :disabled="loading || isLastPage"
            @click="$emit('next')"
        >
        </k-button>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, computed } from 'vue'

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
            },
            type: {
                type: String as () => 'infinite' | 'manual',
                default: 'infinite'
            },
            page: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            }
        },
        emits: ['limit', 'loadMore', 'next', 'prev'],
        setup(props, ctx) {
            const visible = ref(false)

            const limit = (value: number) => {
                ctx.emit('limit', value)
            }

            const isLastPage = computed(() => {
                return props.page * props.value >= props.total
            })

            return { limit, visible, isLastPage }
        }
    })
</script>

<style scoped>
    .hide-after:after {
        display: none;
    }
</style>
