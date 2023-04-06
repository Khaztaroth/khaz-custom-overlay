// import React, { useEffect, useState } from "react";
// import { UseSubscriptions } from "../../api-requests/subscription-handler";
import { DisplayChat } from "../chat-formatter"

// import './css/games_overlay.css'

function GamesOverlay() {

//sets up a url search in the current domain
const params = new URLSearchParams(window.location.search)

//looks for the value assinged to the "channel" header (url/thing?channel=)
const chat = params.get('chat')

var showChat = true

if (chat === 'false') {
    showChat = false
}

// const subData = UseSubscriptions(channel);

//     const [showSub, setShowSub] = useState(subData.isSub);

//     const toggleClass= () => {
//         setShowSub(!showSub)
//     };

//     useEffect(() => {
//         if (subData.isSub === true) {
//             toggleClass();
//         }
//     })

    const showSub = false
    const frameStyle = showSub ?  'sub-alert' : 'default';

    return (
        <>
            <div id='overlayBlock' className={frameStyle}>
            
            <div id="leftside" className={frameStyle}>
                <div id="chatBox" className={frameStyle}>{showChat? <DisplayChat /> : ""}</div>
                <div id="webcam" className={frameStyle}>
           </div>
            </div>
            <div id="rightside" className={frameStyle}>
                <div id="screen" className={frameStyle}> </div>
            </div>
        
            </div>
        </>

    )

}

export default GamesOverlay