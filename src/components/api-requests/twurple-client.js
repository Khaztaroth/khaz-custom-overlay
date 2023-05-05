import { ChatClient } from "@twurple/chat";

    //sets up a url search in the current domain
    const params = new URLSearchParams(window.location.search)

    //looks for the value assinged to the "channel" header (url/thing?channel=)
    const channel = params.get('channel')

    export const chatClient = new ChatClient({channels: [channel] });
