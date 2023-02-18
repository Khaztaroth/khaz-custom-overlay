import ChatMessages from "./chatMessages";
import { EmoteProvider } from "./api-requests/channelEmotes";

import "./App.css"

function App() {
  return (
    <div>
      <EmoteProvider>
      <div className="chat-container">
        <ChatMessages />
      </div>
      </EmoteProvider>
    </div>
  );
}

export default App