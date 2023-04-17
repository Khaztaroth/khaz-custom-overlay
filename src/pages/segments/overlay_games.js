import React, { useEffect, useState } from "react";
// import { useSubscriptions } from "../../components/handlers/sub-handler"
import Chat from "./chat"

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
    // const subscriptions = useSubscriptions();
    // console.log("subber:", subscriptions.subber, "subType:", subscriptions.subType)

    // const SUB = subscriptions.subType

    const [showSub, setShowSub] = useState(false)

    // useEffect(() => {
    //     if (SUB === 'sub') {
    //         setShowSub(true)
    //         console.log(showSub)
    //         const timer = setTimeout(() => {
    //             console.log(showSub)
    //             setShowSub(false)
    //         }, 3000);
    //         return () => clearTimeout(timer)
    //     } else return
    // }, [SUB, showSub])

    const borderStyle = 
        showSub? 
            {borderImage: `conic-gradient(from var(--angle), var(--green1), var(--green2), var(--green1)) 1`} 
            : 
            {borderImage: `conic-gradient(from var(--angle), var(--purple), var(--orange), var(--purple)) 1`}

    return (
        <>
            <div id='overlayBlock' 
                className="frames"
                style={borderStyle}
            >
            <div id="leftside" className="frames" style={borderStyle}>
                <div id="chatBox" className="frames" style={borderStyle}>
                    {showChat? <Chat /> : ""}
                </div>
                <div id="webcam" className="frames" style={borderStyle}>
           </div>
            </div>
            <div id="rightside" className="frames" style={borderStyle}>
                <div id="screen" className="frames" style={borderStyle}></div>
            </div>

            </div>
        </>

    )

}

export default GamesOverlay