import React, { useState } from "react";

import Chat from "./chat";

import "../style/gradients.css"
import "../style/blocks.css"

function ArtOverlay() {

    //sets up a url search in the current domain
    const params = new URLSearchParams(window.location.search)

    //looks for the value assinged to the "channel" header (url/thing?channel=)
    const chat = params.get('chat')

    var showChat = true

    if (chat === 'false') {
        showChat = false
    }

    const showSub = useState(false)

    const borderStyle = 
        showSub? 
        {borderImage: `conic-gradient(from var(--angle), var(--purple), var(--orange), var(--purple)) 1`}
        : 
        {borderImage: `conic-gradient(from var(--angle), var(--green1), var(--green2), var(--green1)) 1`} 

    return (
        <>
            <div id='overlayBlock' 
                className="frames"
                style={borderStyle}
            >
            <div id="leftside" className="frames" style={borderStyle}>
                <div id="chatBox" className="frames" style={borderStyle} >
                    {showChat? <Chat /> : ""}
                </div>
                <div id="webcam" className="frames" style={borderStyle}>
           </div>
            </div>
            <div id="rightside" className="frames" style={borderStyle}>
                <div id="art_screen" className="frames" style={borderStyle}></div>
            </div>

            </div>
        </>

    )

}

export default ArtOverlay