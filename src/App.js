// import { EmoteProvider } from "./api-requests/channelEmotes";
// import { BadgeProvider } from "./components/api-requests/channelBadges";

// import DisplayBadges from "./api-requests/display-badges";


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