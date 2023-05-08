<template>
    <node-view-wrapper as="div" class="">
        <div class="media-node-view inline-block">
            <img
                v-if="mediaType === 'img'"
                v-bind="node.attrs"
                ref="resizableImg"
                :class="[
                    `${
                        (isAlign && `align-${props.node.attrs.dataAlign}`) || ''
                    }`
                ]"
                draggable="true"
            />

            <video
                v-else-if="mediaType === 'video'"
                v-bind="node.attrs"
                ref="resizableImg"
                :class="[
                    `${
                        (isAlign && `align-${props.node.attrs.dataAlign}`) || ''
                    }`
                ]"
                draggable="true"
                controls="true"
            >
                <source :src="node.attrs.src" />
            </video>

            <div
                class="horizontal-resize-handle"
                :class="{
                    'horizontal-resize-active': isHorizontalResizeActive
                }"
                title="Resize"
                @mousedown="startHorizontalResize"
                @mouseup="stopHorizontalResize"
            />

            <div
                class="vertical-resize-handle"
                :class="{
                    'vertical-resize-active': isVerticalResizeActive
                }"
                title="Resize"
                @mousedown="startVerticalResize"
                @mouseup="stopVerticalResize"
            />
        </div>
    </node-view-wrapper>
</template>

<script setup lang="ts">
    import { Editor, Node, NodeViewWrapper } from '@tiptap/vue-3'
    import { ref, onMounted, computed, watch } from 'vue'
    import { Node as ProseMirrorNode } from 'prosemirror-model'
    import { Decoration } from 'prosemirror-view'

    interface Props {
        editor: Editor
        node: ProseMirrorNode
        decorations: Decoration
        selected: boolean
        extension: Node<any, any>
        getPos: () => number
        updateAttributes: (attributes: Record<string, any>) => void
        deleteNode: () => void
    }

    const props = defineProps<Props>()

    const mediaType = computed<'img' | 'video'>(
        () => props.node.attrs['media-type']
    )

    const resizableImg = ref<HTMLImageElement | HTMLVideoElement | null>(null) // template ref

    const aspectRatio = ref(0)

    const proseMirrorContainerWidth = ref(0)

    const mediaSetupOnLoad = () => {
        // ! TODO: move this to extension storage
        const proseMirrorContainerDiv = document.querySelector('.ProseMirror')

        if (proseMirrorContainerDiv)
            proseMirrorContainerWidth.value =
                proseMirrorContainerDiv?.clientWidth

        // When the media has loaded
        if (!resizableImg.value) return

        if (mediaType.value === 'video') {
            // Aspect Ratio from its original size
            setTimeout(() => {
                aspectRatio.value =
                    (resizableImg.value as HTMLVideoElement).videoWidth /
                    (resizableImg.value as HTMLVideoElement).videoHeight

                // for the first time when video is added with custom width and height
                // and we have to adjust the video height according to it's width
                onHorizontalResize('left', 0)
            }, 200)
        } else {
            aspectRatio.value =
                (resizableImg.value as HTMLImageElement).naturalWidth /
                (resizableImg.value as HTMLImageElement).naturalHeight

            onHorizontalResize('left', 0)

            resizableImg.value.onload = () => {
                // Aspect Ratio from its original size
                aspectRatio.value =
                    (resizableImg.value as HTMLImageElement).naturalWidth /
                    (resizableImg.value as HTMLImageElement).naturalHeight

                onHorizontalResize('left', 0)
            }
        }
    }

    onMounted(() => setTimeout(() => mediaSetupOnLoad(), 1000))

    const isHorizontalResizeActive = ref(false)

    const lastCursorX = ref(-1)

    interface WidthAndHeight {
        width: number
        height: number
    }

    const limitWidthOrHeightToFiftyPixels = ({
        width,
        height
    }: WidthAndHeight) => width < 100 || height < 100

    const startHorizontalResize = (e: MouseEvent) => {
        isHorizontalResizeActive.value = true
        lastCursorX.value = e.clientX

        document.addEventListener('mousemove', onHorizontalMouseMove)
        document.addEventListener('mouseup', stopHorizontalResize)
    }

    const stopHorizontalResize = () => {
        isHorizontalResizeActive.value = false
        lastCursorX.value = -1

        document.removeEventListener('mousemove', onHorizontalMouseMove)
        document.removeEventListener('mouseup', stopHorizontalResize)
    }

    const onHorizontalResize = (
        directionOfMouseMove: 'right' | 'left',
        diff: number
    ) => {
        if (!resizableImg.value) {
            console.error('Media ref is undefined|null', {
                resizableImg: resizableImg.value
            })
            return
        }

        const currentMediaDimensions = {
            width: resizableImg.value?.width,
            height: resizableImg.value?.height
        }

        const newMediaDimensions = {
            width: -1,
            height: -1
        }

        if (directionOfMouseMove === 'left') {
            newMediaDimensions.width =
                currentMediaDimensions.width - Math.abs(diff)
        } else {
            newMediaDimensions.width =
                currentMediaDimensions.width + Math.abs(diff)
        }

        if (newMediaDimensions.width > proseMirrorContainerWidth.value)
            newMediaDimensions.width = proseMirrorContainerWidth.value

        newMediaDimensions.height = newMediaDimensions.width / aspectRatio.value

        if (limitWidthOrHeightToFiftyPixels(newMediaDimensions)) return

        props.updateAttributes(newMediaDimensions)
    }

    const onHorizontalMouseMove = (e: MouseEvent) => {
        if (!isHorizontalResizeActive.value) return

        const { clientX } = e

        const diff = lastCursorX.value - clientX

        lastCursorX.value = clientX

        if (diff === 0) return

        const directionOfMouseMove: 'left' | 'right' =
            diff > 0 ? 'left' : 'right'

        onHorizontalResize(directionOfMouseMove, Math.abs(diff))
    }

    const isVerticalResizeActive = ref(false)

    const lastCursorY = ref(-1)

    const startVerticalResize = (e: MouseEvent) => {
        isVerticalResizeActive.value = true
        lastCursorY.value = e.clientY

        document.addEventListener('mousemove', onVerticalMouseMove)
        document.addEventListener('mouseup', stopVerticalResize)
    }

    const stopVerticalResize = () => {
        isVerticalResizeActive.value = false
        lastCursorY.value = -1

        document.removeEventListener('mousemove', onVerticalMouseMove)
        document.removeEventListener('mouseup', stopVerticalResize)
    }

    const onVerticalMouseMove = (e: MouseEvent) => {
        if (!isVerticalResizeActive.value) return

        const { clientY } = e

        const diff = lastCursorY.value - clientY

        lastCursorY.value = clientY

        if (diff === 0) return

        const directionOfMouseMove: 'up' | 'down' = diff > 0 ? 'up' : 'down'

        if (!resizableImg.value) {
            console.error('Media ref is undefined|null', {
                resizableImg: resizableImg.value
            })
            return
        }

        const currentMediaDimensions = {
            width: resizableImg.value?.width,
            height: resizableImg.value?.height
        }

        const newMediaDimensions = {
            width: -1,
            height: -1
        }

        if (directionOfMouseMove === 'up') {
            newMediaDimensions.height =
                currentMediaDimensions.height - Math.abs(diff)
        } else {
            newMediaDimensions.height =
                currentMediaDimensions.height + Math.abs(diff)
        }

        newMediaDimensions.width = newMediaDimensions.height * aspectRatio.value

        if (newMediaDimensions.width > proseMirrorContainerWidth.value) {
            newMediaDimensions.width = proseMirrorContainerWidth.value

            newMediaDimensions.height =
                newMediaDimensions.width / aspectRatio.value
        }

        if (limitWidthOrHeightToFiftyPixels(newMediaDimensions)) return

        props.updateAttributes(newMediaDimensions)
    }

    const isAlign = computed<boolean>(() => !!props.node.attrs.dataAlign)
</script>

<style lang="scss">
    .media-node-view {
        position: relative;

        .horizontal-resize-handle,
        .vertical-resize-handle {
            @apply absolute hover:bg-primary z-50 opacity-50;
        }

        .horizontal-resize-handle {
            @apply h-full w-2 top-0 right-0 cursor-col-resize;
        }

        .vertical-resize-handle {
            @apply w-full h-2 bottom-0 left-0 cursor-row-resize;
        }
    }

    .media-actions-container {
        padding: 4px !important;
        width: fit-content !important;

        .ep-button + .ep-button {
            margin-left: 0px;
        }
    }
</style>
