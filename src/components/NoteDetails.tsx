import  { useState } from 'react';
import useNoteStore from '../store/store';

type NoteProps = {
  note: {
    title: string;
    score: number;
    comment: string;
    createdAt: string;
  };
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
};

const NoteDetails = (props: NoteProps) => {
  const { note, onClose } = props;
  const updateNote = useNoteStore((state) => state.updateNote);
  const deleteNote = useNoteStore((state) => state.deleteNote);

  const [editedNote, setEditedNote] = useState(note);

  const handleEditNote = (e) => {
    const { name, value } = e.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateNote(note.createdAt, editedNote);
    onClose(); // Call the original onEdit handler to exit edit mode
  };

  const handleDelete = () => {
    deleteNote(note.createdAt);
    onClose(); // Call the original onDelete handler to exit edit mode
  };

  return (
    <div>
      <h2>{note.title}</h2>
      <input
        type="text"
        name="title"
        value={editedNote.title}
        onChange={handleEditNote}
      />
      <p>Score: {note.score}</p>
      <input
        type="number"
        name="score"
        value={editedNote.score}
        onChange={handleEditNote}
      />
      <p>Comment: {note.comment}</p>
      <textarea
        name="comment"
        value={editedNote.comment}
        onChange={handleEditNote}
      />
      <p>Created At: {note.createdAt}</p>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default NoteDetails;
