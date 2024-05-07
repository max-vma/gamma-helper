import { Note } from '@/libs'
import { Tuning } from '@/libs/Tuning'
import Notes, { Octaves } from './notes'

export const GUITAR_STANDART_E = new Tuning('E standart', [
  new Note(Notes.E, Octaves.Four),
  new Note(Notes.B, Octaves.Three),
  new Note(Notes.G, Octaves.Three),
  new Note(Notes.D, Octaves.Three),
  new Note(Notes.A, Octaves.Two),
  new Note(Notes.E, Octaves.Two),
])

export const GUITAR_DROP_D = new Tuning('Drop D', [
  new Note(Notes.E, Octaves.Four),
  new Note(Notes.B, Octaves.Three),
  new Note(Notes.G, Octaves.Three),
  new Note(Notes.D, Octaves.Three),
  new Note(Notes.A, Octaves.Two),
  new Note(Notes.D, Octaves.Two),
])
export const GUITAR_DROP_C = new Tuning('Drop C', [
  new Note(Notes.D, Octaves.Four),
  new Note(Notes.A, Octaves.Three),
  new Note(Notes.F, Octaves.Three),
  new Note(Notes.C, Octaves.Three),
  new Note(Notes.G, Octaves.Two),
  new Note(Notes.C, Octaves.Two),
])
export const GUITAR_DOUBLE_DROP_D = new Tuning('Double Drop D', [
  new Note(Notes.D, Octaves.Four),
  new Note(Notes.B, Octaves.Three),
  new Note(Notes.G, Octaves.Three),
  new Note(Notes.D, Octaves.Three),
  new Note(Notes.A, Octaves.Two),
  new Note(Notes.D, Octaves.Two),
])

export const GUITAR_OPEN_D = new Tuning('Open D', [
  new Note(Notes.D, Octaves.Four),
  new Note(Notes.A, Octaves.Three),
  new Note(Notes['F#'], Octaves.Three),
  new Note(Notes.D, Octaves.Three),
  new Note(Notes.A, Octaves.Two),
  new Note(Notes.D, Octaves.Two),
])
export const GUITAR_OPEN_C = new Tuning('Open C', [
  new Note(Notes.E, Octaves.Four),
  new Note(Notes.C, Octaves.Four),
  new Note(Notes.G, Octaves.Three),
  new Note(Notes.C, Octaves.Three),
  new Note(Notes.G, Octaves.Two),
  new Note(Notes.C, Octaves.Two),
])

export enum TuningNames {
  'GUITAR_STANDART_E',
  'GUITAR_DROP_D',
  'GUITAR_DROP_C',
  'GUITAR_OPEN_D',
  'GUITAR_OPEN_C',
  'GUITAR_DOUBLE_DROP_D',
}

export type TTunings = {
  [key in TuningNames]: Tuning
}

export const TUNINGS: TTunings = {
  [TuningNames.GUITAR_STANDART_E]: GUITAR_STANDART_E,
  [TuningNames.GUITAR_DROP_D]: GUITAR_DROP_D,
  [TuningNames.GUITAR_DROP_C]: GUITAR_DROP_C,
  [TuningNames.GUITAR_DOUBLE_DROP_D]: GUITAR_DOUBLE_DROP_D,
  [TuningNames.GUITAR_OPEN_D]: GUITAR_OPEN_D,
  [TuningNames.GUITAR_OPEN_C]: GUITAR_OPEN_C,
}
