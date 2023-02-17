import React from "react";
import { useContext } from "react";
import { EmoteContext } from "./channelEmotes";

function DisplayAllEmotes() {
  const emoteData = useContext(EmoteContext);

  if (!emoteData || emoteData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Emotes</h1>
      <ul>
        {emoteData.map((emote) => (
          <li key={emote.code}>
            <p>{emote.code}</p>
            <img src={emote.urls[1].url} alt={emote.code} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayAllEmotes