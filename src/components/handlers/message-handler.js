import { useEffect, useState, useRef } from 'react';
import { chatClient } from '../api-requests/twurple-client';

export function useMessages() {
    const [messages, setMessages] = useState([]);
    const messagesRef = useRef([]);
    
    useEffect(() => {

         chatClient.onMessage((channel, user, text, msg) => {
            const newMessage = {
                currentChannel: channel,
                channelId: msg.channelId,

                username: msg.userInfo.displayName,
                userId: msg.userInfo.userId,
                badges: msg.userInfo.badges,
                color: msg.userInfo.color,

                id: msg.id,
                message: msg.parseEmotes(),
                emotes: msg.emoteOffsets,

                        
                type: "chat",
                raw: msg,

            }; 
            if (!messagesRef.current.includes(msg.id)) {
                messagesRef.current.push(msg.id);
                setMessages((prevMessages) => {
                    return [...prevMessages.slice(-19), newMessage]
                });
            }
        })

        chatClient.onAction((channel, user, text, msg) => {
            // console.log("raw:", msg)
            const newMessage = {
                currentChannel: channel,
                channelId: msg.channelId,

                username: msg.userInfo.displayName,
                userId: msg.userInfo.userId,
                badges: msg.userInfo.badges,
                color: msg.userInfo.color,

                id: msg.id,
                message: msg.parseEmotes(),
                emotes: msg.emoteOffsets,

                        
                type: "action",
                raw: msg,

            }; 
            if (!messagesRef.current.includes(msg.id)) {
                messagesRef.current.push(msg.id);
                setMessages((prevMessages) => {
                    return [...prevMessages.slice(-19), newMessage]
                });
            }
        });
        
        chatClient.onAnnouncement((channel, user, announcementInfo, msg) => {
            const newMessage = {
                currentChannel: channel,
                channelId: msg.channelId,

                username: msg.userInfo.displayName,
                userId: msg.userInfo.userId,
                badges: msg.userInfo.badges,
                color: msg.userInfo.color,

                id: msg.id,
                message: msg.parseEmotes(),
                emotes: msg.emoteOffsets,

                        
                type: "announcement",
                raw: msg,

            }; 
            if (!messagesRef.current.includes(msg.id)) {
                messagesRef.current.push(msg.id);
                setMessages((prevMessages) => {
                    return [...prevMessages.slice(-19), newMessage]
                });
            }
        })

        chatClient.onSub((channel, user, ChatSubInfo, msg) => {
            if (!messagesRef.current.includes(msg.id)) {
                messagesRef.current.push(msg.id);
                setMessages((prevMessages) => {
                    const newMessage = {
                        channel: channel,
                        channelId: msg.channelId,

                        username: ChatSubInfo.displayName,
                        userId: msg.userInfo.userId,
                        badges: msg.userInfo.badges,
                        color: msg.userInfo.color,

                        id: msg.id,
                        text: ChatSubInfo.message,
                        message: msg.parseEmotes(),
                        emotes: msg.emoteOffsets,

                                
                        type: "subscription",
                        raw: msg,

                    }; 
                    const slicedArray = [...prevMessages.slice(-19), newMessage]
                    return slicedArray
                });
            }
        })
        chatClient.onSub((channel, user, ChatSubInfo, msg) => {
            const newMessage = {
                currentChannel: channel,
                channelId: msg.channelId,

                username: msg.userInfo.displayName,
                userId: msg.userInfo.userId,
                badges: msg.userInfo.badges,
                color: msg.userInfo.color,

                id: msg.id,
                message: msg.parseEmotes(),
                emotes: msg.emoteOffsets,

                        
                type: "subscription",
                raw: msg,

            }; 
            if (!messagesRef.current.includes(msg.id)) {
                messagesRef.current.push(msg.id);
                setMessages((prevMessages) => {
                    return [...prevMessages.slice(-19), newMessage]
                });
            }
        })

        chatClient.onMessageRemove((channel, messageId, msg) => {
            setMessages((prevMessages) => {
                return prevMessages.filter((msg) => {
                  return msg.id !== messageId;
                });
            });
        });

        chatClient.onTimeout((channel, user, duration, msg) => {
            setMessages((prevMessages) => {
                return prevMessages.filter((usr) => {
                    return usr.userId !== msg.targetUserId
                });
            });
        });

        chatClient.onChatClear((channel, msg) => {
            setMessages((prevMessages) => {
                return prevMessages = []
            })
        });

    },[])

        return messages
};