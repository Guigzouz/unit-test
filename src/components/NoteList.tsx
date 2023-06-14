import useNoteStore from '../store/store';
import Note from '../components/NoteDetails';
import { useState } from 'react';

const NoteList = () => {
  const [openNote, setOpenNote] = useState(null);
  const notes = useNoteStore((state) => state.notes);

  const updateNote = useNoteStore((state) => state.updateNote);

  const handleNoteOpen = (createdAt: any) => {
    const note = notes.find((note: { createdAt: any }) => note.createdAt === createdAt);
    setOpenNote(note);
    updateNote(createdAt, note); // Met à jour la note avec la valeur createdAt
  };

  const handleNoteClose = () => {
    setOpenNote(null);
  };

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note: any, index: any) => (
          <li key={index}>
            <strong>{note.title}</strong> - {note.createdAt}
            <br />
            {note.comment}
            <br />
            Score: {note.score}
            <br />
            <button onClick={() => handleNoteOpen(note.createdAt)}>Ouvrir Note</button>
          </li>
        ))}
      </ul>

      {openNote && (
        <Note
          note={openNote}
          onEdit={() => {
            console.log('Edit clicked');
            // Ajoutez ici la logique pour éditer la note
          }}
          onDelete={() => {
            console.log('Delete clicked');
            // Ajoutez ici la logique pour supprimer la note
          }}
          onClose={handleNoteClose} // Ajoutez cette ligne
        />
      )}
    </div>
  );
};

export default NoteList;
