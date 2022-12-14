import { useEffect, useState } from 'react';
import colorArray from './data/colors';
import quoteUtils from './utils/quote';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    quoteUtils.getQuotes().then((data) => {
      setQuotes(data);
      const random = Math.floor(Math.random() * data.length);
      setQuote(data[random]);
    });
    setColors();
  }, []);

  const setNewQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  const setColors = () => {
    const random = Math.floor(Math.random() * colorArray.length);

    document.body.style.backgroundColor = colorArray[random];
    document.body.style.color = colorArray[random];

    const buttons = document.getElementsByClassName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = colorArray[random];
    }
    console.log(colorArray[random]);
  };

  const whatsapp = () => {
    window.open(`whatsapp://send?text=${quote.text} - ${quote.author}`);
  };

  const getNewQuote = () => {
    setNewQuote();
    setColors();
  };

  return (
    <div id='wrapper'>
      <div id='quote-box'>
        <div className='quote-text'>
          {quote.text && (
            <i className='fa fa-quote-left' aria-hidden='true'></i>
          )}
          <span>{quote.text}</span>
        </div>
        <div className='quote-author'>
          {quote.author && <span>- {quote.author}</span>}
        </div>

        <div className='buttons'>
          <a className='button' id='tweet-quote'>
            <i className='fa-brands fa-twitter'></i>
          </a>
          <a className='button' id='whatsapp-quote' onClick={whatsapp}>
            <i className='fa-brands fa-whatsapp'></i>
          </a>

          <button className='button' id='new-quote' onClick={getNewQuote}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
