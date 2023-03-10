import { useEffect, useRef } from "react";
import { DisplayBadges } from "../message-parts/Display-badges";
import { DisplayEmotes } from "../message-parts/Display-emotes";
import { DisplayName } from "../message-parts/Display-name";
import { UserInfoProvider } from "../api-requests/userInfo";

import { UseMessages } from "../api-requests/message-handler";

const params = new URLSearchParams(window.location.search)

const channel = params.get('channel')

export function DisplayChat() {
    UserInfoProvider(channel);
    const messages = UseMessages(channel);

     const userID = localStorage.getItem("userID")
    // console.log(messages)
    
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

//Message formatter, each element handles its segment through prop calls
return (
  <div
    className="chatContainer"
    id="chatContainer"
    ref={messagesEndRef}
  >
    {messages.map((message, index) => (
      <div key={index} className="message">
        <DisplayBadges badges={message.badges} id={userID} />
        <DisplayName
          user={message.username}
          color={message.color}
          style={{ color: "white" }}
        />
        <DisplayEmotes emotes={message.emotes} message={message.message} />
      </div>
    ))}
  </div>
)
}
