import Note from "@/libs/Note";
import NotesCollection from "@/libs/NotesCollection";
import Notes from "./notes";

export class MusicalScale extends NotesCollection{
    public _tonic: Notes = Notes.C;
    public _scale: ScaleNames = ScaleNames.NaturalMinor

    constructor(tonic: Notes, scale: ScaleNames){
        super()
        this.scale = scale;
        this._tonic = tonic;

    }


    public set scale (scale: ScaleNames){
        this._scale = scale;
    }

    public get scale (): ScaleNames{
        return this._scale;
    }

    

    
}