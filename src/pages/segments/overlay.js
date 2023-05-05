import React, { useState } from "react";

import Chat from "./chat";

import "../style/gradients.css"
import "../style/blocks.css"

function Overlay() {

    //sets up a url search in the current domain
    const params = new URLSearchParams(window.location.search)

    //looks for the value assinged to the "channel" header (url/thing?channel=)
    const chat = params.get('chat')
    const  overlay = params.get('type')

    var showChat = true

    if (chat === 'false') {
        showChat = false
    }

    const showSub = useState(false)

    const border = {
        sub: {borderImage: `conic-gradient(from var(--angle), var(--color1), var(--color2), var(--color1)) 1`},
        default: {borderImage: `conic-gradient(from var(--angle), var(--green1), var(--green2), var(--green1)) 1`},
    }

   return (
        <>
            <div id='overlayBlock' 
                className="frames"
                style={showSub? border.sub : border.default}
            >
            <div id="leftside" className="frames" style={showSub? border.sub : border.default}>
                <div id="chatBox" className="frames" style={showSub? border.sub : border.default} >
                    {showChat? <Chat /> : ""}
                </div>
                <div id="webcam" className="frames" style={showSub? border.sub : border.default}>
           </div>
            </div>
            <div id="rightside" className="frames" style={showSub? border.sub : border.default}>
                <div id={overlay} className="frames" style={showSub? border.sub : border.default}></div>
            </div>

            </div>
        </>

    )

}

export default Overlay