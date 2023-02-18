import ChatMessages from "./chatMessages";
import { EmoteProvider } from "./api-requests/channelEmotes";
import { BadgeProvider } from "./api-requests/channelBadges";
import DisplayBadges from "./api-requests/display-badges";

import "./App.css"

function App() {
  return (
    <div>
    <BadgeProvider >
      <div className="chat-container">
        <ChatMessages />
      </div>
    </BadgeProvider>
    </div>
  );
}

export default App