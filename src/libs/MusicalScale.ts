import Note from "@/libs/Note";
import NotesCollection from "@/libs/NotesCollection";
import Notes from "../consts/notes";
import { ScaleNames, Scales } from "../consts/scales";

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
        steps.forEach((s: number) => {
            const uppedNote = currentNote.upOnSemitones(s);
            this.collection.push(new Note(uppedNote.note))
        })
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