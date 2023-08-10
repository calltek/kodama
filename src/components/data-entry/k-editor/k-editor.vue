<template>
    <div :class="[classes]">
        <label
            v-if="label"
            class="font-semibold text-gray-500 dark:text-white select-none mb-2 inline-block"
        >
            {{ label }}

            <span v-if="required" class="font-bold text-danger ml-1">*</span>
            <template v-if="firstError">
                <k-tooltip :content="firstError">
                    <k-icon icon="triangle-exclamation" class="ml-2" />
                </k-tooltip>
            </template>
        </label>

        <div
            v-if="editor"
            class="k-editor-wrapper"
            :style="{
                'max-height': `${maxHeight}px`
            }"
        >
            <div class="k-editor-content">
                <editor-content :editor="editor" />

                <div
                    v-if="mandatory"
                    class="k-editor-mandatory"
                    v-html="mandatoryHtml"
                />
            </div>

            <BubbleMenu :editor="editor" :keep-in-bounds="true">
                <div class="k-editor-bubble">
                    <k-button
                        link
                        size="sm"
                        icon="user"
                        :class="{ active: editor.isActive('bold') }"
                        @click="editor.chain().focus().toggleBold().run()"
                    />

                    <k-button
                        link
                        size="sm"
                        icon="italic"
                        :class="{ active: editor.isActive('italic') }"
                        @click="editor.chain().focus().toggleItalic().run()"
                    />

                    <k-button
                        link
                        size="sm"
                        icon="highlighter"
                        :class="{ active: editor.isActive('code') }"
                        @click="editor.chain().focus().toggleCode().run()"
                    />
                </div>
            </BubbleMenu>

            <div class="k-editor-menu">
                <k-button
                    v-tooltip="{ content: 'Negrita', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="bold"
                    :class="{ active: editor.isActive('bold') }"
                    @click="editor.chain().focus().toggleBold().run()"
                />

                <k-button
                    v-tooltip="{ content: 'Cursiva', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="italic"
                    :class="{ active: editor.isActive('italic') }"
                    @click="editor.chain().focus().toggleItalic().run()"
                />

                <k-button
                    v-tooltip="{ content: 'Destacado', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="highlighter"
                    :class="{ active: editor.isActive('code') }"
                    @click="editor.chain().focus().toggleCode().run()"
                />

                <k-button
                    v-tooltip="{ content: 'Título 1', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    :class="{
                        active: editor.isActive('heading', { level: 1 })
                    }"
                    @click="
                        editor.chain().focus().setHeading({ level: 1 }).run()
                    "
                >
                    H1
                </k-button>

                <k-button
                    v-tooltip="{ content: 'Título 2', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    :class="{
                        active: editor.isActive('heading', { level: 2 })
                    }"
                    @click="
                        editor.chain().focus().setHeading({ level: 2 }).run()
                    "
                >
                    H2
                </k-button>

                <k-button
                    v-tooltip="{ content: 'Título 3', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    :class="{
                        active: editor.isActive('heading', { level: 3 })
                    }"
                    @click="
                        editor.chain().focus().setHeading({ level: 3 }).run()
                    "
                >
                    H3
                </k-button>

                <k-button
                    v-tooltip="{ content: 'Lista (ord)', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="list-ul"
                    :class="{ active: editor.isActive('bulletList') }"
                    @click="editor.chain().focus().toggleBulletList().run()"
                />

                <k-button
                    v-tooltip="{ content: 'Lista (num)', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="list-ol"
                    :class="{ active: editor.isActive('orderedList') }"
                    @click="editor.chain().focus().toggleOrderedList().run()"
                />

                <k-button
                    v-tooltip="{ content: 'Cita', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="quote-right"
                    :class="{ active: editor.isActive('blockquote') }"
                    @click="editor.chain().focus().toggleBlockquote().run()"
                />

                <k-button
                    v-tooltip="{ content: 'Código', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="code"
                    :class="{ active: editor.isActive('codeBlock') }"
                    @click="editor.chain().focus().toggleCodeBlock().run()"
                />

                <k-button
                    v-tooltip="{ content: 'Divisor', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="arrows-alt-h"
                    @click="editor.chain().focus().setHorizontalRule().run()"
                />

                <k-button
                    v-tooltip="{
                        content: 'Imagen externa',
                        placement: 'bottom'
                    }"
                    color="primary"
                    size="sm"
                    icon="images"
                    @click="addImage"
                />

                <div class="ml-auto" />

                <k-button
                    v-tooltip="{
                        content: 'Alinear a la izquierda',
                        placement: 'bottom'
                    }"
                    color="primary"
                    size="sm"
                    icon="align-left"
                    :class="{ active: editor.isActive({ textAlign: 'left' }) }"
                    @click="editor.chain().focus().setTextAlign('left').run()"
                />

                <k-button
                    v-tooltip="{
                        content: 'Alinear al centro',
                        placement: 'bottom'
                    }"
                    color="primary"
                    size="sm"
                    icon="align-center"
                    :class="{
                        active: editor.isActive({ textAlign: 'center' })
                    }"
                    @click="editor.chain().focus().setTextAlign('center').run()"
                />

                <k-button
                    v-tooltip="{
                        content: 'Alinear a la derecha',
                        placement: 'bottom'
                    }"
                    color="primary"
                    size="sm"
                    icon="align-center"
                    :class="{ active: editor.isActive({ textAlign: 'right' }) }"
                    @click="editor.chain().focus().setTextAlign('right').run()"
                />

                <k-button
                    v-tooltip="{ content: 'Justificar', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="align-justify"
                    :class="{
                        active: editor.isActive({ textAlign: 'justify' })
                    }"
                    @click="
                        editor.chain().focus().setTextAlign('justify').run()
                    "
                />

                <div class="ml-auto" />

                <k-button
                    v-tooltip="{ content: 'Deshacer', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="undo"
                    @click="editor.commands.undo"
                />

                <k-button
                    v-tooltip="{ content: 'Rehacer', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="redo"
                    @click="editor.commands.redo"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        PropType,
        computed,
        defineComponent,
        onBeforeUnmount,
        onMounted,
        ref
    } from 'vue'

    import { Editor, EditorContent, BubbleMenu } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
    import Link from '@tiptap/extension-link'
    import TextAlign from '@tiptap/extension-text-align'
    // import Image from '@tiptap/extension-image'
    import Placeholder from '@tiptap/extension-placeholder'
    import { ResizableMedia } from './resizableMedia'

    import sanitizeHtml from 'sanitize-html'
    import { ErrorObject } from '@vuelidate/core'

    export default defineComponent({
        name: 'AEditor',
        components: {
            EditorContent,
            BubbleMenu
        },
        props: {
            modelValue: {
                type: String,
                default: ''
            },
            helpPosition: {
                type: String,
                default: 'bottom'
            },
            mandatory: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: 'Escribe algo...'
            },
            maxHeight: {
                type: Number,
                default: 600
            },
            minHeight: {
                type: Number,
                default: 200
            },
            label: {
                type: String,
                default: ''
            },
            required: {
                type: Boolean,
                default: false
            },
            errors: {
                type: Array as PropType<ErrorObject[]>,
                required: false,
                default: () => [],
                description: 'Errores de validación'
            },
            status: {
                type: String,
                default: '',
                options: ['warning', 'success', 'danger'],
                description: 'Color de estado del input'
            }
        },
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const editor: any = ref()
            const html = ref(props.modelValue)

            const model = computed({
                get: () => props.modelValue,
                set: (value) => {
                    ctx.emit('update:modelValue', value)
                }
            })

            const mandatoryHtml = computed(() => {
                if (props.mandatory) {
                    return sanitizeHtml(props.mandatory, {
                        allowedTags: [
                            'a',
                            'b',
                            'i',
                            'em',
                            'pre',
                            'code',
                            'strong',
                            'br',
                            'div',
                            'center'
                        ],
                        allowedAttributes: {
                            a: ['href', 'title', 'style']
                        }
                    })
                }

                return ''
            })

            const addImage = () => {
                const url = window.prompt('URL')

                if (url) {
                    editor.value?.commands.setMedia({
                        'src': url,
                        'media-type': 'img',
                        'width': '200',
                        'height': '200'
                    })
                }
            }

            const firstError = computed(() => {
                const error =
                    props.errors.length > 0 ? props.errors[0].$message : ''
                return error.toString()
            })

            const classes = computed(() => {
                const classes = ['k-editor']

                if (props.errors.length > 0) {
                    classes.push('k-editor-danger')
                } else if (props.status) {
                    classes.push(`k-editor-${props.status}`)
                }

                return classes
            })

            onMounted(() => {
                editor.value = new Editor({
                    content: html.value,
                    extensions: [
                        StarterKit.configure({
                            heading: {
                                levels: [1, 2, 3, 4, 5, 6]
                            }
                        }),
                        Link.configure({
                            protocols: ['tel', 'mailto']
                        }),
                        TextAlign.configure({
                            types: ['heading', 'paragraph', 'image']
                        }),

                        Placeholder.configure({
                            placeholder: props.placeholder
                        }),
                        ResizableMedia
                    ],
                    editorProps: {
                        attributes: {
                            style: `min-height: calc(${props.minHeight}px - 40px - 52px);`
                        }
                    },
                    onUpdate: () => {
                        html.value = editor.value?.getHTML() || ''
                        ctx.emit(
                            'update:modelValue',
                            html.value + props.mandatory
                        )
                    }
                })

                html.value = editor.value?.getHTML() || ''

                ctx.emit('update:modelValue', html.value + props.mandatory)
            })

            onBeforeUnmount(() => {
                editor.value?.destroy()
            })

            return {
                editor,
                model,
                mandatoryHtml,
                addImage,
                firstError,
                classes
            }
        }
    })
</script>

<style lang="scss">
    .k-editor {
        .k-editor-wrapper {
            @apply bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition-all overflow-y-auto flex flex-col;

            &:focus-within {
                @apply ring-2 ring-inset ring-primary bg-white dark:bg-gray-800;

                .k-editor-menu {
                    @apply border-gray-700 bg-transparent dark:bg-transparent;

                    .k-button.active {
                        @apply text-white bg-gray-700 opacity-100;
                    }

                    .k-button:not(.active) {
                        @apply text-gray-700 dark:text-white;
                    }
                }
            }

            .k-editor-content {
                @apply p-5 flex-1;

                * {
                    font-size: 14px;
                }

                p,
                div,
                span {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                }

                p {
                    margin-bottom: 0.5rem;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-weight: bold;
                }

                h1 {
                    font-size: 32px;
                }

                h2 {
                    font-size: 30px;
                }

                h3 {
                    font-size: 26px;
                }

                h4 {
                    font-size: 24px;
                }

                h5 {
                    font-size: 20px;
                }

                h6 {
                    font-size: 18px;
                }

                .ProseMirror {
                    @apply outline-none;

                    p.is-editor-empty:first-child::before {
                        content: attr(data-placeholder);
                        @apply text-gray-200 float-left h-0 pointer-events-none;
                    }

                    img {
                        display: inline-block;
                        max-width: 100%;
                        max-height: 100%;
                    }
                }

                .k-editor-mandatory {
                    @apply p-2 -mx-2 border border-transparent border-dashed hover:border-gray-300 dark:hover:border-gray-700 rounded-xl mt-4 relative;

                    &:hover::before {
                        content: 'Contenido obligatorio';

                        @apply text-gray-500 flex items-center justify-center font-bold absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-900 bg-opacity-90 rounded-xl cursor-not-allowed;
                    }
                }
            }

            .k-editor-menu {
                @apply z-0 flex flex-row border-t-2 border-gray-200 border-dashed py-2 mx-5 gap-1 sticky bottom-0 left-0 select-none dark:border-gray-700;

                .k-button.active {
                    @apply text-white bg-gray-700 border-gray-700 opacity-60;
                }

                .k-button:not(.active) {
                    @apply bg-transparent text-gray-400 border-gray-400 border-transparent;
                }
            }

            .k-editor-bubble {
                @apply flex flex-row gap-1;

                .k-button.active {
                    @apply text-white bg-primary;
                }

                .k-button:not(.active) {
                    @apply bg-transparent text-white hover:text-primary border-transparent;
                }
            }

            .tippy-box {
                @apply bg-gray-900 dark:text-white;

                .tippy-arrow:before {
                    @apply text-gray-900;
                }
            }
        }

        /// /////////////////
        /// ERROR
        /// /////////////////

        &.k-editor-danger {
            .k-editor-wrapper {
                @apply ring-2 ring-danger focus:ring-danger ring-inset;
            }

            label {
                @apply text-danger;
            }
        }

        &.k-editor-success {
            .k-editor-wrapper {
                @apply ring-2 ring-success focus:ring-success ring-inset;
            }

            label {
                @apply text-success;
            }
        }

        &.k-editor-warning {
            .k-editor-wrapper {
                @apply ring-2 ring-warning focus:ring-warning ring-inset;
            }

            label {
                @apply text-warning;
            }
        }
    }
</style>
