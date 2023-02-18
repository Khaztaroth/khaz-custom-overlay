import { createContext, useEffect, useState } from 'react'
import tmi from 'tmi.js'

export const MessageContext = createContext();

export const ChannelConnect = ({ children }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const newClient =new tmi.client({
            channels: ['khaztaroth315']
        });

        newClient.connect();

        setMessages((prevMessages) => [
            ...prevMessages,
            {
              id: tags.id,
              badges: tags.badges,
              color: tags['color'],
              username: tags['display-name'],
              message: messageWithEmotes
            }
        ]);
    })

    return <MessageContext.Provider value={messages}>{children}</MessageContext.Provider>
}

