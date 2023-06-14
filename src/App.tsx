import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [quote, setQuote] = useState('');

	const getKaamelottQuote = async () => {
		const quote = await axios.get('https://kaamelott.reiter.tf/quote/random');
		setQuote(quote.data.citation);
	};

	return (
		<>
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
