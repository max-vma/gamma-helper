import Notes from '@/consts/notes'
import { ScaleNames, ScaleTypes, Scales } from '../consts/scales'
import { Note, ScaleNote } from './index'
import { NotesCollection } from './NotesCollection'

export class MusicalScale extends NotesCollection {
	private _tonic: Note = new Note(Notes.C)
	private _scaleType: ScaleTypes = ScaleTypes.Minor

	constructor(tonic: Notes, scaleType: ScaleTypes) {
		super()
		this.scaleType = scaleType
		this._tonic = new Note(tonic)

		this.createScale()
	}

	private createScale() {
		const steps = Scales[this.scaleType]
		this.notes.push(this.tonic)
		const currentNote = new Note(this.tonic.note)

		steps.forEach((s: number, index) => {
			const uppedNote = currentNote.upOnSemitones(s)
			this.notes.push(new ScaleNote(uppedNote, index + 1))
		})
	}

	public getStepIndex(note: Note | Notes): number {
		return this.notes.findIndex(n => n.note === this.getNote(note).note)
	}

	public set scaleType(scale: ScaleTypes) {
		this._scaleType = scale
	}

	public get scaleType(): ScaleTypes {
		return this._scaleType
	}

	public set tonic(tonic: Note) {
		this._tonic = tonic
	}

	public get tonic(): Note {
		return this._tonic
	}
}
