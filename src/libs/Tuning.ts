import { Note, NotesCollection } from './index'

export class Tuning extends NotesCollection {
  constructor(
    public label: string,
    notes: Note[],
  ) {
    const clonedNotes = [...notes]
    clonedNotes.forEach((note, index) => (note.indexInCollection = index))
    super(clonedNotes)
  }

  public setStringNote(stringIndex: number, newNote: Note) {
    const clonedNotes = [...this.notes]

    clonedNotes[stringIndex] = newNote
    return new Tuning('Кастомная строй', clonedNotes)
  }
}
