import { useEffect, useState } from "react";

export function DisplayBadges(props) {
  const CHANNEL_URL = `https://badges.twitch.tv/v1/badges/channels/${props.id}/display?language=en`;
  const DEFAULT_URL = 'https://badges.twitch.tv/v1/badges/global/display?language=en';
  const CHANNEL_DATA_KEY = 'ChannelData';
  const DEFAULT_DATA_KEY = 'DefaultData';

  const [channelBadgeData, setChannelBadgeData] = useState(null);
  const [defaultBadgeData, setDefaultBadgeData] = useState(null);
  
  const fetchData = async (url, key) => {
    try {
      const response = await fetch(url);
      localStorage.setItem(key, JSON.stringify({ response: await response.json(), receivedAt: new Date() }));
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error}`);
    }
  }

  useEffect(() => {
    const cachedChannelData = JSON.parse(localStorage.getItem(CHANNEL_DATA_KEY));
    const cachedDefaultData = JSON.parse(localStorage.getItem(DEFAULT_DATA_KEY));

    if (cachedChannelData == null) {
      fetchData(CHANNEL_URL, CHANNEL_DATA_KEY);
    } else {
      setChannelBadgeData(cachedChannelData.response);
    }

    if (cachedDefaultData == null) {
      fetchData(DEFAULT_URL, DEFAULT_DATA_KEY);
    } else {
      setDefaultBadgeData(cachedDefaultData.response);
    }

    const intervalId = setInterval(() => {
      fetchData(CHANNEL_URL, CHANNEL_DATA_KEY);
      fetchData(DEFAULT_URL, DEFAULT_DATA_KEY);
    }, 1000 * 60 * 60 * 4);

    return () => clearInterval(intervalId);
  }, [CHANNEL_URL, DEFAULT_URL]);

  if (!channelBadgeData || !defaultBadgeData) {
    return null;
  }

  const renderBadge = (key, value) => {
    let badgeSet;

    const priorityKeys = ['subscriber', 'bits'];
    for (const priorityKey of priorityKeys) {
      if (key === priorityKey && channelBadgeData.badge_sets[priorityKey]) {
        badgeSet = channelBadgeData.badge_sets[priorityKey];
        break;
      }
    }

    if (!badgeSet && defaultBadgeData.badge_sets[key]) {
      badgeSet = defaultBadgeData.badge_sets[key];
    }

    if (badgeSet && badgeSet.versions[value]) {
      const imageUrl = badgeSet.versions[value].image_url_2x || badgeSet.versions[value].image_url_3x || badgeSet.versions[value].image_url_4x;
      return <img src={imageUrl} alt={`${key} badge`} />;
    } else {
      return null;
    }
  };

  return (
    <span>
      {props.badges && Object.entries(props.badges).map(([key, value]) => (
        <span key={`${key}-${value}`} className='badges'>
          {renderBadge(key, value)}
        </span>
      ))}
    </span>
  );
}