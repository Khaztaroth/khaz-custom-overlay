import { useEffect, useState } from "react";
import tmi from 'tmi.js';

export function UseMessages (channel) {
    const [messages, setMessages] = useState([]);

    
    //Calling useEffect to separate the message into elements that can be called individually
    useEffect(() => {
        const cliendID = process.env.REACT_APP_BOT_CLIENT_ID;
        
        const client = new tmi.Client({
            channels: [channel],
            clientid: cliendID
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
                  userId: message['user-id'],
                  emotes: message.emotes,
                  badges: message.badges,
                  color: message['color'],
                  username: message['display-name'],
                  message: messageWithEmotes
                }
            ]);
        };

        const onDeletedMessage = (channel, username, deletedMessage, userstate) => {
            setMessages((prevMessages) => {
              return prevMessages.filter((msg) => {
                return msg.id !== userstate["target-msg-id"];
              });
            });
          };

        const onUserTimeout = (channel, username, reason, duration, userState) => {
            setMessages((prevMessages) => {
                return prevMessages.filter((usr) => {
                    return usr.userId !== userState["target-user-id"]
                });
            });
        };
          
        //calling the message handler
        client.on("message", onMessageHandler);
        client.on("messagedeleted", onDeletedMessage);
        client.on("timeout", onUserTimeout)
        
        return () => {
            //dismounting the message handler to avoid memory leaks
            client.off("message", onMessageHandler);
            client.off("messagedeleted", onDeletedMessage);
            client.off("timeout", onUserTimeout)
        }
   }, [channel]);

   return messages
}