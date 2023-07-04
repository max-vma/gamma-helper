import Note from "@/libs/Note";
import NotesCollection from "@/libs/NotesCollection";
import Notes from "./notes";
import { ScaleNames, Scales } from "./scales";

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
        // steps.forEach(toneStep => {

        // })
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