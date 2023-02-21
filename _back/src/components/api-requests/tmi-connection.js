import { useEffect, useState } from "react";
import tmi from 'tmi.js';

export function UseTMI (channel) {
    const [messages, setMessages] = useState([]);

    //Calling useEffect to separate the message into elements that can be called individually
    useEffect(() => {
        const client = new tmi.Client({
            channels: [channel],
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
   }, [channel]);

   return messages
}