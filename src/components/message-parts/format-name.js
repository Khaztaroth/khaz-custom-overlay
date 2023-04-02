import React, { useEffect, useState } from "react"
import { useColorCorrection } from "../hook/color-correction"

export function DisplayName({color, user}) {

    //Setting color as the same TMI gives in case the user already has one
    var newColor = color 

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

