<template>
    <div class="btn-group dropup">
        <k-button
            :loading="loading"
            :disabled="loading"
            size="sm"
            @click="loadMore()"
        >
            Cargar más
        </k-button>

        <k-button
            size="sm"
            class="dropdown-toggle hide-after px-4"
            :data-bs-toggle="!loading ? 'dropdown' : ''"
        >
            <i class="fad fa-ellipsis" />
        </k-button>

        <!-- <button
            type="button"
            class="btn btn-sm btn-primary dropdown-toggle hide-after px-4"
            data-bs-toggle="dropdown"
        >
            <i class="fad fa-ellipsis" />
        </button> -->

        <!-- <a data-bs-toggle="dropdown"> </a> -->

        <ul
            class="dropdown-menu text-center p-0 overflow-hidden"
            style="min-width: auto"
        >
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
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import KButton from '../../../user-actions/k-button/k-button.vue'

    export default defineComponent({
        name: 'KTableLimit',
        components: {
            KButton
        },
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
            const limit = (value: number) => {
                ctx.emit('limit', value)
            }

            const loadMore = () => {
                ctx.emit('nextPage')
            }

            return { limit, loadMore }
        }
    })
</script>

<style scoped>
    .hide-after:after {
        display: none;
    }
</style>