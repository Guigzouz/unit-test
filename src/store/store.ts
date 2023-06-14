import {create} from 'zustand';

type Note = {
  title: string;
  score: number;
  comment: string;
  createdAt: string;
};

type NoteState = {
  notes: Note[];
  addNote: (note: Note) => void;
};

const useNoteStore = create<NoteState>((set) => {
  const storedNotes = localStorage.getItem('notes');
  const initialNotes = storedNotes ? JSON.parse(storedNotes) : [];

  return {
    notes: initialNotes,
    addNote: (note) =>
      set((state) => {
        const updatedNotes = [...state.notes, note];
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        return { notes: updatedNotes };
      }),
  };
});

export default useNoteStore;
