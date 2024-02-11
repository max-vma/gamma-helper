import Notes from "@/consts/notes";
import Note from "./Note";

export default class NotesCollection {
    collection: Note[] = [];

    public get notes (): Note[] {
        return this.collection;
    }

    public set notes (notes: Note[]) {
        this.collection = [...notes];
    }
    public has(note: Note | Notes): boolean{
        const noteName = (note instanceof Note) ? note.note : note;

        return this.collection.some(n => {
            return n.note === noteName
        })
    }
    public push(note: Note): void{
        this.collection.push(note)
    }

    public upOnSemitones(semiTones: number): NotesCollection{
        this.collection.forEach(note => note.upOnSemitones(semiTones))
        return this;
    }
}