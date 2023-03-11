import React from "react";
import { DisplayChat } from "../chat-formatting";

// import './css/games_overlay.css'

function GamesOverlay() {
    return (
        <>
            <div id='overlayBlock' className='block'>
            
            <div id="leftside" className="default">
                <div id="chatBox" className="default">{<DisplayChat />}</div>
                <div id="webcam" className="default">
           </div>
            </div>
            <div id="rightside" className="default">
                <div id="screen" className="default"></div>
            </div>
        
            </div>
        </>

    )

}

export default GamesOverlay