import { NoteNames } from '@/entities/Note/consts';
import { Note } from './Note';

export class NoteCollection {
  private collection: Note[] = [];

  constructor(_notes?: Note[]) {
    if (_notes) this.collection = [..._notes];
  }

  public get notes(): Note[] {
    return this.collection;
  }

  public set notes(notes: Note[]) {
    this.collection = [...notes];
  }

  public has(note: Note | NoteNames, onlyNotes?: boolean): boolean {
    return this.collection.some(n => n.is(note, onlyNotes));
  }

  protected getNote(note: Note | NoteNames): Note {
    return note instanceof Note ? note : new Note(note);
  }

  public push(note: Note | NoteNames): void {
    this.collection.push(this.getNote(note));
  }

  public upOnSemitones(semiTones: number): NoteCollection {
    this.collection.forEach(note => note.upOnSemitones(semiTones));
    return this;
  }
}
