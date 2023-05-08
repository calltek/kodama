<template>
    <div class="k-dropzone">
        <label
            :for="id"
            :class="{
                'k-dropzone--loading': loading,
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
                v-if="modelValue || loading"
                class="flex flex-col max-w-full items-center justify-center pt-5 pb-6"
            >
                <k-button
                    v-if="!loading"
                    size="xs"
                    icon="times"
                    color="gray"
                    class="absolute top-0 right-0 m-2 z-20"
                    @click="onFileReset(true)"
                >
                </k-button>

                <div
                    v-if="loading"
                    class="absolute top-0 left-0 h-full w-full bg-opacity-60 bg-gray-900 z-20 flex items-center justify-center text-white"
                >
                    <k-icon icon="spinner-third" type="fas" :size="30" spin />
                </div>
                <div
                    class="text-sm flex justify-center max-w-full flex-col font-semibold text-center uppercase z-10 absolute top-0 left-0 bg-gray-100 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 w-full h-full"
                >
                    <k-icon
                        icon="file"
                        type="far"
                        :size="60"
                        class="mb-3 text-gray-800 dark:text-gray-100"
                    />

                    <div
                        v-if="file.name"
                        class="text-xs flex text-center flex-col px-5 whitespace-nowrap w-full"
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
                    <span class="font-semibold">Haz click</span> o arrastra tus
                    ficheros
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                    <slot v-if="hasSlot('default')"> {{ maxSize }} MB </slot>
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
                @change="onFileChange($event)"
            />
        </label>
    </div>
</template>

<script lang="ts">
    import { uid } from '@/helpers/utils'
    import { computed, defineComponent, ref } from 'vue'

    export default defineComponent({
        name: 'KDropzone',
        props: {
            modelValue: {
                type: String,
                default: ''
            },
            maxSize: {
                type: Number,
                default: 5
            },
            accept: {
                type: Array as () => string[],
                default: () => ['jpg', 'jpeg', 'png', 'gif', 'webp', 'pdf']
            },
            removable: {
                type: Boolean,
                default: true
            },
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        emits: ['delete', 'upload', 'update:modelValue'],
        setup(props, ctx) {
            const id = uid()
            const hasSlot = (name: string) => !!ctx.slots[name]
            const errors = ref<string[]>([])

            const file = ref({
                name: '',
                size: 0,
                type: '',
                fileExtention: '',
                url: '',
                isImage: false
            })

            const validExtensions = computed(() => {
                return props.accept
                    .map((ext) => '.' + ext.toLowerCase())
                    .join(',')
            })

            const textensions = computed(() => {
                return props.accept.map((ext) => ext.toLowerCase()).join(', ')
            })

            const isModelValueImage = computed(() => {
                // tramp
                return true

                //check base64 file type
                if (props.modelValue.includes('data:image')) {
                    return true
                }

                // check url
                const ext = props.modelValue.split('.').pop() || ''
                if (
                    ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)
                ) {
                    return true
                }

                return false
            })

            const onFileChange = (e: any) => {
                if (e.target.files && e.target.files[0]) {
                    errors.value = []

                    const efile = e.target.files[0]

                    if (isFileValid(efile)) {
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
                        }
                    } else {
                        onFileReset(false)
                    }
                }
            }

            const onFileReset = (clearErrors = false) => {
                file.value = {
                    name: '',
                    size: 0,
                    type: '',
                    fileExtention: '',
                    url: '',
                    isImage: false
                }

                ctx.emit('update:modelValue', '')
                ctx.emit('delete')

                if (clearErrors) {
                    errors.value = []
                }
            }

            const isFileSizeValid = (fileSize: number) => {
                if (fileSize > props.maxSize) {
                    errors.value.push(
                        `El fichero debe pesar menos de ${props.maxSize} MB`
                    )
                }
            }

            const isFileTypeValid = (fileExtension: string) => {
                if (!props.accept.includes(fileExtension)) {
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

            return {
                id,
                file,
                hasSlot,
                validExtensions,
                textensions,
                onFileChange,
                errors,
                onFileReset,
                isModelValueImage
            }
        }
    })
</script>

<style scoped lang="scss">
    .k-dropzone {
        @apply flex items-center justify-center w-full;

        > label {
            @apply flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative select-none overflow-hidden p-4 aspect-square;
        }

        > label.k-dropzone--loading {
            @apply bg-gray-100 dark:bg-gray-700;
        }

        > label.k-dropzone--error {
            @apply border-danger dark:border-danger;
        }

        > label.k-dropzone--disabled {
            @apply opacity-40 cursor-not-allowed;
        }
    }
</style>
