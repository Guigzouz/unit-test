import { useState } from 'react';
import axios from 'axios';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';


function App() {
	const [quote, setQuote] = useState('');

	const getKaamelottQuote = async () => {
		const quote = await axios.get('https://kaamelott.reiter.tf/quote/random');
		setQuote(quote.data.citation);
	};

	const handleNoteSubmit = (title: string, score: number, comment: string) => {
		// Faire la logique de gestion de notes ici
		console.log('New Note:', title, score, comment);
	  };

	return (
		<>
			<div>
      		<h1>Pronote mais en mieux</h1>
      			<NoteForm onSubmit={handleNoteSubmit} />
				<NoteList />

    		</div>
			<p data-testid="quote">{quote ? quote : 'Vite + React'}</p>
			<div className="card">
				<button data-testid="bouton-fetch" onClick={getKaamelottQuote}>
					Get random kaamelott quote
				</button>
			</div>
		</>
	);
}

export default App;
