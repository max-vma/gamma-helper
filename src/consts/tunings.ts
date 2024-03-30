import Notes, { Octaves } from './notes'
import { TuningNote, Note } from '@/libs'

export type Tuning = Note[]

const GUITAR_STANDART_E = [
	new TuningNote(Notes.E, Octaves.Four),
	new TuningNote(Notes.B, Octaves.Three),
	new TuningNote(Notes.G, Octaves.Three),
	new TuningNote(Notes.D, Octaves.Three),
	new TuningNote(Notes.A, Octaves.Two),
	new TuningNote(Notes.E, Octaves.Two),
]

export { GUITAR_STANDART_E }
