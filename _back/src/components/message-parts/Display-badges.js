import { ChannelBadgeProvider } from "../api-requests/channelBadges";
import { DefaultBadgeProvider } from "../api-requests/defaultBadges";

export function DisplayBadges(props) {

    const channelbadgeData = ChannelBadgeProvider('25579349');
    const channelBadgeSet = channelbadgeData.badge_sets;

    const defaultBadgeData = DefaultBadgeProvider();
    const defaultBadgeSet = defaultBadgeData.badge_sets;

    console.log(channelBadgeSet)
    console.log(defaultBadgeSet)

    const channelUsers = ['subscriber','bits']

    const renderBadge = (badge, value) => {
        // take badge names and for every badge the user has display the corresponding url
        if (channelUsers.includes(badge)) {
            return <img src={channelBadgeSet[badge].versions[value].image_url_2x} alt={`${badge} badge`}></img>
        } else return <img src={defaultBadgeSet[badge].versions[1].image_url_2x} alt={`${badge} badge`}></img>
    }
      return (
        <span>
            {props.badges &&
                Object.entries(props.badges).map(([key, value]) => (
                  <span key={`${key}-${value}`} className='badges'>{renderBadge(key, value)}</span>
                ))}
        </span>

    )

};