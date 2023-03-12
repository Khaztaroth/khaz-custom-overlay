import React, { useEffect, useState } from "react"
import { useColorCorrection } from "../hook/color-correction"

export function DisplayName(props) {

    //Setting color as the same TMI gives in case the user already has one
    let newColor = props.color

    //Creating a random HEX color in case the user hasn't set one for themselves
    const [createColor, setCreateNewColor] = useState('#000000')
    useEffect(() => {
        const randomColor = () => {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random()*16)]
            }
            return color
        }
        setCreateNewColor(randomColor())
    }, [])


    //Checking if the user has a color, if not, make one
    if (props.color === null) {
        newColor = createColor
    }

    const correctedColor = useColorCorrection(newColor);
    //Render the username with a color
    return (
       <strong className='user-name' style={{color: correctedColor}}>{props.user}: </strong>
    )
}

