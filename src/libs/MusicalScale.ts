import Notes from "@/consts/notes";
import { ScaleNames, Scales } from "../consts/scales";
import { Note, ScaleNote } from "./index";
import { NotesCollection } from "./NotesCollection";

export class MusicalScale extends NotesCollection{
    public _tonic: Note = new Note(Notes.C);
    public _scale: ScaleNames = ScaleNames.NaturalMinor

    constructor(tonic: Notes, scale: ScaleNames){
        super()
        this.scale = scale;
        this._tonic = new Note(tonic);
        
        this.createScale();
    }

    private createScale(){
        const steps = Scales[this.scale]
        this.collection.push(this.tonic)
        const currentNote = new Note(this.tonic.note);

        console.log(steps)
        steps.forEach((s: number, index) => {
            const uppedNote = currentNote.upOnSemitones(s);
            this.collection.push(new ScaleNote(uppedNote, index + 1))
        })
    }

    public getStepIndex(note: Note | Notes): number{
        return this.collection.findIndex(n => n.note === this.getNote(note).note)
    }

    public set scale (scale: ScaleNames){
        this._scale = scale;
    }

    public get scale (): ScaleNames{
        return this._scale;
    }

    public set tonic (tonic: Note){
        this._tonic = tonic;
    }

    public get tonic (): Note{
        return this._tonic;
    }
    
}