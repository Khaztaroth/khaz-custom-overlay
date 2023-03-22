import { useEffect, useState } from "react";
import { useColorCorrection } from "../hook/color-correction";
import { useCreateColor } from "../hook/create-color";

export function DisplayEmotes(props) {
  let messageWithEmotes = props.message;
  const [action, setAction] = useState(false);
  useEffect(() => {
    if (props.type === 'action') {
      setAction(true);
    }
  }, [props.type]);

  if (props.emotes != null) {
    const emoteIds = Object.keys(props.emotes);
    const emoteLocations = emoteIds.flatMap((emoteId) => {
      return props.emotes[emoteId].map((location) => {
        return {
          startIndex: parseInt(location.split('-')[0]),
          endIndex: parseInt(location.split('-')[1]),
          emoteUrl: `https://static-cdn.jtvnw.net/emoticons/v2/${emoteId}/default/light/2.0`,
          emoteId: emoteId
        };
      });
    }).sort((a, b) => {
      return b.startIndex - a.startIndex;
    });

    const messageParts = [];
    let currentIndex = 0;

    emoteLocations.forEach((location) => {
      const textBeforeEmote = messageWithEmotes.substring(currentIndex, location.startIndex);
      messageParts.push(textBeforeEmote);
      messageParts.push(<img key={location.emoteId} src={location.emoteUrl} alt={location.emoteId} />);
      currentIndex = location.endIndex + 1;
    });

    // Add the remaining text after the last emote location
    if (currentIndex < messageWithEmotes.length) {
      messageParts.push(messageWithEmotes.substring(currentIndex));
    }

    messageWithEmotes = messageParts;
  }

  const randomColor = useCreateColor();
  let newColor = props.color;
  if (newColor === null) {
    newColor = randomColor;
  }
  const correctedColor = useColorCorrection(newColor);

  const styles = {
    action: {
      color: correctedColor,
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
    chat: {
      color: 'white',
      fontStyle: 'normal',
      fontWeight: 'normal',
    }
  };

  return (
    <span className="user-message" style={ action ? styles.action : styles.chat }>
      {messageWithEmotes}
    </span>
  );
}
