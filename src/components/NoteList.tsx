// ce composant affiche la liste des notes existantes en utilisant le composant Note.
import { useState, useEffect } from 'react';


const NoteList = () => {
    type Note = {
        title: string;
        createdAt: string;
        comment: string;
        score: number;
      };
      
    const [notes, setNotes] = useState<Note[]>([]);
  
    useEffect(() => {
      // Récupérer les notes depuis le LocalStorage
      const storedNotes = localStorage.getItem('notes');
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    }, []);
  
    return (
      <div>
        <h2>Notes</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <strong>{note.title}</strong> - {note.createdAt}
              <br />
              {note.comment}
              <br />
              Score: {note.score}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default NoteList;
  