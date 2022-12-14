import axios from 'axios';

const quoteUtils = {
  getQuotes: async () => {
    console.log('getQuotes');

    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': '99eb7f3cdemsh2d60870fb02afc9p1721bdjsnab80c781e9ed',
        'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
      },
    };

    return fetch(
      'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=1',
      options
    )
      .then((res) => {
        return res.json().then((data) => data[0]);
        // return res.json().then((data) => console.log(data));
      })
      .catch((err) => console.error(err));
  },
};

export default quoteUtils;
