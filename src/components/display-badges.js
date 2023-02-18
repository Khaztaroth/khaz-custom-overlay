import React from "react";
import { useContext } from "react";
import { BadgesContext } from "./channelBadges";

function DisplayBadges() {
  const badgeData = useContext(BadgesContext);

  if (!badgeData || badgeData.length === 0) {
    return <p>Loading...</p>;
  }

  const bitsBadges = badgeData.badge_sets.bits;
  const subBadges = badgeData.badge_sets.subscriber

  console.log(badgeData)

  return (
    <div>
      <div>
        {Object.keys(bitsBadges.versions).map((version) => {
          const badge = bitsBadges.versions[version];
          return (
            <div key={version}>
              <img src={badge.image_url_1x} alt={badge.title} />
            </div>
          );
        })}      
      </div>
      <div>
      {Object.keys(subBadges.versions).map((version) => {
        const badge = subBadges.versions[version];
        return (
          <div key={version}>
            <img src={badge.image_url_1x} alt={badge.title} />
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default DisplayBadges