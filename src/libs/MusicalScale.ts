import Notes from '@/consts/notes'
import { ScaleTypes, Scales } from '../consts/scales'
import { Note, ScaleNote } from './index'
import { NotesCollection } from './NotesCollection'

interface MusicalScaleCreateConfig {
	from?: Note
	to?: Note
	type?: ScaleTypes
}
export class MusicalScale extends NotesCollection {
	private _tonic: Note = new Note(Notes.C)
	private _type: ScaleTypes = ScaleTypes.Minor

	constructor(
		tonic?: Notes | null,
		type?: ScaleTypes | null,
		createConfig?: MusicalScaleCreateConfig
	) {
		super()
		type && (this._type = type)
		tonic && (this._tonic = new Note(tonic))

		this.createScale(createConfig)
	}

	private createScale(config?: MusicalScaleCreateConfig) {
		if (config && config.type) {
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
