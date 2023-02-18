import React, { createContext, useState, useEffect } from 'react';

const fetch = require('node-fetch');

export const BadgesContext = createContext();

export const BadgeProvider = ({ children }) => {
  const [badgeData, setBadgeData] = useState([]);

  const APIurl = 'https://badges.twitch.tv/v1/badges/channels/25579349/display?language=en';
    const APIoptions = { 
        method: 'GET', 
        headers: { 
            'Content-Type': 'application/json',
        }
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
      //console.log('Fetching data...');
        const result = await fetch(APIurl, APIoptions);
        const body = await result.json();
      //console.log('Data received:', body);
      setBadgeData(body);
      } catch (err) {
        console.log(err);
      }
    };

    // call the async fetchData function
    fetchData();
  }, []);

  // console.log('badgeData:', badgeData.badge_sets);

  return <BadgesContext.Provider value={badgeData}>{children}</BadgesContext.Provider>;
};
