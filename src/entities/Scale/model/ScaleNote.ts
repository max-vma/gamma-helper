import { Note, NoteNames, OctaveNames } from '@/entities';

export class ScaleNote extends Note {
  public _step: any;

  constructor(note: NoteNames | Note, step: number, octave?: OctaveNames) {
    if (note instanceof Note) super(note.note, note.octave);
    else super(note, octave);

    this.step = step;
  }

  public set step(step: number) {
    this._step = step;
  }

  public get step(): number {
    return this._step;
  }
}
