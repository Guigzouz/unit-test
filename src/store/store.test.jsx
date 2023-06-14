import useNoteStore from "../store/store";
import { expect, it, describe } from "vitest";

describe('useNoteStore', () => { 
    it('should add note', () => {

        const { addNote } = useNoteStore.getState();
        addNote('test note');
        const { notes } = useNoteStore.getState();
        expect(notes).toEqual(['test note']);
 })
 
    it('should remove note', () => {
        const { addNote, deleteNote } = useNoteStore.getState();
        addNote('test note');
        deleteNote();
        const { notes } = useNoteStore.getState();
        expect(notes).toEqual([]);
    })

    it('should update note', () => {
        const { addNote, updateNote } = useNoteStore.getState();
        addNote({ title: 'test note', score: 0, comment: 'test comment' });
        updateNote('test note', { title: 'updated note', score: 10, comment: 'updated comment' });
        const { notes } = useNoteStore.getState();
        expect(notes).toEqual([
          { title: 'updated note', score: 10, comment: 'updated comment' }
        ]);
      });
      
});