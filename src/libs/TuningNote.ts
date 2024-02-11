import Notes, { Octaves } from "@/consts/notes";
import Note from "./Note";

export default class TuningNote extends Note {
    constructor(note: Notes, octave: Octaves){
        super(note, octave);
    }
}