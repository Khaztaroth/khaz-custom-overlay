import React from 'react';

import './chat.css'

import { DisplayChat } from '../../message-parts/Display-chat';
function Chat() {
    
    return (
        <div className='chat' id='chat'>
        <DisplayChat />
        </div>
    )
}


export default Chat