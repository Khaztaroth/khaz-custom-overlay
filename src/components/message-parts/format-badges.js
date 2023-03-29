//this code is better than before but it ain't good

import DOMPurify from "dompurify";
import { CHANNEL_KEY, DEFAULT_KEY, FetchBadges } from "../api-requests/badge-handler";

export function DisplayBadges(props) {

  const cachedChannelBadges = JSON.parse(localStorage.getItem(CHANNEL_KEY));
  const cachedDefaultBadges = JSON.parse(localStorage.getItem(DEFAULT_KEY));
  
  var badges = [];

  if (cachedChannelBadges == null || cachedDefaultBadges == null) {
    FetchBadges(props.id);
  } else {
    badges.push(cachedChannelBadges.badge_sets, cachedDefaultBadges.badge_sets)
  }

      const renderBadge = (key, value) => {
        if (badges.length > 1) {
          const subBadges = badges[0];
          const defaultBadges = badges[1];
  
          let badgeSet
  
          const priorityKeys = ['subscriber', 'bits'];
          if (priorityKeys.includes(key) && subBadges[key]) {
            badgeSet = subBadges[key];
          }
      
          if (!badgeSet && defaultBadges[key]) {
            badgeSet = defaultBadges[key]
          }
  
          if (badgeSet && badgeSet.versions[value]) {
            const url = badgeSet.versions[value].image_url_2x || badgeSet.versions[value].image_url_1x || badgeSet.versions[value].image_url_4x;
            const img = `<img src=${url} alt={${key} badge}/>`
            return img
          } else {
              return null
          };
      } else {
          return null
        };
    };

    const userBadges = props.badges

    var img = []
    userBadges.forEach((key, value) => {
        const badge = renderBadge(value, key);  
        img.push(badge)
        }
      );

  const sanitizer = DOMPurify.sanitize

  return (
      <span className='badges' dangerouslySetInnerHTML={{__html: sanitizer(img.join(''))}}></span>
  )
}