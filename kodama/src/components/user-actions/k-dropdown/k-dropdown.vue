<template>
    <div>
        <div
            :data-kt-menu-trigger="!disabled ? 'click' : ''"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
        >
            <slot></slot>
        </div>

        <div
            :id="uniq"
            ref="dropdown"
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold py-4 fs-6 overflow-auto noselect"
            data-kt-menu="true"
            :style="{ 'max-width': `${width}px`, 'max-height': `${height}px` }"
        >
            <slot name="menu"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, Ref, reactive, onMounted } from 'vue'
    import { MenuComponent } from '../../../assets/ts/components'

    export default defineComponent({
        name: 'KDropdown',
        autoload: true,
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            width: {
                type: Number,
                default: 250
            },
            height: {
                type: Number,
                default: 400
            }
        },
        emits: ['click'],
        setup(_props, ctx) {
            const uniq = 'id' + new Date().getTime()

            const dropdown: Ref<HTMLElement | undefined> = ref()
            let instance: any = reactive({})

            onMounted(() => {
                if (dropdown.value) {
                    instance = new MenuComponent(dropdown.value, {
                        dropdown: {
                            hoverTimeout: 200,
                            zindex: 115
                        },
                        accordion: {
                            slideSpeed: 250,
                            expand: false
                        }
                    })
                }
            })

            const click = (key: string) => {
                if (key) ctx.emit('click', key)

                if (dropdown.value) {
                    instance = MenuComponent.getInstance(dropdown.value)
                    instance.hide(dropdown.value)
                }
            }

            return { dropdown, click, uniq }
        }
    })
</script>
