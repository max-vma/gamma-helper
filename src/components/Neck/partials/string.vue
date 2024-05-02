<template>
	<div class="neck-string">
		<neck-fret
			v-for="(note, index) in fretsNotes"
			:is-active="isActiveNote(note)"
			:is-tonica="isTonica(note)"
			:is-first="index === 0"
			:key="note.noteName + note.octave"
			@on-next-note="() => onChangeTuningStringNote(true)"
			@on-prev-note="() => onChangeTuningStringNote(false)"
		>
			{{ note.noteName }}{{ note.octave }}
		</neck-fret>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import NeckFret from './fret.vue'
import { Note, ScaleNote } from '@/libs/index'
import { useNeckStore } from '@/stores/neck'
const props = defineProps<{
	tuningNote: Note
}>()

const store = useNeckStore()

const fretsNotes = computed((): Note[] => {
	const notes: Note[] = []
	for (let index = 0; index < store.fretsCount + 1; index++) {
		let note = !notes.length
			? props.tuningNote
			: notes[index - 1].getNextSemitoneNote()

		notes.push(note)
	}
	return notes
})

const isActiveNote = (note: Note | ScaleNote): boolean => {
	return store.scale.has(note)
}
const isTonica = (note: Note | ScaleNote): boolean => {
	return store.scale.tonic.is(note)
}

const onChangeTuningStringNote = (isNext: boolean) => {
	store.setTuningStringNote(
		props.tuningNote.indexInCollection,
		props.tuningNote.getOtherNote(isNext)
	)
}
</script>

<style lang="less">
.neck-string {
	display: flex;
	width: 100%;
	height: 40px;
	background-color: #fff;
}
</style>
