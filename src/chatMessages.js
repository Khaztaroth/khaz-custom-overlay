import { useEffect, useState } from 'react';
import tmi from 'tmi.js';

function ChatMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const client = new tmi.Client({
      //identity: {
      //  username: 'your_twitch_username',
      //  password: 'your_oauth_token'
      //},
      channels: ['Khaztaroth315']
    });

    client.connect();

    const handleMessage = (channel, tags, message, self) => {
      if (self) return;

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: tags.id,
          badges: tags.badges,
          color: tags['color'],
          username: tags['display-name'],
          message
        }
      ]);
    };

    client.on('message', handleMessage);

    return () => {
      client.off('message', handleMessage);
    };
  },[])

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          {message.badges &&
            Object.entries(message.badges).map(([key, value]) => (
              <span key={`${key}-${value}`}>{key}</span>
            ))}
          <strong className='user-name' style={{color: message.color}}>{message.username}</strong>: <span className='user-message'>{message.message}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;