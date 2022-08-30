import { Chance } from 'chance'

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
    HAIR_COLORS,
    BEARD_COLORS,
    SHIRT_COLORS,
    FACE_COLORS
} from '../k-avatar.types'

export default class Makeup {
    chance: any

    constructor(name: string) {
        this.chance = new Chance(name)
    }

    _faceColor() {
        return this.chance.shuffle(FACE_COLORS)[0]
    }

    _hairColor() {
        return this.chance.shuffle(HAIR_COLORS)[0]
    }

    _beardColor() {
        return this.chance.shuffle(BEARD_COLORS)[0]
    }

    _shirtColor() {
        return this.chance.shuffle(SHIRT_COLORS)[0]
    }

    _eye() {
        return this.chance.shuffle(EYES)[0]
    }

    _eyeBrow() {
        return this.chance.shuffle(EYEBROWS)[0]
    }

    _ear() {
        return this.chance.shuffle(EAR)[0]
    }

    _earRing() {
        return this.chance.shuffle(EARRING)[0]
    }

    _mouth() {
        return this.chance.shuffle(MOUTH)[0]
    }

    _hair() {
        return this.chance.shuffle(HAIR)[0]
    }

    _nose() {
        return this.chance.shuffle(NOSE)[0]
    }

    _glasses() {
        return this.chance.shuffle(GLASSES)[0]
    }

    _beard() {
        return this.chance.shuffle(BEARD)[0]
    }

    _shirt() {
        return this.chance.shuffle(SHIRT)[0]
    }

    makeup() {
        return {
            faceColor: this._faceColor(),
            eye: this._eye(),
            eyeBrow: this._eyeBrow(),
            ear: this._ear(),
            earRing: this._earRing(),
            mouth: this._mouth(),
            hair: this._hair(),
            hairColor: this._hairColor(),
            nose: this._nose(),
            glasses: this._glasses(),
            beard: this._beard(),
            beardColor: this._beardColor(),
            shirt: this._shirt(),
            shirtColor: this._shirtColor()
        }
    }
}
