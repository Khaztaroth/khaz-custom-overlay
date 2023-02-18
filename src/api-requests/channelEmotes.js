import React, { createContext, useState, useEffect } from 'react';

const fetch = require('node-fetch');

const url = 'https://emotes.adamcy.pl/v1/channel/khaztaroth315/emotes/twitch';
const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };

export const EmoteContext = createContext();

export const EmoteProvider = ({ children }) => {
  const [emoteData, setEmoteData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //console.log('Fetching data...');
        const result = await fetch(url, options);
        const body = await result.json();
       // console.log('Data received:', body);
        setEmoteData(body);
      } catch (err) {
        console.log(err);
      }
    };

    // call the async fetchData function
    fetchData();
  }, []);

  //console.log('emoteData:', emoteData);

  return <EmoteContext.Provider value={emoteData}>{children}</EmoteContext.Provider>;
};
