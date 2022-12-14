import { useEffect, useState } from 'react';
import './App.css';
import quoteUtils from './utils/quote';

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    quoteUtils.getQuotes().then((data) => {
      setQuote(data);
    });

    // getQuote();
  }, []);

  const getQuote = () => {
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': '99eb7f3cdemsh2d60870fb02afc9p1721bdjsnab80c781e9ed',
        'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
      },
    };

    fetch(
      'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=1',
      options
    )
      .then((res) => {
        return res.json().then((data) => setQuote(data[0]));
      })
      .catch((err) => console.error(err));
  };
  console.log(quote);

  return (
    <div className='App'>
      <div id='wrapper'>
        <div id='quote-box'>
          <div id='text'>
            <h1>{quote.quote}</h1>
          </div>
          <div id='author'>
            {quote.author && '- '} <span>{quote.author}</span>
          </div>
          <div className='buttons'>
            <button className='button' id='new-quote'>
              new quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
