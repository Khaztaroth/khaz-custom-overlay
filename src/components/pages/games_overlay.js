import React from "react";
import Chat from "./blocks/chat";
import './games_overlay.css'

function GamesOverlay() {
    return (
        <>
            <div id='overlayBlock' className='block'>
            
            <div id="leftside">
                {<Chat />}
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

export default GamesOverlay