import React, { createContext, useState, useEffect } from 'react';

const fetch = require('node-fetch');

export function ChannelBadgeProvider (id = '25579349' ) {
  const [channelBadgeData, setChannelBadgeData] = useState([]);

  const APIurl = `https://badges.twitch.tv/v1/badges/channels/${id}/display?language=en`;
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
      setChannelBadgeData(body);
      } catch (err) {
        console.log(err);
      }
    };

    // call the async fetchData function
    fetchData();
  }, [id]);

  // console.log('badgeData:', badgeData.badge_sets);

  return channelBadgeData
};
