import React from "react";

import './art_overlay.css'

function ChatlessArtOverlay() {
    return (
        <>
            <div id='overlayBlock' className='block'>
            
            <div id="leftside"><div className="webcam" id="webcam">
           </div>
            </div>
            <div id="rightside">
                <div className="art_screen" id="screen"></div>
            </div>
        
            </div>
        </>

    )

}

export default ChatlessArtOverlay