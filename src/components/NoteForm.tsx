import { useState } from 'react';

const NoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [score, setScore] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      score: parseInt(score),
      comment,
      createdAt: new Date().toISOString(),
    };

    // Stockage de la nouvelle note dans le LocalStorage
    const existingNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    const updatedNotes = [...existingNotes, newNote];
    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    onSubmit(title, parseInt(score), comment);
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
