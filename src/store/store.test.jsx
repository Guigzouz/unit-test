import useNoteStore from "../store/store";
import { expect, it, describe } from "vitest";

describe('useNoteStore', () => { 
    it('should add note', () => {

        const { addNote } = useNoteStore.getState();
        addNote('test note');
        const { notes } = useNoteStore.getState();
        expect(notes).toEqual(['test note']);
 })

});