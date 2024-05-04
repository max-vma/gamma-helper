import { GUITAR_STANDART_E } from '@/consts/tunings'
import { Note } from '@/libs'
import { Tuning } from '@/libs/Tuning'
import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useTuningStore = defineStore('tuning', () => {
  let tuning = reactive<Tuning>(GUITAR_STANDART_E)

  const setTuning = (newTuning: Tuning) => {
    tuning = newTuning
  }

  const setTuningStringNote = (stringIndex: number, newNote: Note) => {
    const newTuning = tuning.setStringNote(stringIndex, newNote)
    setTuning(newTuning)
  }

  const notes = computed(() => tuning.notes as Note[])

  return {
    tuning,
    notes,
    setTuning,
    setTuningStringNote,
  }
})
