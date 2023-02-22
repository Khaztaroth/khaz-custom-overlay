import { useState, useEffect } from 'react';

export async function DefaultBadgeProvider () {
  const [badgeData, setBadgeData] = useState([]);

  useEffect(() => {
    const APIurl = "https://badges.twitch.tv/v1/badges/global/display?language=en";
    const APIoptions = { 
        method: 'GET', 
        headers: { 
            'Content-Type': 'application/json',
            'Client-ID': '7utx5mqq59gavm5g64oekaq0iuxuyc'
        }
    };

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

    // call the async fetchData function
    fetchData();
  }, []);

  // console.log('badgeData:', badgeData.badge_sets);

  return badgeData
};
