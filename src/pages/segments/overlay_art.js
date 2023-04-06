import React from "react";

import Chat from "./chat";

//sets up a url search in the current domain
const params = new URLSearchParams(window.location.search)

//looks for the value assinged to the "channel" header (url/thing?channel=)
const chat = params.get('chat')

var showChat = true

if (chat === 'false') {
    showChat = false
}

function ArtOverlay() {
    return (
        <>
            <div id='overlayBlock' className='block'>
            
            <div id="leftside" className="default">
                <div id="chatBox" className="default" >{showChat ? <Chat /> : ""}</div>
                <div id="webcam" className="default">
           </div>
            </div>
            <div id="rightside" className="default">
                <div id="art_screen" className="default"></div>
            </div>
        
            </div>
        </>

    )

}

export default ArtOverlay