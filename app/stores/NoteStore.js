import uuid from 'node-uuid';
import alt from '../lib/alt';
import NoteActions from '../actions/NoteActions.js';

class NoteStore {
    constructor() {
        this.bindActions(NoteActions);
        this.notes = [];
    }
    create(note){
        const notes = this.notes;

        note.id = uuid.v4();

        this.setState({
            notes: notes.concat(note)
        });
    }
    update(updateNote){
        const notes = this.notes.map(note => {
            if(note.id === updateNote.id){
                return Object.assingn({}, note, updatedNote);
            }
            return note;
        });
    this.setState({notes});
    }
    delete(id){
        this.setState({
            notes: this.notes.filter(note => note.id !== id)
        });
    }
}

export default alt.createStore(NoteStore, 'NoteStore');