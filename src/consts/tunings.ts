import { Tuning } from '@/libs/Tuning'
import Notes, { Octaves } from './notes'
import { Note } from '@/libs'

export const GUITAR_STANDART_E = new Tuning('E стандарт', [
	new Note(Notes.E, Octaves.Four),
	new Note(Notes.B, Octaves.Three),
	new Note(Notes.G, Octaves.Three),
	new Note(Notes.D, Octaves.Three),
	new Note(Notes.A, Octaves.Two),
	new Note(Notes.E, Octaves.Two),
])

export const GUITAR_STANDART_F = new Tuning('F Стандарт', [
	new Note(Notes.F, Octaves.Four),
	new Note(Notes.C, Octaves.Four),
	new Note(Notes['G#'], Octaves.Three),
	new Note(Notes['D#'], Octaves.Three),
	new Note(Notes['A#'], Octaves.Two),
	new Note(Notes.F, Octaves.Two),
])

export enum TuningNames {
	'GUITAR_STANDART_F',
	'GUITAR_STANDART_E',
}

export type TTunings = {
	[key in TuningNames]: Tuning
}

export const TUNINGS: TTunings = {
	[TuningNames.GUITAR_STANDART_E]: GUITAR_STANDART_E,
	[TuningNames.GUITAR_STANDART_F]: GUITAR_STANDART_F,
}
