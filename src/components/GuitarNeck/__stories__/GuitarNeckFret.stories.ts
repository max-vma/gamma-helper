import Notes, { Octaves } from '@/consts/notes'
import { Note } from '@/libs'
import { Meta, StoryFn } from '@storybook/vue3'
import GuitarNeckNote from '../partials/GuitarNeckNote.vue'

export default {
  title: 'GuitarNeck/Note',
  component: GuitarNeckNote,
} as Meta<typeof GuitarNeckNote>

export const NoteActive: StoryFn<typeof GuitarNeckNote> = args => ({
  components: { GuitarNeckNote },
  setup() {
    return { args }
  },
  template: '<guitar-neck-note v-bind="args">Button</guitar-neck-note>',
})

const note = new Note(Notes.C, Octaves.Three)

NoteActive.args = {
  note,
  isTonic: true,
}

export const GNoteChanged: StoryFn<typeof GuitarNeckNote> = args => ({
  components: { GuitarNeckNote },
  setup() {
    return { args }
  },
  template: '<guitar-neck-note v-bind="args">Button</guitar-neck-note>',
})

GNoteChanged.args = {
  note,
  isZeroFret: true,
}
