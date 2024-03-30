import Notes, { Octaves } from '@/consts/notes'
import { Note } from './Note'

export class ScaleNote extends Note {
	public _step: any

	constructor(note: Notes | Note, step: number, octave?: Octaves) {
		if (note instanceof Note) super(note.note, note.octave)
		else super(note, octave)

		this.step = step
	}

	public set step(step: number) {
		this._step = step
	}

	public get step(): number {
		return this._step
	}
}
