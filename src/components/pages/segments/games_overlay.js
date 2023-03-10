import React from "react";
import { DisplayChat } from "../chat-formatting";

// import './css/games_overlay.css'

function GamesOverlay() {
    return (
        <>
            <div id='overlayBlock' className='block'>
            
            <div id="leftside">
                <div className="chatBox" id="chatBox">{<DisplayChat />}</div>
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