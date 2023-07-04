import Notes, {  NOTES_LAST_INDEX, Octaves } from "@/consts/notes";


export default class Note {
    public _note: Notes = Notes.C;
    public _octave: Octaves | null = null;
    public noteName = '';

    constructor(note: Notes, octave: Octaves | null = null){
        this.note = note;
        this.octave = octave;
    }

    public set note (note: Notes){
        this._note = note;
        this.noteName = this.getNoteName();
    }

    public get note(): Notes {
        return this._note;
    }

    public set octave (octave: Octaves | null){
        this._octave = octave;
        this.noteName = this.getNoteName();
    }

    public get octave(): Octaves | null{
        return this._octave;
    }

    public upOnSemitones(semiTones: number): Note{
        return this;
    }

    public getNoteName (noteNumber: number = this.note, octave: number | null = this.octave): string {

        const noteNames = Object.keys(Notes).filter(key => isNaN(Number(key))) as Array<keyof typeof Notes>;
        const noteName = noteNames.find(name => Notes[name] === noteNumber);
        return `${noteName}${octave ? octave : ''}`;
      }

    public getNextSemitoneNote(): Note{
        let currentNote = this.note;
        let currentOctave = this.octave;
        
        if(currentNote + 1 > NOTES_LAST_INDEX){
            currentNote = Notes.C;
            currentOctave && currentOctave++;
        }else{
            currentNote = currentNote + 1;
        }
        return new Note(currentNote, currentOctave);
    }
}