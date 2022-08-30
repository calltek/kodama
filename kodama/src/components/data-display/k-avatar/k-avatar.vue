<template>
    <tippy :content="name">
        <svg
            :width="size"
            :height="size"
            viewBox="0 0 380 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="{ 'rounded-4': type === 'square' }"
        >
            <rect
                v-if="type === 'square'"
                height="380"
                width="380"
                :fill="bgColor"
            />
            <circle v-else cx="190" cy="190" r="190" :fill="bgColor" />
            <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="380"
                height="380"
            >
                <rect
                    v-if="type === 'square'"
                    height="380"
                    width="380"
                    fill="#FFEDEF"
                />
                <circle v-else cx="190" cy="190" r="190" fill="#FFEDEF" />
            </mask>
            <g mask="url(#mask0)">
                <Face
                    :face-color="avatar.faceColor"
                    :beard="avatar.beard"
                    :beard-color="avatar.beardColor"
                />
                <Mouth :mouth="avatar.mouth" />
                <EyeBrows :eye-brow="avatar.eyeBrow" />
                <Hair :hair="avatar.hair" :hair-color="avatar.hairColor" />
                <Eyes :eye="avatar.eye" />
                <Glasses :glasses="avatar.glasses" />
                <Nose :nose="avatar.nose" />
                <Ear :ear="avatar.ear" :face-color="avatar.faceColor" />
                <Earring :ear="avatar.ear" :earring="avatar.earRing" />
                <Shirt :shirt="avatar.shirt" :shirt-color="avatar.shirtColor" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect
                        width="200"
                        height="320"
                        fill="white"
                        transform="translate(90 43)"
                    />
                </clipPath>
            </defs>
        </svg>
    </tippy>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import { BG_COLORS } from './k-avatar.types'

    import Eyes from './parts/eyes.vue'
    import EyeBrows from './parts/eye-brows.vue'
    import Face from './parts/face.vue'
    import Ear from './parts/ear.vue'
    import Earring from './parts/earring.vue'
    import Mouth from './parts/mouth.vue'
    import Hair from './parts/hair.vue'
    import Nose from './parts/nose.vue'
    import Glasses from './parts/glasses.vue'
    import Shirt from './parts/shirt.vue'

    import Makeup from './lib/makeup'

    export default defineComponent({
        name: 'KAvatar',
        autoload: true,
        components: {
            Shirt,
            Glasses,
            Hair,
            Mouth,
            Face,
            EyeBrows,
            Eyes,
            Ear,
            Earring,
            Nose
        },
        props: {
            name: {
                type: String,
                default: ''
            },
            size: {
                type: Number,
                default: 120
            },
            square: {
                type: Boolean,
                default: true
            },
            circle: {
                type: Boolean,
                default: false
            },
            bgColor: {
                default: BG_COLORS[0],
                type: String,
                validator: function (value: string) {
                    return BG_COLORS.includes(value)
                }
            }
        },
        setup(props) {
            const avatar = computed(() => {
                const a = new Makeup(props.name)
                return a.makeup()
            })

            const type = computed(() => {
                return props.circle ? 'circle' : 'square'
            })

            return { avatar, type }
        }
    })
</script>

<style scoped></style>
