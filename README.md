# Custom Overlay for twitch

Run it with `npm start`

You can use the standalone chat overlay by going to `localhost:3000/chat` (or whichever url you end up using).
Set the channel by adding a `channel` header on your url, something like `localhost:3000/chat?channel=(CHANNEL)`

The overlay page can use "/overlay?channel=CHANNELNAME&chat=false" to disable the built-in chat
or "/overlay?channel=CHANNELNAME&type=NAME" to specify the type of overlay you setup through the CSS files

This project exists mostly to have a repository to use as reference, I struggled with finding something that did something similar

please dont' just use my overlays

## TO DO

-Adding event handlers for subs, follows, raids, etc.