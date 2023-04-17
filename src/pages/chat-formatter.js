import { useEffect, useRef, useState } from "react";

import { DisplayBadges, DisplayMessage, DisplayName, DisplayPronouns } from "../components/message-parts";
import { useMessages } from "../components/handlers/message-handler.js";
import { MessageBG } from "./style/message-style";

//Chat renderer
export function DisplayChat() {

    //getting messages from the TMI library
    const messages = useMessages();
    
    //Defining an array state variable to hold the rendered elements
    const [renderedMessage, setRenderedMessage] = useState([]);

    //Defining an effect that will update the state variable whenever there is a change in the messages array
    useEffect(() => {
        const elements = messages.map((message, index) => (
            <div key={index} className="message" style={MessageBG(message.type)}>
                <DisplayBadges 
                    badges={message.badges} 
                    id={message.channelId} 
                />
                <DisplayPronouns 
                    user={message.username}
                />
                <DisplayName
                    user={message.username}
                    color={message.color}
                />
                <DisplayMessage 
                    message={message.message} 
                    type={message.type}
                    color={message.color}
                    user={message.username}
                />
            </div>
        ));
        setRenderedMessage(elements.slice(-19));
    }, [messages]);

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

    //Rendering the finalized elements
    return (
        <div className="chatContainer" id="chatContainer" ref={messagesEndRef}>
            {renderedMessage}
        </div>
    )
}
