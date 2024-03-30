import { MusicalScale } from '@/libs/MusicalScale'
import Notes from '@/consts/notes'
import { ScaleNames } from '@/consts/scales'
import { GUITAR_STANDART_E } from '@/consts/tunings'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { TuningNote } from '@/libs'

export const useNeckStore = defineStore('neck', () => {
	const scale = ref<MusicalScale>(
		new MusicalScale(Notes.A, ScaleNames.NaturalMinor)
	)
	const fretsCount = ref<number>(12)
	const tuning = ref<TuningNote[]>(GUITAR_STANDART_E)

	return { scale, fretsCount, tuning }
})
