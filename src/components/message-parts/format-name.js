import React, { useEffect, useRef, useState } from "react"
import { useColorCorrection } from "../hook/color-correction"

export function DisplayName({color, user}) {
    var randomColor = require('randomcolor')

    const createdColor = useRef(randomColor({luminosity: 'light'}))
    //Setting color as the same TMI gives in case the user already has one
    var newColor

    if (!color) {
        newColor = createdColor.current
    } else {
        newColor = color
    }

    const [correctedColor, setCorrectedColor] = useState(newColor);
    const colorcorrector = useColorCorrection(newColor);

    useEffect(() => {
        setCorrectedColor(colorcorrector)
    }, [colorcorrector]);

    //Render the username with a color
    return (
       <strong className='user-name' style={{color: correctedColor }}>{user}: </strong>
    )
}

