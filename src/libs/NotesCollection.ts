import Note from "./Note";

export default class NotesCollection {
    collection: Note[] = [];

    // constructor(){
    // }

    public get notes (): Note[] {
        return this.collection;
    }

    public set notes (notes: Note[]) {
        this.collection = [...notes];
    }
    public has(note: Note): boolean{
        return this.collection.some(n => {
            return n.note === note.note
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