import React, { createContext, useState, useEffect } from 'react';

const fetch = require('node-fetch');

export function DefaultBadgeProvider () {
  const [globalBadgeData, setGlobalBadgeData] = useState([]);

  const APIurl = "https://badges.twitch.tv/v1/badges/global/display?language=en";
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
      setGlobalBadgeData(body);
      } catch (err) {
        console.log(err);
      }
    };

    // call the async fetchData function
    fetchData();
  }, []);

  // console.log('badgeData:', badgeData.badge_sets);

  return globalBadgeData
};
