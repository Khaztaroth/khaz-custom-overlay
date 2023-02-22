
export function DisplayEmotes(props){
    //Processes the emote IDs that come from the "tags" array
    
    let messageWithEmotes = props.message
    
    //console.log(props.emotes)
    
    if (props.emotes != null) {
      const emoteIds = Object.keys(props.emotes);


      // Sort the emote locations in the message in descending order
      const emoteLocations = emoteIds.flatMap((emoteId) => {
        return props.emotes[emoteId].map((location) => {
          return {
            startIndex: parseInt(location.split('-')[0]),
            endIndex: parseInt(location.split('-')[1]),
            emoteUrl: `https://static-cdn.jtvnw.net/emoticons/v2/${emoteId}/default/light/1.0`,
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



    return <span className="user-message" dangerouslySetInnerHTML={{ __html: messageWithEmotes}}></span>
}