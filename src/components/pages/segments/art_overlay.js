import React from "react";

// import './css/art_overlay.css'

import { DisplayChat } from "../chat-formatting";

function ArtOverlay() {
    return (
        <>
            <div id='overlayBlock' className='block'>
            
            <div id="leftside">
                <div className="chatBox" id="chatBox">{<DisplayChat />}</div>
                <div className="webcam" id="webcam">
           </div>
            </div>
            <div id="rightside">
                <div className="art_screen" id="screen"></div>
            </div>
        
            </div>
        </>

    )

}

export default ArtOverlay