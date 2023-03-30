import { useEffect, useState, useRef } from 'react';
import { chatClient } from '../api-requests/twurple-client';

export function useMessages() {
    const [messages, setMessages] = useState([]);
    const messagesRef = useRef([]);
    
    useEffect(() => {
        chatClient.connect();

        chatClient.onMessage((channel, user, text, msg) => {
            // console.log("raw:", msg)

            if (!messagesRef.current.includes(msg.id)) {
                messagesRef.current.push(msg.id);
                setMessages((prevMessages) => {
                    const newMessage = {
                        channel: channel,
                        channelId: msg.channelId,

                        username: msg.userInfo.displayName,
                        userId: msg.userInfo.userId,
                        badges: msg.userInfo.badges,
                        color: msg.userInfo.color,

                        id: msg.id,
                        text: text,
                        emotes: msg.emoteOffsets,

                        messageSegments: msg.parseEmotes(),
                                
                        type: "chat",
                        raw: msg,

                    }; 
                    const slicedArray = [...prevMessages.slice(-19), newMessage]
                    return slicedArray
                });
            }
        });

        chatClient.onAction((channel, user, text, msg) => {
            // console.log("raw:", msg)

            if (!messagesRef.current.includes(msg.id)) {
                messagesRef.current.push(msg.id);
                setMessages((prevMessages) => {
                    const newMessage = {
                        channel: channel,
                        channelId: msg.channelId,

                        username: msg.userInfo.displayName,
                        userId: msg.userInfo.userId,
                        badges: msg.userInfo.badges,
                        color: msg.userInfo.color,

                        id: msg.id,
                        text: text,
                        emotes: msg.emoteOffsets,

                        messageSegments: msg.parseEmotes(),
                                
                        type: "action",
                        raw: msg,

                    }; 
                    const slicedArray = [...prevMessages.slice(-19), newMessage]
                    return slicedArray
                });
            }
        });
        chatClient.onAnnouncement((channel, user, announcementInfo, msg) => {
            if (!messagesRef.current.includes(msg.id)) {
                messagesRef.current.push(msg.id);
                setMessages((prevMessages) => {
                    const newMessage = {
                        channel: channel,
                        channelId: msg.channelId,

                        username: msg.userInfo.displayName,
                        userId: msg.userInfo.userId,
                        badges: msg.userInfo.badges,
                        color: msg.userInfo.color,

                        id: msg.id,
                        text: msg.message,
                        emotes: msg.emoteOffsets,

                        messageSegments: msg.parseEmotes(),
                                
                        type: "announcement",
                        raw: msg,

                    }; 
                    const slicedArray = [...prevMessages.slice(-19), newMessage]
                    return slicedArray
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