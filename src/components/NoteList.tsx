import useNoteStore from '../store/store';

const NoteList = () => {
  const notes = useNoteStore((state) => state.notes);

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
