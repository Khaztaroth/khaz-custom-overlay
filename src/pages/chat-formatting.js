import { useEffect, useRef } from "react";
import { DisplayBadges } from "../components/message-parts/format-badges.js";
import { DisplayEmotes } from "../components/message-parts/format-message";
import { DisplayName } from "../components/message-parts/format-name";
import { DisplayPronouns } from "../components/message-parts/format-pronouns.js";

import { useMessages } from "../components/handlers/message-handler";

//Chat renderer
export function DisplayChat() {

    //getting messages from the TMI library
    const messages = useMessages();
        
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

    const MessageBG = (type) => {
      switch(type) {
        case 'chat': return {
          backgroundColor: `rgba(32, 32, 32, 0.904)`
        }
        case 'action': return {
          backgroundColor: `rgba(32, 32, 32, 0.904)`
        }
        case 'announcement': return {
          backgroundColor: `rgba(32, 32, 32, 0.99)`,
          border: `0.15rem solid grey`
        }
        default: return {
          backgroundColor: `rgba(32, 32, 32, 0.904)`
        }
      }
    }
    //Message formatter, each element handles its segment through prop calls
    return (
      <div
        className="chatContainer"
        id="chatContainer"
        ref={messagesEndRef}
      >
        {messages.map((message, index) => (
          <div key={index} className="message" style={MessageBG(message.type)}>
           <section>
            <DisplayBadges badges={message.badges} id={message.channelId} channel={message.channel}/>
            <DisplayPronouns user={message.username}/>
            <DisplayName
              user={message.username}
              color={message.color}
            />
           </section>
            <DisplayEmotes 
              emotes={message.emotes} 
              message={message.message} 
              type={message.type}
              color={message.color}/>
          </div>
        ))}
      </div>
    )
}
