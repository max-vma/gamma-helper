import Notes, {  NOTES_LAST_INDEX, Octaves } from "@/consts/notes";


export default class Note {
    private _note: Notes = Notes.C;
    private _octave?: Octaves;
    public noteName = '';

    constructor(note: Notes, octave?: Octaves){
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

    public set octave (octave: Octaves | undefined){
        this._octave = octave;
        this.noteName = this.getNoteName();
    }

    public get octave(): Octaves | undefined{
        return this._octave;
    }


    public upOnSemitones(semiTones: number): Note{
        let currentNoteIndex: number = (this.note as number + semiTones);
        if(currentNoteIndex > NOTES_LAST_INDEX) currentNoteIndex = currentNoteIndex - NOTES_LAST_INDEX - 1;
        
        const a = Notes[currentNoteIndex];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.note = Notes[a];
        return this;
    }

    public getNoteName (noteNumber: number = this.note, octave?: Octaves): string {

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