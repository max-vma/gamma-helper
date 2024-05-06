<template>
  <div :class="$style.neckString">
    <guitar-neck-fret v-for="(note, index) in fretsNotes">
      <guitar-neck-note
        :is-changed="index === 0"
        :note="note"
        :is-hidden="!hasInScale(note)"
        :is-tonica="isTonica(note)" />
    </guitar-neck-fret>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import GuitarNeckFret from './GuitarNeckFret.vue'
import GuitarNeckNote from './GuitarNeckNote.vue'
import { Note } from '@/libs/index'
import { useNeckStore } from '@/stores/neck'
import { useScaleStore } from '@/stores/scale'
import { useTuningStore } from '@/stores/tuning'
const props = defineProps<{
  tuningNote: Note
}>()

const scaleStore = useScaleStore()
const tuningStore = useTuningStore()
const neckStore = useNeckStore()

// const fretsNotes = computed(() => {
// 	return new MusicalScale(null, null, {
// 		from: props.tuningNote,
// 		to
// 	})
// })
const fretsNotes = computed((): Note[] => {
  const notes: Note[] = []
  for (let index = 0; index < neckStore.fretsCount + 1; index++) {
    let note = !notes.length ? props.tuningNote : notes[index - 1].getNextSemitoneNote()

    notes.push(note)
  }
  return notes
})

const hasInScale = (note: Note): boolean => {
  // console.log(note, scaleStore.scale.notes, scaleStore.scale.has(note))
  return scaleStore.scale.has(note)
}
const isTonica = (note: Note): boolean => {
  return scaleStore.scale.tonic.is(note)
}

// const onChangeTuningStringNote = (isNext: boolean) => {
//   tuningStore.setTuningStringNote(props.tuningNote.indexInCollection, props.tuningNote.getOtherNote(isNext))
// }
</script>

<style lang="less" module>
.neckString {
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #fff;
}
</style>
