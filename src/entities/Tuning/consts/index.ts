import { Note, NoteNames, OctaveNames, Tuning } from '@/entities';

export const GUITAR_STANDARD_E = new Tuning('E Standard', [
  new Note(NoteNames.E, OctaveNames.Four),
  new Note(NoteNames.B, OctaveNames.Three),
  new Note(NoteNames.G, OctaveNames.Three),
  new Note(NoteNames.D, OctaveNames.Three),
  new Note(NoteNames.A, OctaveNames.Two),
  new Note(NoteNames.E, OctaveNames.Two),
]);

export const GUITAR_DROP_D = new Tuning('Drop D', [
  new Note(NoteNames.E, OctaveNames.Four),
  new Note(NoteNames.B, OctaveNames.Three),
  new Note(NoteNames.G, OctaveNames.Three),
  new Note(NoteNames.D, OctaveNames.Three),
  new Note(NoteNames.A, OctaveNames.Two),
  new Note(NoteNames.D, OctaveNames.Two),
]);
export const GUITAR_DROP_C = new Tuning('Drop C', [
  new Note(NoteNames.D, OctaveNames.Four),
  new Note(NoteNames.A, OctaveNames.Three),
  new Note(NoteNames.F, OctaveNames.Three),
  new Note(NoteNames.C, OctaveNames.Three),
  new Note(NoteNames.G, OctaveNames.Two),
  new Note(NoteNames.C, OctaveNames.Two),
]);
export const GUITAR_DOUBLE_DROP_D = new Tuning('Double Drop D', [
  new Note(NoteNames.D, OctaveNames.Four),
  new Note(NoteNames.B, OctaveNames.Three),
  new Note(NoteNames.G, OctaveNames.Three),
  new Note(NoteNames.D, OctaveNames.Three),
  new Note(NoteNames.A, OctaveNames.Two),
  new Note(NoteNames.D, OctaveNames.Two),
]);

export const GUITAR_OPEN_D = new Tuning('Open D', [
  new Note(NoteNames.D, OctaveNames.Four),
  new Note(NoteNames.A, OctaveNames.Three),
  new Note(NoteNames['F#'], OctaveNames.Three),
  new Note(NoteNames.D, OctaveNames.Three),
  new Note(NoteNames.A, OctaveNames.Two),
  new Note(NoteNames.D, OctaveNames.Two),
]);
export const GUITAR_OPEN_C = new Tuning('Open C', [
  new Note(NoteNames.E, OctaveNames.Four),
  new Note(NoteNames.C, OctaveNames.Four),
  new Note(NoteNames.G, OctaveNames.Three),
  new Note(NoteNames.C, OctaveNames.Three),
  new Note(NoteNames.G, OctaveNames.Two),
  new Note(NoteNames.C, OctaveNames.Two),
]);

export enum TuningNames {
  'GUITAR_STANDARD_E',
  'GUITAR_DROP_D',
  'GUITAR_DROP_C',
  'GUITAR_OPEN_D',
  'GUITAR_OPEN_C',
  'GUITAR_DOUBLE_DROP_D',
}

export type TTunings = {
  [key in TuningNames]: Tuning;
};

export const TUNINGS: TTunings = {
  [TuningNames.GUITAR_STANDARD_E]: GUITAR_STANDARD_E,
  [TuningNames.GUITAR_DROP_D]: GUITAR_DROP_D,
  [TuningNames.GUITAR_DROP_C]: GUITAR_DROP_C,
  [TuningNames.GUITAR_DOUBLE_DROP_D]: GUITAR_DOUBLE_DROP_D,
  [TuningNames.GUITAR_OPEN_D]: GUITAR_OPEN_D,
  [TuningNames.GUITAR_OPEN_C]: GUITAR_OPEN_C,
};
