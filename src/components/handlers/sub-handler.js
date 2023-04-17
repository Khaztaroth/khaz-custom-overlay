import { useRef, useState } from "react";
import { chatClient } from "../api-requests/twurple-client";

export function useSubscriptions() {

    const [subscription, setSubscription] = useState([]);
    const messagesRef = useRef([]);

    chatClient.onSub((channel, user, ChatSubInfo, msg) => {
        if (!messagesRef.current.includes(msg.id)) {
            messagesRef.current.push(msg.id);

            const subData = {
                subber: ChatSubInfo.displayName,
                subberColor: msg.userInfo.color,
                subberBadges: msg.userInfo.badges,
                
                streak: ChatSubInfo.months,
                message: ChatSubInfo.message,

                subType: "sub"
            }
            setSubscription(subData) 
        }}
    )

    chatClient.onResub((channel, user, ChatSubInfo, msg) => {
        if (!messagesRef.current.includes(msg.id)) {
            messagesRef.current.push(msg.id);
            const subData = {
                subber: ChatSubInfo.displayName,
                subberColor: msg.userInfo.color,
                subberBadges: msg.userInfo.badges,
                
                streak: ChatSubInfo.months,
                message: ChatSubInfo.message,

                subType: "sub"
            }
            setSubscription(subData)
        }}
    )

    return subscription
}