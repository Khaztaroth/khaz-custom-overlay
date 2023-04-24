import React from 'react';

import '../style/chat.css'

import { DisplayChat } from '../chat-formatter';

function Chat() {
    const params = window.location.pathname

    var standalone = false

    if (params === "/chat") {
        standalone = true
    }

    console.log(standalone)

    const style = {
        overlay: {maxWidth:'98%', minWidth:'98%', position:'relative'},
        standalone: {}
    }

    console.log(style.standalone)
    
    return (
        <div id='chatContainer' style={standalone? style.standalone : style.overlay}>
        <DisplayChat />
        </div>
    )
}


export default Chat