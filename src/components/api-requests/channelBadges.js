import { useState, useEffect } from 'react';

export async function ChannelBadgeProvider(id) {
  const [badgeData, setBadgeData] = useState([]);

  useEffect(() => {
    const APIurl = `https://badges.twitch.tv/v1/badges/channels/25579349/display?language=en`;
    const APIoptions = { method: 'GET' };

    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const result = await fetch(APIurl, APIoptions);
        const body = await result.json();
        console.log('Data received:', body);
        setBadgeData(body);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  // wrap the badgeData in a React fragment before returning it
  return badgeData
}