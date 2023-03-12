import React from "react";

// import './css/art_overlay.css'

import { DisplayChat } from "../chat-formatting";

function ArtOverlay() {
    return (
        <>
            <div id='overlayBlock' className='block'>
            
            <div id="leftside" className="default">
                <div id="chatBox" className="default" >{<DisplayChat />}</div>
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