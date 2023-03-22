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
        //passing message and user info to the handlers
        const onMessageHandler = (channel, userstate, message, self) => {

            if (self) return;
            let messageWithEmotes = message;
            setMessages(prevMessages => {
                const newMessage = {
                  channelId: userstate['room-id'],
                  id: message.id,
                  emotes: userstate.emotes,
                  message: messageWithEmotes,
                  type: userstate['message-type'],
                  userId: userstate['user-id'],
                  badges: userstate.badges,
                  color: userstate['color'],
                  username: userstate['display-name'],
                };
                // use slice to keep the last 20 messages
                const updatedMessages = [...prevMessages.slice(-20), newMessage];
                return updatedMessages;
              });
        };

        const onSubscriptionHandler = (channel, username, method, message, userstate) => {
            setMessages((prevMessages) => [
                ...prevMessages.push(message)
            ])
        }

        //Remove message by filtering the message id 
        const onDeletedMessage = (channel, username, deletedMessage, userstate) => {
            setMessages((prevMessages) => {
              return prevMessages.filter((msg) => {
                return msg.id !== userstate["target-msg-id"];
              });
            });
          };

        //Remove messages by filtering the user id
        const onUserTimeout = (channel, username, reason, duration, userState) => {
            setMessages((prevMessages) => {
                return prevMessages.filter((usr) => {
                    return usr.userId !== userState["target-user-id"]
                });
            });
        };
        //Removes messages by emptying the array (it causes an error to pop-up but I don't care)
        const onClearChat = (channel) => {
            setMessages((prevMessages) => {
                return prevMessages = []
            })
        }
          
        //calling the message handler
        client.on("message", onMessageHandler);
        client.on("subscription", onSubscriptionHandler);
        client.on("messagedeleted", onDeletedMessage);
        client.on("timeout", onUserTimeout)
        client.on("clearchat", onClearChat)
        
        return () => {
            //dismounting the message handler to avoid memory leaks
            client.off("message", onMessageHandler);
            client.off("subscription", onSubscriptionHandler);
            client.off("messagedeleted", onDeletedMessage);
            client.off("timeout", onUserTimeout)
            client.off("clearchat", onClearChat)
        }
   }, [channel]);

   return messages
}