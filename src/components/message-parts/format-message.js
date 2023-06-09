import DOMPurify from "dompurify";
import { useColorCorrection } from "../hook/color-correction";
import { MessageStyles } from "../../pages/style/message-style";

export function DisplayMessage({type, message, color, user}){
    //Checking if message type is an action, for formatting reasons
      const messageType  = type;

      const messageArray = message;
      var newMessageArray = [];
      
      messageArray.forEach((part) => {
        if (part.type === 'text') {
            if (part.text === 'D:') {
              const deecolonUrl = `https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/3x.webp`
              const deecolonImg = `<img src=${deecolonUrl} alt="D:" />`
              newMessageArray.push(deecolonImg)
            } else newMessageArray.push(part.text)
        } else if (part.type === 'emote'){
          const id = part.id
          const emoteUrl = `https://static-cdn.jtvnw.net/emoticons/v2/${id}/default/light/2.0`
          const img = `<img src=${emoteUrl} alt=${part.name} />` 
          newMessageArray.push(img)
        } else return null
      })

    const sanitizer = DOMPurify.sanitize;

    let newColor = color;
    const correctedColor = useColorCorrection(newColor);

    //Re-printing the message with emotes embedded, probably not the best implementation but it works and I'm too dumb to make it better
    return <div className="user-message" style= { MessageStyles(messageType, user, correctedColor) } dangerouslySetInnerHTML={{__html: sanitizer(newMessageArray.join(''))}}></div>
}
