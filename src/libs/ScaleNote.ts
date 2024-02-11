import Notes, { Octaves } from "@/consts/notes";
import Note from "./Note";

export default class ScaleNote extends Note {
    private _step: any;
    
    constructor(note: Notes, step: number, octave?: Octaves){
        super(note, octave);
        this.step = step;
    }

    public set step (step: number){
        this._step = step;
    }

    public get step(): number{
        return this._step;
    }
}