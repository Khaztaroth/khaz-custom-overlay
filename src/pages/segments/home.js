export default function Home(){
    return (
        <div>
            <p>Navigate to "/chat?channel=CHANNELNAME" to use the standalone chat</p>
            <p>Navigate to "/overlay?channel=CHANNELNAME" to use the overlays</p>
            <p>The overlay page can use "/overlay?channel=CHANNELNAME&chat=false" to disable the built-in chat</p>
            <p>or "/overlay?channel=CHANNELNAME&type=NAME" to specify the type of overlay you setup through the CSS files</p>
        </div>
    )
}