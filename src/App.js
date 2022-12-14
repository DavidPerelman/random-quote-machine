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

    const appEl = document.getElementsByClassName('App');
    const quoteBox = document.getElementById('quote-box');
    appEl[0].style.backgroundColor = colorArray[random];
    quoteBox.style.color = colorArray[random];

    const buttons = document.getElementsByClassName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = colorArray[random];
    }
  };

  const getNewQuote = () => {
    setNewQuote();
    setColors();
  };

  return (
    <>
      <div className='App'>
        <div id='wrapper'>
          <div id='quote-box'>
            <div className='quote-text'>
              {quote.text && (
                <i className='fa fa-quote-left' aria-hidden='true'></i>
              )}
              <span>{quote.text}</span>
            </div>
            <div className='quote-author'>
              {quote.author && '- '} <span>{quote.author}</span>
            </div>

            <div className='buttons'>
              <a className='button' id='tweet-quote'>
                <i className='fa-brands fa-twitter'></i>
              </a>
              <a className='button' id='whatsapp-quote'>
                <i className='fa-brands fa-whatsapp'></i>
              </a>

              <button className='button' id='new-quote' onClick={getNewQuote}>
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
