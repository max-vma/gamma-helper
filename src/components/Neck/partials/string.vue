<template>
	<div class="neck__string">
		<neck-fret
			:is-active="isActiveNote(note)"
			v-for="(note, id) in fretsNotes"
			:key="id"
		>
			{{ note.noteName }}{{ note.octave }}
		</neck-fret>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import NeckFret from './fret.vue'
import { Note, TuningNote, ScaleNote } from '@/libs/index'
import { useNeckStore } from '@/stores/neck'
const props = defineProps<{
	tuningNote: TuningNote
}>()

const store = useNeckStore()

const fretsNotes = computed((): Note[] => {
	const notes: Note[] = []
	for (let index = 0; index < store.fretsCount + 1; index++) {
		let note = !notes.length
			? props.tuningNote
			: notes[index - 1].getNextSemitoneNote()
		if (store.scale.has(note)) {
			notes.push(new ScaleNote(note, store.scale.getStepIndex(note)))
		} else {
			notes.push(note)
		}
	}
	return notes
})

const isActiveNote = (note: Note | ScaleNote): boolean =>
	note instanceof ScaleNote
</script>

<style lang="less">
.neck__string {
	display: flex;
	width: 100%;
	height: 40px;
	background-color: #fff;
}
</style>
@/stores
