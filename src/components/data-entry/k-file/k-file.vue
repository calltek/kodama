<template>
    <div @click="onPickFile">
        <slot></slot>
        <input
            ref="fileInput"
            type="file"
            class="hidden"
            :accept="accept"
            :multiple="multiple"
            :disabled="disabled"
            @change="onFilePicked"
        />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    defineProps({
        accept: {
            type: String,
            default: '*'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['upload'])

    const fileInput = ref()

    const onPickFile = () => {
        fileInput.value.click()
    }

    const onFilePicked = (event: any) => {
        const files = event.target.files

        if (files.length) {
            emit('upload', [...files])
            event.target.value = null
        }
    }
</script>
