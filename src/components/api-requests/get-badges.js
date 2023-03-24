import { useEffect, useState } from "react";

//fetch constant to get the data
const fetchData = async (url, key) => {
    try {
      const response = await fetch(url);
      localStorage.setItem(key, JSON.stringify({ response: await response.json(), receivedAt: new Date() }));
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error}`);
    }
  };

export function useChannelBadges(id) {
    //setting constants to use for the fetch call
    const CHANNEL_URL = `https://badges.twitch.tv/v1/badges/channels/${id}/display?language=en`;
    const CHANNEL_DATA_KEY = 'ChannelData';


    //setting badge data to be null at first, used to avoid not fetching it on first launch
    const [channelBadgeData, setChannelBadgeData] = useState(null)

    //checking if the data is there, if not, fetch it
    useEffect(() => {
        const cachedChannelData = JSON.parse(localStorage.getItem(CHANNEL_DATA_KEY));

        if (cachedChannelData == null) {
            fetchData(CHANNEL_URL, CHANNEL_DATA_KEY);
        } else {
            setChannelBadgeData(cachedChannelData.response);
        }

        const intervalId = setInterval(() => {
            fetchData(CHANNEL_URL, CHANNEL_DATA_KEY);
        }, 1000 * 60 * 60 * 4);

        return () => clearInterval(intervalId);
        }, [CHANNEL_URL]);

    if (!channelBadgeData) {
    return null;
    }

    return channelBadgeData
};

export function useDefaultBadges() {
    //setting constants to use for the fetch call
    const DEFAULT_URL = 'https://badges.twitch.tv/v1/badges/global/display?language=en';
    const DEFAULT_DATA_KEY = 'DefaultData';

    //setting badge data to be null at first, used to avoid not fetching it on first launch
    const [defaultBadgeData, setDefaultBadgeData] = useState(null);

    //checking if the data is there, if not, fetch it
    useEffect(() => {
        const cachedDefaultData = JSON.parse(localStorage.getItem(DEFAULT_DATA_KEY));

        if (cachedDefaultData == null) {
            fetchData(DEFAULT_URL, DEFAULT_DATA_KEY);
        } else {
            setDefaultBadgeData(cachedDefaultData.response);
        }

        const intervalId = setInterval(() => {
            fetchData(DEFAULT_URL, DEFAULT_DATA_KEY);
        }, 1000 * 60 * 60 * 4);

        return () => clearInterval(intervalId);
        }, [DEFAULT_URL]);
    
    if (!defaultBadgeData) {
      return null;
    }
    
    return defaultBadgeData
};