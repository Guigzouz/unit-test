import { useState } from 'react';
import useNoteStore from '../store/store';

const NoteForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [score, setScore] = useState('');
    const [comment, setComment] = useState('');
  
    const addNote = useNoteStore((state) => state.addNote);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newNote = {
        title,
        score: parseInt(score),
        comment,
        createdAt: new Date().toISOString(),
      };
  
      addNote(newNote);
      setTitle('');
      setScore('');
      setComment('');

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Score:
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />
      </label>
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
      </label>
      <button type="submit">Create Note</button>
    </form>
  );
};

export default NoteForm;
