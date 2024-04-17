<template>
	<div class="neck__string">
		<neck-fret
			v-for="note in fretsNotes"
			:is-active="isActiveNote(note)"
			:key="note.noteName + note.octave"
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
	console.log(store.scale.has(note), note)
	return store.scale.has(note)
}
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
