import { MusicalScale } from "@/libs/MusicalScale";
import Notes from "@/consts/notes";
import { ScaleNames } from "@/consts/scales";
import { GUITAR_STANDART_E } from "@/consts/tunings";

export default {
    activeScale: new MusicalScale(Notes.A, ScaleNames.NaturalMinor),
    fretsCount: 12,
    tuning: GUITAR_STANDART_E
}