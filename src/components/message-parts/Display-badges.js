import { useState, useEffect, useMemo } from 'react';

export function DisplayBadges(props) {
  // const [channelBadgeData, setChannelBadgeData] = useState([]);
  // const [defaultBadgeData, setDefaultBadgeData] = useState([]);

  // useEffect(() => {
  //   const fetchChannelBadgeData = async () => {
  //     const channelData = await fetch('https://badges.twitch.tv/v1/badges/channels/25579349/display?language=en');
  //     const channelBadges = await channelData.json();
  //     setChannelBadgeData(channelBadges);
  //     console.log("fetch channel badges:", channelBadges);
  //   }
  //   const fetchDefaultBadgeData = async () => {
  //     const defaultData = await fetch('https://badges.twitch.tv/v1/badges/global/display?language=en');
  //     const defaultBadges = await defaultData.json();
  //     setDefaultBadgeData(defaultBadges);
  //     console.log("fetched default badges:",defaultBadges)
  //   }
  //   fetchChannelBadgeData();
  //   fetchDefaultBadgeData();
  // }, []);

  // console.log("channel badges:",channelBadgeData)
  // console.log("default badges:",defaultBadgeData)

    const channelBadgeData = require('../json-tests/channelBadgeData.json')
    const defaultBadgeData = require('../json-tests/defaultBadgeData.json') 

  console.log(channelBadgeData.badge_sets.subscriber.versions[0].image_url_1x)


  const cachedChannelBadgeData = useMemo(() => channelBadgeData, [channelBadgeData]);
  const cachedDefaultBadgeData = useMemo(() => defaultBadgeData, [defaultBadgeData]);

const renderBadge = (key, value) => {
    const badgeSet = cachedChannelBadgeData.badge_sets[key] || cachedDefaultBadgeData.badge_sets[key];
    if (!cachedChannelBadgeData || !cachedChannelBadgeData) {
        return null
    } else if (badgeSet && badgeSet.versions[value]) {
      const imageUrl = badgeSet.versions[value].image_url_2x || badgeSet.versions[value].image_url_3x || badgeSet.versions[value].image_url_4x;
      return <img src={imageUrl} alt={`${key} badge`}></img>
    } else {
      return null;
    }
  }
  

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