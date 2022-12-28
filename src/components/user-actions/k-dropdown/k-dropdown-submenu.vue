<template>
    <div
        class="menu-item px-3 menu-accordion"
        :data-kt-menu-trigger="'click'"
        :data-kt-menu-placement="'left-start'"
    >
        <div class="menu-link px-3 bg-transparent">
            <template v-if="!hasSlot('title')">
                {{ title }}
            </template>
            <slot v-else name="title"></slot>
            <span class="menu-arrow ms-auto"></span>
        </div>

        <div
            class="menu-sub menu-sub-dropdown menu-accordion-dropdown py-3 mx-n3 px-3"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KDropdownSubmenu',
        autoload: true,
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        setup(_props, { slots }) {
            const hasSlot = (name: string) => !!slots[name]

            return { hasSlot }
        }
    })
</script>

<style scoped lang="scss">
    .menu-accordion .menu-arrow {
        transition: all 0.1s linear;
    }

    .menu-accordion.show .menu-arrow {
        transform: rotate(90deg);
    }

    .menu-accordion-dropdown {
        overflow: hidden;
        display: none !important;
        inset: auto !important;
        transform: none !important;
        background-color: var(--bs-light);
        position: relative !important;
        border-radius: 0 !important;
        box-shadow: none;
        border-top: 1px solid var(--bs-gray-300);
        box-shadow: 1px 1px 1px black;
        animation: none !important;
    }

    .menu-accordion-dropdown.show {
        display: flex !important;
    }
</style>
