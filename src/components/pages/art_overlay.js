import React from "react";
import Chat from "./blocks/chat";

import './art_overlay.css'

function ArtOverlay() {
    return (
        <>
            <div id='overlayBlock' className='block'>
            
            <div id="leftside">
                {<Chat />}
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