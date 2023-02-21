// import { EmoteProvider } from "./api-requests/channelEmotes";
// import DisplayBadges from "./api-requests/display-badges";

import ChatMessages from "./components/whole-chat-handler";
import { BadgeProvider } from "./components/api-requests/channelBadges";

import "./App.css"
import TmiConnect from "./components/api-requests/tmi-connection";

function App() {
  return (
    <div>
      <TmiConnect />
    </div>
  );
}

export default App