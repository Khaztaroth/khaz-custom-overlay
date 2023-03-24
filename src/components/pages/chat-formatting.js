import { useEffect, useRef } from "react";
import { DisplayBadges } from "../message-parts/format-badges";
import { DisplayEmotes } from "../message-parts/format-message";
import { DisplayName } from "../message-parts/format-name";

import { UseMessages } from "../api-requests/message-handler";
import { useChannelBadges, useDefaultBadges } from "../api-requests/get-badges";

//sets up a url search in the current domain
const params = new URLSearchParams(window.location.search)

//looks for the value assinged to the "channel" header (url/thing?channel=)
const channel = params.get('channel')

//Chat renderer
export function DisplayChat() {

  
    //getting messages from the TMI library
    const messages = UseMessages(channel);
        
    //Defining an effect that will scroll to the latest message
    const messagesEndRef = useRef(null);
    useEffect(() => {
      const container = messagesEndRef.current;
      const shouldScroll =
        container.scrollHeight > container.clientHeight + container.scrollTop;
      if (shouldScroll) {
        container.scrollTop = container.scrollHeight;
      }
    }, [messages]);

    console.log("channel id", messages.map((message) => (message.channelId)))

    useChannelBadges(messages.map((message) => (message.channelId)));
    useDefaultBadges();  

    //Message formatter, each element handles its segment through prop calls
    return (
      <div
        className="chatContainer"
        id="chatContainer"
        ref={messagesEndRef}
      >
        {messages.map((message, index) => (
          <div key={index} className="message">
            <DisplayBadges badges={message.badges} id={message.channelId} />
            <DisplayName
              user={message.username}
              color={message.color}
              style={{ color: "white" }}
            />
            <DisplayEmotes emotes={message.emotes} message={message.message} type={message.type} color={message.color}/>
          </div>
        ))}
      </div>
    )
}
