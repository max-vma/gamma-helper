import Notes from '@/consts/notes'
import { ScaleTypes } from '@/consts/scales'
import { MusicalScale } from '@/libs'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScaleStore = defineStore('scale', () => {
  const tonic = ref<Notes>(Notes.E)

  const type = ref<ScaleTypes>(ScaleTypes.Minor)

  const scale = ref<MusicalScale>(new MusicalScale(tonic.value, { type: type.value }))

  const setTonic = (newTonic: Notes) => {
    tonic.value = newTonic
    setScale(new MusicalScale(tonic.value, { type: type.value }))
  }

  const setScale = (newScale: MusicalScale) => {
    scale.value = newScale
  }

  const setType = (newScaleType: ScaleTypes) => {
    type.value = newScaleType
    setScale(new MusicalScale(tonic.value, { type: type.value }))
  }

  return {
    tonic,
    scale,
    type,
    setTonic,
    setType,
  }
})
