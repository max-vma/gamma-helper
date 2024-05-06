import Notes, { NOTES_LAST_INDEX, Octaves } from '@/consts/notes'

export class Note {
  private _note: Notes = Notes.C
  private _octave?: Octaves
  public noteName = ''
  public indexInCollection: number = -1

  constructor(note: Notes, octave?: Octaves, indexInCollection?: number) {
    this.note = note
    this.octave = octave
    if (indexInCollection) this.indexInCollection = indexInCollection = indexInCollection
  }

  public set note(note: Notes) {
    this._note = note
    this.noteName = this.getNoteName()
  }

  public get note(): Notes {
    return this._note
  }

  public set octave(octave: Octaves | undefined) {
    this._octave = octave
    this.noteName = this.getNoteName()
  }

  public get octave(): Octaves | undefined {
    return this._octave
  }

  public is(note: Note | Notes, onlyNote: boolean = true) {
    const gettedNote = this.getNote(note)
    const isEqualNotes = gettedNote.note === this.note
    const isEqualOctaves = gettedNote.octave === this.octave

    return onlyNote ? isEqualNotes : isEqualNotes && isEqualOctaves
  }

  protected getNote(note: Note | Notes): Note {
    return note instanceof Note ? note : new Note(note)
  }

  public upOnSemitones(semiTones: number): Note {
    let currentNoteIndex: number = (this.note as number) + semiTones
    if (currentNoteIndex > NOTES_LAST_INDEX) currentNoteIndex = currentNoteIndex - NOTES_LAST_INDEX - 1

    const a = Notes[currentNoteIndex]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    this.note = Notes[a]
    return this
  }

  public getNoteName(noteNumber: number = this.note, octave?: Octaves): string {
    const noteNames = Object.keys(Notes).filter(key => isNaN(Number(key))) as Array<keyof typeof Notes>
    const noteName = noteNames.find(name => Notes[name] === noteNumber)
    return `${noteName}${octave ? octave : ''}`
  }

  public getNextSemitoneNote(): Note {
    return this.getOtherNote(true)
  }
  public getOtherNote(isNext: boolean) {
    let currentNote = this.note
    let currentOctave = this.octave
    const nextNoteIndex = currentNote + (isNext ? 1 : -1)
    if (nextNoteIndex > NOTES_LAST_INDEX) {
      currentNote = Notes.C
      currentOctave && currentOctave++
    } else if (nextNoteIndex < 0) {
      currentNote = Notes.B
      currentOctave && currentOctave--
    } else {
      currentNote = nextNoteIndex
    }
    const newNote = new Note(currentNote, currentOctave)
    newNote.indexInCollection = this.indexInCollection
    return newNote
  }
  public getPrevSemitoneNote(): Note {
    return this.getOtherNote(false)
  }
}
