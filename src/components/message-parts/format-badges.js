//this code is better than before but it ain't good

import DOMPurify from "dompurify";
import { CHANNEL_KEY, DEFAULT_KEY, FetchBadges } from "../api-requests/badge-fetcher";
import { RenderBadge } from "../hook/badge-rendered";

export function DisplayBadges(props) {

  const cachedChannelBadges = JSON.parse(localStorage.getItem(CHANNEL_KEY));
  const cachedDefaultBadges = JSON.parse(localStorage.getItem(DEFAULT_KEY));
  
  var badges = [];

  if (cachedChannelBadges == null || cachedDefaultBadges == null) {
    FetchBadges(props.id);
  } else {
    badges.push(cachedChannelBadges.badge_sets, cachedDefaultBadges.badge_sets)
  }

  const userBadges = props.badges

    var img = []
    userBadges.forEach((key, value) => {
        const badge = RenderBadge(value, key, badges);  
        img.push(badge)
        }
      );

  const sanitizer = DOMPurify.sanitize

  return (
      <span className='badges' dangerouslySetInnerHTML={{__html: sanitizer(img.join(''))}}></span>
  )
}