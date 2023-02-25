import React from "react";

import './art_overlay.css'
import { DisplayChat } from "../message-parts/Display-chat";

function ArtOverlay() {
    return (
        <>
            <div id='overlayBlock' className='block'>
            
            <div id="leftside">
                {<DisplayChat />}
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