import { MusicalScale } from '@/libs/MusicalScale'
import Notes from '@/consts/notes'
import { ScaleNames } from '@/consts/scales'
import { GUITAR_STANDART_E } from '@/consts/tunings'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { Tuning } from '@/libs/Tuning'

export const useNeckStore = defineStore('neck', () => {
	const scale = ref<MusicalScale>(
		new MusicalScale(Notes.A, ScaleNames.NaturalMinor)
	)
	const fretsCount = ref<number>(12)
	const tuning = ref<Tuning>(GUITAR_STANDART_E)

	const setTuning = (newTuning: Tuning) => {
		console.log(newTuning, tuning)
		tuning.value = newTuning
	}

	return { scale, fretsCount, tuning, setTuning }
})
