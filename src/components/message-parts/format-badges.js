import DOMPurify from "dompurify";
import { CHANNEL_KEY, DEFAULT_KEY, USER_KEY, FetchBadges } from "../api-requests/badge-fetcher";
import { RenderBadge } from "../hook/badge-renderer";

export function DisplayBadges({id, badges}) {

  const channel = localStorage.getItem(USER_KEY);
  const cachedChannelBadges = JSON.parse(localStorage.getItem(CHANNEL_KEY));
  const cachedDefaultBadges = JSON.parse(localStorage.getItem(DEFAULT_KEY));
  
  var currentBadges = [];

  if (channel !== id || cachedChannelBadges == null || cachedDefaultBadges == null) {
    FetchBadges(id);
  } else {
    currentBadges.push(cachedChannelBadges.badge_sets, cachedDefaultBadges.badge_sets)
  }

  const userBadges = badges

    var img = []
    userBadges.forEach((key, value) => {
        const badge = RenderBadge(value, key, currentBadges);  
        img.push(badge)
        }
      );

  const sanitizer = DOMPurify.sanitize

  return (
      <span className='badges' dangerouslySetInnerHTML={{__html: sanitizer(img.join(''))}}></span>
  )
}