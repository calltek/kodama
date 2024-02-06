<template>
    <div
        @dragenter.prevent="setActive"
        @dragover.prevent="setActive"
        @dragleave.prevent="setInactive"
        @drop.prevent="onDrop"
    >
        <slot name="dropzone" v-bind="{ active }"></slot>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const emit = defineEmits(['drop'])

    let active = ref(false)
    let inActiveTimeout: any = null

    function setActive() {
        active.value = true
        clearTimeout(inActiveTimeout)
    }
    function setInactive() {
        inActiveTimeout = setTimeout(() => {
            active.value = false
        }, 50)
    }

    function onDrop(e: any) {
        setInactive()
        emit('drop', [...e.dataTransfer.files])
    }
</script>
