import React from 'react';

import './chat.css'

import { DisplayChat } from '../../message-parts/Display-chat';
// import { DisplayBadges } from '../../message-parts/Display-badges';
function Chat() {
    return (
        <div className='chat' id='chat'>
        <DisplayChat />
        </div>
    )
}


export default Chat