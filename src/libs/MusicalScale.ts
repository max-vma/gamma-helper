import Notes from '@/consts/notes'
import { ScaleTypes, Scales } from '../consts/scales'
import { NotesCollection } from './NotesCollection'
import { Note, ScaleNote } from './index'

interface MusicalScaleCreateConfig {
  from?: Note
  to?: Note
  type?: ScaleTypes
}
export class MusicalScale extends NotesCollection {
  private _tonic: Note = new Note(Notes.C)
  private _type: ScaleTypes = ScaleTypes.Minor

  constructor(tonic?: Notes | null, createConfig?: MusicalScaleCreateConfig) {
    super()
    createConfig?.type && (this._type = createConfig.type)
    tonic && (this._tonic = new Note(tonic))

    this.createScale(createConfig)
  }

  private createScale(config?: MusicalScaleCreateConfig) {
    console.log('@createScale', config)
    if (config && config.type !== undefined) {
      const steps = Scales[config.type]
      this.push(this.tonic)
      const currentNote = new Note(this.tonic.note)

      steps.forEach((s: number, index) => {
        const uppedNote = currentNote.upOnSemitones(s)
        this.push(new ScaleNote(uppedNote, index + 1))
      })
    }

    if (config && config.from && config.to) {
      const { from, to } = config
      this.push(from)
      const currentNote = from

      for (let index = from.note; index < to.note; index++) {
        const uppedNote = currentNote.upOnSemitones(1)
        this.push(uppedNote)
      }
    }
  }

  public getStepIndex(note: Note | Notes): number {
    return this.notes.findIndex(n => n.note === this.getNote(note).note)
  }

  public set type(scale: ScaleTypes) {
    this._type = scale
  }

  public get type(): ScaleTypes {
    return this._type
  }

  public set tonic(tonic: Note) {
    this._tonic = tonic
  }

  public get tonic(): Note {
    return this._tonic
  }
}
