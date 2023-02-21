import { useEffect, useRef, useState } from "react";
import tmi from 'tmi.js';

import { DisplayName } from "../message-parts/Display-name";
import { DisplayEmotes } from "../message-parts/Display-emotes";
import { DisplayBadges } from "../message-parts/Display-badges";

function TmiConnect () {
    const [messages, setMessages] = useState([]);

    //Calling useEffect to separate the message into elements that can be called individually
    useEffect(() => {
        const client = new tmi.Client({
            channels: ['criken'],
            clientid: '7utx5mqq59gavm5g64oekaq0iuxuyc'
        })
    
        client.connect();

        //setting constant to handle the message so it's only called once
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
        //calling the message handler
        client.on("message", onMessageHandler);

        return () => {
            //dismounting the message handler to avoid memory leaks
            client.off("message", onMessageHandler);
        }
   }, []);


  //Defining an effect that will scroll to the latest message
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  }, [messages]);

  //Message formatter, each element handles its segment through prop calls
        return (
            <div ref={messagesEndRef} style={{ overflowY: 'scroll', height: '100vh' }}>
                {messages.map((message, index) => (
                <div key={index}>
                    <DisplayBadges badges={message.badges}/>
                    <DisplayName user={message.username} color={message.color}/>
                    <DisplayEmotes emotes={message.emotes} message={message.message}/>
                </div> ))}
            </div>
        )
                }

export default TmiConnect 