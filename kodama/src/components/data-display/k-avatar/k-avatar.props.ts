import {
    EYES,
    EYEBROWS,
    EAR,
    EARRING,
    MOUTH,
    HAIR,
    NOSE,
    GLASSES,
    BEARD,
    SHIRT,
    BG_COLORS,
    HAIR_COLORS,
    BEARD_COLORS,
    SHIRT_COLORS,
    FACE_COLORS
} from './k-avatar.types'

export default {
    size: {
        default: 120,
        type: Number
    },
    bgColor: {
        default: BG_COLORS[0],
        type: String
    },
    faceColor: {
        default: FACE_COLORS[0],
        type: String,
        validator: function (value: string) {
            return FACE_COLORS.includes(value)
        }
    },
    eye: {
        default: EYES[0],
        type: String,
        validator: function (value: string) {
            return EYES.includes(value)
        }
    },
    eyeBrow: {
        default: EYEBROWS[0],
        type: String,
        validator: function (value: string) {
            return EYEBROWS.includes(value)
        }
    },
    ear: {
        default: EAR[0],
        type: String,
        validator: function (value: string) {
            return EAR.includes(value)
        }
    },
    earring: {
        default: EARRING[0],
        type: String,
        validator: function (value: string) {
            return EARRING.includes(value)
        }
    },
    mouth: {
        default: MOUTH[0],
        type: String,
        validator: function (value: string) {
            return MOUTH.includes(value)
        }
    },
    hair: {
        default: HAIR[0],
        type: String,
        validator: function (value: string) {
            return HAIR.includes(value)
        }
    },
    nose: {
        default: NOSE[0],
        type: String,
        validator: function (value: string) {
            return NOSE.includes(value)
        }
    },
    glasses: {
        default: GLASSES[0],
        type: String,
        validator: function (value: string) {
            return GLASSES.includes(value)
        }
    },
    beard: {
        default: BEARD[0],
        type: String,
        validator: function (value: string) {
            return BEARD.includes(value)
        }
    },
    hairColor: {
        default: HAIR_COLORS[0],
        type: String,
        validator: function (value: string) {
            return HAIR_COLORS.includes(value)
        }
    },
    beardColor: {
        default: BEARD_COLORS[0],
        type: String,
        validator: function (value: string) {
            return BEARD_COLORS.includes(value)
        }
    },
    shirtColor: {
        default: SHIRT_COLORS[0],
        type: String,
        validator: function (value: string) {
            return SHIRT_COLORS.includes(value)
        }
    },
    shirt: {
        default: SHIRT[0],
        type: String,
        validator: function (value: string) {
            return SHIRT.includes(value)
        }
    }
}
