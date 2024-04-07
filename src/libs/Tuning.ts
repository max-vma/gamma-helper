import { Note, NotesCollection } from './index'

export class Tuning extends NotesCollection {
	constructor(public label: string, notes: Note[]) {
		super(notes)
	}
}
