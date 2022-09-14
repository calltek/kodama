<template>
    <router-link
        v-if="!item.disabled && !item.pages"
        class="menu-link"
        active-class="active"
        :to="!item.disabled ? item.route : {}"
    >
        <span v-if="item.icon && parent" class="menu-icon">
            <i :class="[item.icon]" class="bi fs-3"></i>
        </span>
        <span v-else-if="!parent" class="menu-bullet">
            <span class="bullet bullet-dot"></span>
        </span>
        <span class="menu-title">{{ item.title }}</span>
    </router-link>
    <span
        v-else
        :class="[
            'menu-link',
            item.disabled ? 'opacity-40 cursor-not-allowed' : ''
        ]"
    >
        <span v-if="item.icon && parent" class="menu-icon">
            <i :class="[item.icon]" class="bi fs-3"></i>
        </span>
        <span v-else class="menu-bullet">
            <span class="bullet bullet-dot"></span>
        </span>
        <span class="menu-title">{{ item.title }}</span>
        <span v-if="item.pages" class="menu-arrow"></span>
    </span>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import { MenuItem } from '../../../../../config/_menu'
    export default defineComponent({
        name: 'MenuLink',
        props: {
            item: {
                type: Object as PropType<MenuItem>,
                required: true
            },
            parent: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            return {}
        }
    })
</script>

<style scoped></style>
