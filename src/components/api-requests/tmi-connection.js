import { useEffect, useRef, useState } from "react";
import tmi from 'tmi.js';

import { UserName } from "../message-parts/username";
import { ReplaceEmotes } from "../message-parts/insertEmotes";
import { DisplayBadges } from "../message-parts/badges";

function TmiConnect () {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        const client = new tmi.Client({
            channels: ['criken'],
            clientid: '7utx5mqq59gavm5g64oekaq0iuxuyc'
        })
    
        client.connect();

        const onMessageHandler = (channel, message, userState, self) => {
            if (self) return;
            let messageWithEmotes = userState;
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                  id: message.id,
                  emotes: message.emotes,
                  badges: message.badges,
                  color: message['color'],
                  username: message['display-name'],
                  message: messageWithEmotes
                }
            ]);
        };
        client.on("message", onMessageHandler);

        return () => {
            client.off("message", onMessageHandler);
        }
   }, []);



  //Defining an effect that will scroll to the latest message
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  }, [messages]);

  console.log(messages.emotes)
        return (
            <div ref={messagesEndRef} style={{ overflowY: 'scroll', height: '100vh' }}>
                {messages.map((message, index) => (
                <div key={index}>
                    <DisplayBadges badges={message.badges}/>
                    <UserName user={message.username} color={message.color}/>
                    <ReplaceEmotes emotes={message.emotes} message={message.message}/>
                </div> ))}
            </div>
        )
                }



export default TmiConnect 