// import { EmoteProvider } from "./api-requests/channelEmotes";
// import DisplayBadges from "./api-requests/display-badges";

import ChatMessages from "./chatMessages";
import { BadgeProvider } from "./components/api-requests/channelBadges";

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