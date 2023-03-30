import React, { useEffect, useState } from "react"
import { useColorCorrection } from "../hook/color-correction"

export function DisplayName(props) {

    //Setting color as the same TMI gives in case the user already has one
    var newColor = props.color

    //Creating a random HEX color in case the user hasn't set one for themselves
    // const [createdColor, setCreateColor] = useState([]);
    var randomColor = require('randomcolor')
    const assingedColor = randomColor({luminosity: 'light', format: 'hex',})

    
    //Checking if the user has a color, if not, make one
     useEffect(() => {
     if (!newColor) {
            newColor = assingedColor
        }
    }, [])

    const [correctedColor, setCorrectedColor] = useState(newColor);
    const colorcorrector = useColorCorrection(newColor);

    useEffect(() => {
        setCorrectedColor(colorcorrector)
    }, [colorcorrector]);

    // console.log("incoming color", props.color, "new color:", newColor, "corrected color:", correctedColor)
    //Render the username with a color
    return (
       <strong className='user-name' style={{color: correctedColor }}>{props.user}: </strong>
    )
}

