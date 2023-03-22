import { useState } from 'react';
import tmi from 'tmi.js';

export function UseSubscriptions(channel) {

    const cliendID = process.env.REACT_APP_BOT_CLIENT_ID;

    const client = new tmi.client({
        channels: [channel],
        clientid: cliendID
    })

    const [subData, setSubData] = useState([])

    const subscriptionHandler = (channel, username, method, message, userstate) => {
        setSubData({
            channel: channel,
            username: username,
            method: method,
            message: message,
            userstate: userstate,
            isSub: true,
        })
    }

    client.on('subscription', subscriptionHandler)

    return subData
}