export function RenderBadge (key, value, badges) {
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