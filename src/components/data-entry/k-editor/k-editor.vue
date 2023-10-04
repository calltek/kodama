<template>
    <div :class="[classes]">
        <label
            v-if="hasLabel"
            class="font-semibold text-gray-500 dark:text-white select-none mb-2 flex flex-row"
        >
            <slot v-if="hasSlot('default')" />
            <template v-else>{{ label }}</template>

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
                maxHeight: !fullpage ? `${maxHeight}px` : undefined
            }"
        >
            <div class="k-editor-content">
                <editor-content v-if="!showCode" :editor="editor" />
                <div v-else>
                    <div
                        class="tiptap ProseMirror"
                        contenteditable="true"
                        tabindex="0"
                        translate="no"
                        :style="{
                            minHeight: `calc(${minHeight}px - 40px - 52px)`
                        }"
                    >
                        {{ html }}
                    </div>
                </div>

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
                    v-if="title"
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
                    v-if="title"
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
                    v-if="title"
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
                    v-if="list"
                    v-tooltip="{ content: 'Lista (ord)', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="list-ul"
                    :class="{ active: editor.isActive('bulletList') }"
                    @click="editor.chain().focus().toggleBulletList().run()"
                />

                <k-button
                    v-if="list"
                    v-tooltip="{ content: 'Lista (num)', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="list-ol"
                    :class="{ active: editor.isActive('orderedList') }"
                    @click="editor.chain().focus().toggleOrderedList().run()"
                />

                <k-button
                    v-if="quote"
                    v-tooltip="{ content: 'Cita', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="quote-right"
                    :class="{ active: editor.isActive('blockquote') }"
                    @click="editor.chain().focus().toggleBlockquote().run()"
                />

                <k-button
                    v-if="code"
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
                    icon="align-right"
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
                    v-if="history"
                    v-tooltip="{ content: 'Deshacer', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="undo"
                    @click="editor.commands.undo"
                />

                <k-button
                    v-if="history"
                    v-tooltip="{ content: 'Rehacer', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="redo"
                    @click="editor.commands.redo"
                />

                <k-button
                    v-tooltip="{
                        content: 'Mostrar código',
                        placement: 'bottom'
                    }"
                    color="primary"
                    size="sm"
                    icon="code"
                    @click="toggleCode"
                />

                <k-button
                    v-if="zenmode"
                    v-tooltip="{ content: 'Modo zen', placement: 'bottom' }"
                    color="primary"
                    size="sm"
                    icon="maximize"
                    :class="{
                        active: fullpage
                    }"
                    @click="fullpage = !fullpage"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        computed,
        defineComponent,
        onBeforeUnmount,
        onMounted,
        ref,
        watch
    } from 'vue'
    import sanitizeHtml from 'sanitize-html'
    import { Editor, EditorContent, BubbleMenu } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
    import Link from '@tiptap/extension-link'
    import TextAlign from '@tiptap/extension-text-align'
    import Placeholder from '@tiptap/extension-placeholder'

    import props from './k-editor.props'
    import { ResizableMedia } from './resizableMedia'

    export default defineComponent({
        name: 'AEditor',
        components: {
            EditorContent,
            BubbleMenu
        },
        props,
        emits: ['update:modelValue'],
        setup(props, ctx) {
            const editor: any = ref()
            const html = ref(props.modelValue)
            const hasSlot = (name: string) => !!ctx.slots[name]
            const showCode = ref(false)

            const fullpage = ref(false)
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

                if (fullpage.value) {
                    classes.push('k-editor-fullpage')
                }

                return classes
            })

            const hasLabel = computed(() => {
                return props.label || hasSlot('default')
            })

            const toggleCode = () => {
                showCode.value = !showCode.value
            }

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

            watch(
                () => props.modelValue,
                (value) => {
                    if (value !== html.value) {
                        html.value = value
                        editor.value?.commands.setContent(value)
                    }
                }
            )

            return {
                //Variables
                editor,
                mandatoryHtml,
                firstError,
                classes,
                hasLabel,
                fullpage,
                showCode,
                html,

                // Methods
                addImage,
                hasSlot,
                toggleCode
            }
        }
    })
</script>

<style lang="scss">
    @import './k-editor.scss';
</style>
