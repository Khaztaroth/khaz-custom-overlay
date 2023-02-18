import { useEffect, useRef, useState } from 'react';
import tmi from 'tmi.js';

function ChatMessages() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const client = new tmi.Client({
      channels: ['linustech']
    });

    client.connect();

    const handleMessage = (channel, tags, message, self) => {
      if (self) return;
    
      const emotes = tags.emotes;
      let messageWithEmotes = message;

      //console.log(tags)
      
      if (emotes != null) {
        const emoteIds = Object.keys(emotes);

        // Sort the emote locations in the message in descending order
        const emoteLocations = emoteIds.flatMap((emoteId) => {
          return emotes[emoteId].map((location) => {
            return {
              startIndex: parseInt(location.split('-')[0]),
              endIndex: parseInt(location.split('-')[1]),
              emoteUrl: `https://static-cdn.jtvnw.net/emoticons/v2/${emoteId}/default/light/1.0`,
              emoteId: emoteId
            };
          });
        }).sort((a, b) => {
          return b.startIndex - a.startIndex;
        });

        // Replace the emote codes with image elements and adjust the position of subsequent replacements
        emoteLocations.forEach((location) => {
          messageWithEmotes = messageWithEmotes.substring(0, location.startIndex) +
            `<img src="${location.emoteUrl}" alt="${location.emoteId}" />` +
            messageWithEmotes.substring(location.endIndex + 1);
          emoteLocations.forEach((subLocation) => {
            if (subLocation.startIndex > location.startIndex) {
              subLocation.startIndex += location.emoteUrl.length - location.endIndex + location.startIndex - 1;
              subLocation.endIndex += location.emoteUrl.length - location.endIndex + location.startIndex - 1;
            }
          });
        });
      }

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
    };

    client.on('message', handleMessage);

    return () => {
      client.off('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const renderBadge = (badge) => {
    switch (badge) {
      case 'subscriber':
        return <img src='https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/1' alt='subscriber badge' />;
      case 'moderator':
        return <img src='https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1' alt='moderator badge' />;
      case 'vip':
        return <img src='https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1' alt='vip badge' />;
      case 'bits':
        return <img src='https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/1' alt='bits badge'/>
      case 'prime':
        return <img src='https://static-cdn.jtvnw.net/badges/v1/a1dd5073-19c3-4911-8cb4-c464a7bc1510/1' alt='prime badge'/>
      default:
        return null;
    }
  };


  return (
    <div ref={messagesEndRef}>
      {messages.map((message, index) => (
        <div key={index}>
          {message.badges &&
            Object.entries(message.badges).map(([key, value]) => (
              <span key={`${key}-${value}`} className='badges'>{renderBadge(key)}</span>
            ))}
          <strong className='user-name' style={{color: message.color}}>{message.username}</strong>: <span className='user-message' dangerouslySetInnerHTML={{ __html: message.message }}></span>
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;
