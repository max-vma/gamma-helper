import { MusicalScale } from '@/libs/MusicalScale'
import Notes from '@/consts/notes'
import { ScaleTypes } from '@/consts/scales'
import { GUITAR_STANDART_E } from '@/consts/tunings'
import { defineStore } from 'pinia'
import { reactive, ref, watch } from 'vue'
import { Tuning } from '@/libs/Tuning'

export const useNeckStore = defineStore('neck', () => {
	const tonic = ref<Notes>(Notes.E)

	const scaleType = ref<ScaleTypes>(ScaleTypes.Minor)

	const scale = ref<MusicalScale>(
		new MusicalScale(tonic.value, scaleType.value)
	)

	const fretsCount = ref<number>(12)
	const tuning = ref<Tuning>(GUITAR_STANDART_E)

	const setTonic = (newTonic: Notes) => {
		tonic.value = newTonic
		setScale(new MusicalScale(tonic.value, scaleType.value))
	}

	const setTuning = (newTuning: Tuning) => {
		tuning.value = newTuning
		setScale(new MusicalScale(tonic.value, scaleType.value))
	}

	const setScaleType = (newScaleType: ScaleTypes) => {
		scaleType.value = newScaleType
		setScale(new MusicalScale(tonic.value, scaleType.value))
	}

	const setScale = (newScale: MusicalScale) => {
		scale.value = newScale
	}

	return {
		scale,
		fretsCount,
		tuning,
		setTuning,
		setScale,
		tonic,
		scaleType,
		setTonic,
		setScaleType,
	}
})
