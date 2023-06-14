import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useNoteStore = create(
  persist(
    (set) => ({
      notes: [],
      addNote: (newNote: any) => set((state: { notes: any; }) => ({ notes: [...state.notes, newNote] })),
    }),
    {
      name: 'note-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);



export default useNoteStore;