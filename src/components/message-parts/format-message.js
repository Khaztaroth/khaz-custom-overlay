import DOMPurify from "dompurify";
import { useColorCorrection } from "../hook/color-correction";

export function DisplayEmotes(props){
    //Checking if message type is an action, for formatting reasons
      const messageType  = props.type;

      const messageArray = props.message;
      var newMessageArray = [];
      
      messageArray.forEach((part) => {
        if (part.type === 'text') {
          newMessageArray.push(part.text)
        } else if (part.type === 'emote'){
          const id = part.id
          const emoteUrl = `https://static-cdn.jtvnw.net/emoticons/v2/${id}/default/light/2.0`
          const img = `<img src=${emoteUrl} alt=${part.name} />` 
          newMessageArray.push(img)
        } else return null
      })

    const sanitizer = DOMPurify.sanitize;

    let newColor = props.color;
    const correctedColor = useColorCorrection(newColor);

    const styles = (type) => {
      switch(type) {
        case 'chat': return {
          color: 'white',
          fontStyle: 'normal',
          fontWeight: 'bold',
          }
        case 'action': return {
          color: correctedColor,
          fontStyle: 'italic',
          fontWeight: 'bold',
          }
        case 'announcement': return {
          color: "white",
          fontStyle: 'italic',
          fontWeight: 'bold',
        }
        default: return {
          color: 'white',
          fontStyle: 'normal',
          fontWeight: 'bold',
        }
      }
    }

    //Re-printing the message with emotes embedded, probably not the best implementation but it works and I'm too dumb to make it better
    return <span className="user-message" style= { styles(messageType) }><section dangerouslySetInnerHTML={{__html: sanitizer(newMessageArray.join(''))}}></section></span>
}
