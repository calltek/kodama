<template>
    <div class="k-dropzone">
        <div
            class="k-dropzone-wrapper"
            :class="{
                'k-dropzone--loading': loading,
                'k-dropzone--error': errors.length > 0,
                'k-dropzone--disabled': disabled,
                [`k-dropzone-${size}`]: true
            }"
        >
            <label v-if="hasLabel" class="k-dropzone-label">
                <slot v-if="hasSlot('default')" />
                <template v-else>{{ label }}</template>

                <span v-if="required" class="font-bold text-danger ml-1"
                    >*</span
                >
                <template v-if="errors.length > 0">
                    <k-tooltip :content="errors[0]">
                        <k-icon icon="triangle-exclamation" class="ml-2" />
                    </k-tooltip>
                </template>
            </label>

            <label
                :for="!locked ? id : ''"
                class="k-dropzone-input"
                :class="{
                    'k-dropzone--loading': isLoading,
                    'k-dropzone--error': errors.length > 0,
                    'k-dropzone--disabled': disabled
                }"
                :style="{
                    'background': isModelValueImage
                        ? `url('${modelValue}') no-repeat center center`
                        : '',
                    'background-size': 'cover'
                }"
            >
                <div
                    v-if="modelValue || isLoading"
                    class="flex flex-col max-w-full items-center justify-center pt-5 pb-6"
                >
                    <k-button
                        v-if="!isLoading"
                        size="xs"
                        icon="times"
                        color="gray"
                        class="absolute top-0 right-0 m-2 z-20"
                        @click="onFileReset(true, true)"
                        @mouseover="locked = true"
                        @mouseout="locked = false"
                    >
                    </k-button>

                    <div
                        v-if="isLoading"
                        class="absolute top-0 left-0 h-full w-full bg-opacity-60 bg-gray-900 z-20 flex items-center justify-center text-white"
                    >
                        <k-icon
                            icon="spinner-third"
                            type="fas"
                            :size="30"
                            spin
                        />
                    </div>
                    <div
                        class="text-sm flex justify-center max-w-full flex-col font-semibold text-center uppercase z-10 absolute top-0 left-0 w-full h-full transition-all"
                        :class="{
                            'opacity-0 hover:opacity-100 hover:bg-opacity-50 hover:dark:bg-opacity-50 hover:bg-gray-100 hover:dark:bg-gray-900':
                                isModelValueImage,
                            'bg-gray-200 dark:bg-gray-700 ': !isModelValueImage
                        }"
                    >
                        <slot
                            name="selectedFile"
                            v-bind="{ name: file.name, size: file.size }"
                        >
                            <k-icon
                                icon="file"
                                type="far"
                                :size="60"
                                class="mb-3 text-gray-800 dark:text-gray-100"
                            />

                            <div
                                v-if="file.name"
                                class="text-sm flex text-center flex-col px-5 whitespace-nowrap w-full"
                            >
                                <span
                                    class="uppercase text-ellipsis overflow-hidden text-gray-800 dark:text-gray-100 px-3"
                                >
                                    {{ file.name }}
                                </span>
                                <span
                                    class="font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {{ file.size }}MB
                                </span>
                            </div>
                        </slot>
                    </div>
                </div>
                <div
                    v-else
                    class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                    <k-tooltip v-if="errors.length > 0">
                        <template #content>
                            <div class="text-center">
                                {{ errors[0] }}
                            </div>
                        </template>

                        <k-icon
                            icon="triangle-exclamation"
                            type="far"
                            :size="30"
                            class="text-danger mb-3"
                        />
                    </k-tooltip>
                    <k-icon
                        v-else
                        icon="upload"
                        type="far"
                        :size="30"
                        class="text-gray-400 mb-3"
                    />

                    <p
                        class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center"
                    >
                        <slot name="placeholder">
                            <span class="font-semibold">Haz click</span> o
                            arrastra tus ficheros
                        </slot>
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        <slot v-if="hasSlot('maxSize')" name="maxSize">
                            {{ maxSize }} MB
                        </slot>
                        <template v-else>
                            <div class="flex text-center flex-col">
                                <div class="uppercase">
                                    {{ textensions }}
                                </div>
                                <div class="font-semibold">
                                    ({{ maxSize }}MB MAX)
                                </div>
                            </div>
                        </template>
                    </p>
                </div>
                <input
                    :id="id"
                    type="file"
                    class="hidden"
                    :accept="validExtensions"
                    :disabled="disabled"
                    onclick="this.value=null;"
                    @change="onFileChange($event)"
                />
            </label>
        </div>
    </div>
</template>

<script lang="ts">
    import { uid } from '@/helpers/utils'
    import { computed, defineComponent, ref, watch } from 'vue'
    import props from './k-dropzone.props'

    export default defineComponent({
        name: 'KDropzone',
        props,
        emits: ['delete', 'upload', 'update:modelValue'],
        setup(props, ctx) {
            const id = uid()
            const hasSlot = (name: string) => !!ctx.slots[name]
            const errors = ref<string[]>([])
            const internalLoading = ref(false)

            const file = ref({
                name: '',
                size: 0,
                type: '',
                fileExtention: '',
                url: '',
                isImage: false
            })

            const locked = ref(false)

            const validExtensions = computed(() => {
                return props.accept
                    .map((ext) => '.' + ext.toLowerCase())
                    .join(',')
            })

            const textensions = computed(() => {
                return props.accept.map((ext) => ext.toLowerCase()).join(', ')
            })

            const isModelValueImage = computed(() => {
                if (!props.modelValue) return false

                const extension = (
                    props.modelValue.split('.').pop() || ''
                ).split('?')[0]

                const imageExtension = [
                    'jpg',
                    'jpeg',
                    'png',
                    'gif',
                    'webp',
                    'svg'
                ]

                const isImageFile = imageExtension.includes(
                    file.value.fileExtention
                )

                const modelImageFile = imageExtension.includes(extension)

                return isImageFile || modelImageFile
            })

            const onFileChange = (e: any) => {
                if (e.target.files && e.target.files[0]) {
                    errors.value = []

                    const efile = e.target.files[0]

                    if (isFileValid(efile)) {
                        internalLoading.value = true

                        // Get file size
                        const fileSize =
                            Math.round((efile.size / 1024 / 1024) * 100) / 100

                        // Get file extension
                        const fileExtention = efile.name.split('.').pop()

                        // Get file name
                        const fileName = efile.name.split('.').shift()

                        // Check if file is an image
                        const isImage = [
                            'jpg',
                            'jpeg',
                            'png',
                            'gif',
                            'webp',
                            'svg'
                        ].includes(fileExtention)

                        let reader = new FileReader()
                        reader.readAsDataURL(efile)
                        reader.onload = function () {
                            // Set file data
                            file.value = {
                                name: fileName,
                                size: fileSize,
                                type: efile.type,
                                fileExtention: fileExtention,
                                isImage: isImage,
                                url: reader.result
                                    ? reader.result.toString()
                                    : ''
                            }

                            ctx.emit('update:modelValue', file.value.url)
                            ctx.emit('upload', efile)

                            internalLoading.value = false
                        }
                    } else {
                        onFileReset(false, false)
                    }
                }
            }

            const onFileReset = (clearErrors = false, emitDelete = false) => {
                const currentUrl = structuredClone(props.modelValue)

                file.value = {
                    name: '',
                    size: 0,
                    type: '',
                    fileExtention: '',
                    url: '',
                    isImage: false
                }

                ctx.emit('update:modelValue', '')

                if (emitDelete) ctx.emit('delete', currentUrl)

                if (clearErrors) {
                    errors.value = []
                }

                setTimeout(() => {
                    locked.value = false
                }, 300)
            }

            const isFileSizeValid = (fileSize: number) => {
                if (fileSize > props.maxSize) {
                    errors.value.push(
                        `El fichero debe pesar menos de ${props.maxSize} MB`
                    )
                }
            }

            const isFileTypeValid = (fileExtension: string) => {
                if (
                    !props.accept
                        .map((a) => a.toLowerCase())
                        .includes(fileExtension.toLowerCase())
                ) {
                    errors.value.push(
                        `Extensión inválida. Los ficheros soportados son: ${props.accept}`
                    )
                }
            }

            const isFileValid = (file: File) => {
                isFileSizeValid(
                    Math.round((file.size / 1024 / 1024) * 100) / 100
                )

                isFileTypeValid(file.name.split('.').pop() || '')

                if (errors.value.length === 0) {
                    return true
                } else {
                    return false
                }
            }

            const isLoading = computed(() => {
                return internalLoading.value || props.loading
            })

            const hasLabel = computed(() => {
                return props.label || hasSlot('default')
            })

            watch(
                () => props.id,
                () => {
                    file.value.name = ''
                }
            )

            return {
                id,
                file,
                hasSlot,
                validExtensions,
                textensions,
                onFileChange,
                errors,
                onFileReset,
                isModelValueImage,
                hasLabel,
                locked,
                isLoading
            }
        }
    })
</script>

<style scoped lang="scss">
    .k-dropzone {
        @apply flex flex-col w-full;

        .k-dropzone-wrapper {
            label {
                @apply block select-none text-sm text-gray-500 dark:text-white font-semibold;
            }

            label.k-dropzone-label {
                @apply mb-2;
            }

            .k-dropzone-input {
                @apply flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative select-none overflow-hidden p-4 aspect-square;
            }

            &.k-dropzone--loading {
                @apply bg-gray-100 dark:bg-gray-700;
            }

            &.k-dropzone--error {
                label {
                    @apply text-danger dark:text-danger;
                }
                .k-dropzone-input {
                    @apply border-danger dark:border-danger;
                }
            }

            &.k-dropzone--disabled {
                .k-dropzone-input {
                    @apply opacity-40 cursor-not-allowed;
                }
            }

            /// /////////////////
            /// SIZES
            /// /////////////////
            ///
            &.k-dropzone-xs {
                label {
                    @apply text-sm;
                }
            }

            &.k-dropzone-sm {
                label {
                    @apply text-base;
                }
            }

            &.k-dropzone-md {
                label {
                    @apply text-base;
                }
            }

            &.k-dropzone-lg {
                label {
                    @apply text-lg;
                }
            }
        }
    }
</style>
