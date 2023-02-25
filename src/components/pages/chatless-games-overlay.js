import React from "react";

import './games_overlay.css'

function ChatlessGamesOverlay() {
    return (
        <>
            <div id='overlayBlock' className='block'>
            
            <div id="leftside">
                <div className="chatBox" id="chatBox"></div>
                <div className="webcam" id="webcam">
           </div>
            </div>
            <div id="rightside">
                <div className="screen" id="screen"></div>
            </div>
        
            </div>
        </>

    )

}

export default ChatlessGamesOverlay