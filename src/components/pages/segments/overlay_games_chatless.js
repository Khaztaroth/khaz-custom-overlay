import React from "react";

// import './css/art_overlay.css'

function ChatlessArtOverlay() {
    return (
        <>
            <div id='overlayBlock' className='block'>
            
            <div id="leftside" className="default">
                <div id="chatBox" className="default" ></div>
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

export default ChatlessArtOverlay