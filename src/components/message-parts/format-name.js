import React, { useEffect, useRef, useState } from "react"
import { useColorCorrection } from "../hook/color-correction"

export function DisplayName(props) {

    //Setting color as the same TMI gives in case the user already has one
    var newColor = props.color

    console.log("incoming log:", props.color)
    
    //Creating a random HEX color in case the user hasn't set one for themselves
    var randomColor = require('randomcolor')
    
    //Checking if the user has a color, if not, make one
    useEffect(() => {
        const createdColor = randomColor({luminosity: 'light'})

        if (!newColor) {
            newColor = createdColor
            console.log("assinged a color = ", newColor)
        }

    }, [])
        
    const [correctedColor, setCorrectedColor] = useState(newColor);
    const colorcorrector = useColorCorrection(newColor);

    useEffect(() => {
        setCorrectedColor(colorcorrector)
    }, [colorcorrector]);

    //Render the username with a color
    return (
       <strong className='user-name' style={{color: correctedColor }}>{props.user}: </strong>
    )
}

