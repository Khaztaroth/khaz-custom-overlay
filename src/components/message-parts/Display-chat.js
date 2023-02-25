import { useEffect, useRef } from "react";
import { DisplayBadges } from "./Display-badges";
import { DisplayEmotes } from "./Display-emotes";
import { DisplayName } from "./Display-name";
import { UserInfoProvider } from "../api-requests/userInfo";

import { UseTMI } from "../api-requests/tmi-connection";

const channel = 'icysylvie'

export function DisplayChat() {
    UserInfoProvider(channel);
    const messages = UseTMI(channel);
    
    const userID = localStorage.getItem("userID")
    // console.log(messages)
    
   //Defining an effect that will scroll to the latest message
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  }, [messages]);

  //Message formatter, each element handles its segment through prop calls
        return (
            <div ref={messagesEndRef} style={{ overflowY: 'scroll', height: '717px' }}>
                {messages.map((message, index) => (
                <div key={index} className="message">
                    <DisplayBadges badges={message.badges} id={userID}/>
                    <DisplayName user={message.username} color={message.color}/>
                    <DisplayEmotes emotes={message.emotes} message={message.message}/>
                </div> ))}
            </div>
        )
 }
 
