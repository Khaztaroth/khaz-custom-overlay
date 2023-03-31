import { useEffect } from "react";

export const CHANNEL_KEY = "channelBadges";
export const DEFAULT_KEY = "defaultBadges";  
export const USER_KEY = "channel";

export function FetchBadges (channel) {  
  const CHANNEL_URL = `https://badges.twitch.tv/v1/badges/channels/${channel}/display?language=en`;
  const DEFAULT_URL = 'https://badges.twitch.tv/v1/badges/global/display?language=en';
    
        //fetch constant to get the data
        const fetchData = async (url, key) => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            localStorage.setItem(key, JSON.stringify(data));
          } catch (error) {
            console.error(`Can't fetch data from ${url}: ${error}`)
          }
            }

        useEffect(() =>{
           fetchData(CHANNEL_URL, CHANNEL_KEY);
           fetchData(DEFAULT_URL, DEFAULT_KEY);
           localStorage.setItem(USER_KEY,channel)
        }, [CHANNEL_URL, DEFAULT_URL, channel])

      }