export function DisplayBadges(props) {

  const CHANNEL_DATA_KEY='ChannelData';
  const DEFAULT_DATA_KEY='DefaultData'

  const channelBadgeData = JSON.parse(localStorage.getItem(CHANNEL_DATA_KEY))
  const defaultBadgeData = JSON.parse(localStorage.getItem(DEFAULT_DATA_KEY))

  //Rendering the badges by checking which one it is, then inserting an img segment
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

  //rendering the badges, if there's any
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