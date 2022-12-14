const quoteUtils = {
  getQuotes: async () => {
    return fetch(`https://type.fit/api/quotes`).then((res) => {
      return res.json().then((data) => data);
    });
  },
};

export default quoteUtils;
