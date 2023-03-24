import { useEffect, useState } from "react";
import { useColorCorrection } from "../hook/color-correction";
import { useCreateColor } from "../hook/create-color";

export function DisplayEmotes(props){
     //setting the message value to be the same as gotten from TMI to avoid printing nothing if there's no emotes
    let messageWithEmotes = props.message

    //Checking if message type is an action, for formatting reasons
    const [action, setAction] = useState(false)
    useEffect(() => {
      if (props.type === 'action') {
        setAction(true);
      }
    }, [props.type])  
    
    //Checking if message has emotes, if not skip this whole thing
    if (props.emotes != null) {
      const emoteIds = Object.keys(props.emotes);

      // Sort the emote locations in the message in descending order
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
      
      // Replace the emote codes with image elements and adjust the position of subsequent replacements
      emoteLocations.forEach((location) => {
        messageWithEmotes = messageWithEmotes.substring(0, location.startIndex) +
          `<img src="${location.emoteUrl}" alt="${location.emoteId}" />` +
          messageWithEmotes.substring(location.endIndex + 1);
        emoteLocations.forEach((subLocation) => {
          if (subLocation.startIndex > location.startIndex) {
            subLocation.startIndex += location.emoteUrl.length - location.endIndex + location.startIndex - 1;
            subLocation.endIndex += location.emoteUrl.length - location.endIndex + location.startIndex - 1;
          }
        });
      });
    }

    const randomColor = useCreateColor()
    let newColor = props.color 
    if (newColor === null) {
      newColor = randomColor;
    }
    const correctedColor = useColorCorrection(newColor)

    const styles = {
      action: {
        color: correctedColor,
        fontStyle: 'italic',
        fontWeight: 'bold',
        border: '10',
        borderColor: 'red',
        
      },
      chat: {
        color: correctedColor,
        fontStyle: 'normal',
        fontWeight: 'bold',
      }
    }

    //Re-printing the message with emotes embedded, probably not the best implementation but it works and I'm too dumb to make it better
    return <span className="user-message" dangerouslySetInnerHTML={{ __html: messageWithEmotes}} style= { action ? styles.action :  styles.chat }></span>
}
