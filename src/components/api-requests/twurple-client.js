import { ApiClient } from "@twurple/api";
import { StaticAuthProvider } from "@twurple/auth";
import { ChatClient } from "@twurple/chat";

    const clientId = process.env.REACT_APP_BOT_CLIENT_ID;
    const accessToken = process.env.REACT_APP_BOT_ACCESSTOKEN;
    const authProvider = new StaticAuthProvider(clientId, accessToken)

    //sets up a url search in the current domain
    const params = new URLSearchParams(window.location.search)

    //looks for the value assinged to the "channel" header (url/thing?channel=)
    const channel = params.get('channel')

    export const chatClient = new ChatClient({channels: [channel] });

    export const apiClient = new ApiClient({authProvider});