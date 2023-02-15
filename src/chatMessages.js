import { useEffect, useState } from 'react';
import tmi from 'tmi.js';

function ChatMessages() {
const [messages, setMessages] = useState([]);

useEffect(() => {
    const client = new tmi.Client({
      //identity: {
      //  username: 'your_twitch_username',
      //  password: 'your_oauth_token'
     // },
      channels: ['rebeckeronie']
    });
  
    client.connect();
  
    const handleMessage = (channel, tags, message, self) => {
      if (self) return;
  
      setMessages((prevMessages) => [...prevMessages, { id: tags.id, username: tags['display-name'], message }]);
    };
  
    client.on('message', handleMessage);
  
    return () => {
      client.off('message', handleMessage);
    };
  }, [messages]);

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <strong>{message.username}</strong>: {message.message}
        </div>
      ))}
    </div>
  );
}

export default ChatMessages
