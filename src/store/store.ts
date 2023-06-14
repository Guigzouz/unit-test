import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


const useNoteStore = create(
  persist(
    (set) => ({
      notes: [],
      addNote: (newNote: any) =>
        set((state) => ({ notes: [...state.notes, newNote] })),
      updateNote: (updatedAt: string, updatedNote: any) =>
        set((state) => ({
          notes: state.notes.map((note: any) =>
            note.createdAt === updatedAt ? updatedNote : note
          ),
        })),
      deleteNote: (createdAt: string) =>
        set((state) => ({
          notes: state.notes.filter((note: any) => note.createdAt !== createdAt),
        })),
    }),
    {
      name: 'note-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);



export default useNoteStore;