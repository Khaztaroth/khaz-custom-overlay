export function DisplayBadges(props) {
  const CHANNEL_URL = 'https://badges.twitch.tv/v1/badges/channels/25579349/display?language=en';
  const DEFAULT_URL = 'https://badges.twitch.tv/v1/badges/global/display?language=en';
  const CHANNEL_DATA_KEY = 'ChannelData';
  const DEFAULT_DATA_KEY = 'DefaultData';
  
  const fetchData = async (url, key) => {
    try {
      const response = await fetch(url);
      localStorage.setItem(key, JSON.stringify({ response: await response.json(), receivedAt: new Date() }));
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error}`);
    }
  }
  
  const getCachedData = (key) => {
    const dataStringified = localStorage.getItem(key);
    return dataStringified ? JSON.parse(dataStringified) : null;
  }
  
  const updateData = () => {
    fetchData(CHANNEL_URL, CHANNEL_DATA_KEY);
    fetchData(DEFAULT_URL, DEFAULT_DATA_KEY);
    setTimeout(updateData, 1000 * 60 * 60 * 4);
  }
  
  const init = () => {
    const cachedChannelData = getCachedData(CHANNEL_DATA_KEY);
    const cachedDefaultData = getCachedData(DEFAULT_DATA_KEY);

    if (cachedChannelData.lenght < 0) {
      fetchData(CHANNEL_URL, CHANNEL_DATA_KEY);
    }
  
    if (cachedDefaultData.lenght < 0) {
      fetchData(DEFAULT_URL, DEFAULT_DATA_KEY);
    }
  
    setTimeout(updateData, 1000 * 60 * 60 * 4);
  }
  
  init();
  
  
  // const localChannelBadgeData = require('../json-tests/channelBadgeData.json')
  // const localDefaultBadgeData = require('../json-tests/defaultBadgeData.json') 

  const localChannelBadgeData = JSON.parse(localStorage.getItem(CHANNEL_DATA_KEY))
  const localDefaultBadgeData = JSON.parse(localStorage.getItem(DEFAULT_DATA_KEY))

  const cachedChannelBadgeData = localChannelBadgeData.response
  const cachedDefaultBadgeData = localDefaultBadgeData.response

  // console.log("cachedChannelBadgeData:", cachedChannelBadgeData);
  // console.log("cachedDefaultBadgeData:", cachedDefaultBadgeData);
  
  const renderBadge = (key, value) => {
    let badgeSet;
  
    const priorityKeys = ['subscriber', 'bits'];
    for (const priorityKey of priorityKeys) {
      if (key === priorityKey && cachedChannelBadgeData && cachedChannelBadgeData.badge_sets[priorityKey]) {
        badgeSet = cachedChannelBadgeData.badge_sets[priorityKey];
        break;
      }
    }
    
    // console.log(badgeSet)

    if (!badgeSet && cachedDefaultBadgeData && cachedDefaultBadgeData.badge_sets[key]) {
      badgeSet = cachedDefaultBadgeData.badge_sets[key];
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