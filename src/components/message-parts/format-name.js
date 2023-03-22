import React, { useEffect, useState } from "react"
import { useColorCorrection } from "../hook/color-correction"
import { useCreateColor } from "../hook/create-color"

export function DisplayName(props) {

    //Setting color as the same TMI gives in case the user already has one
    let newColor = props.color

    //Creating a random HEX color in case the user hasn't set one for themselves
    const [createColor, setCreateColor] = useState([]);
    const randomColor = useCreateColor();

    useEffect(() => {
        setCreateColor(randomColor)
    }, [randomColor]);

    //Checking if the user has a color, if not, make one
    if (newColor === null) {
        newColor = createColor
    };

    const [correctedColor, setCorrectedColor] = useState(newColor);
    const colorcorrector = useColorCorrection(newColor);

    useEffect(() => {
        setCorrectedColor(colorcorrector)
    }, [colorcorrector]);

    //Render the username with a color
    return (
       <strong className='user-name' style={{color: correctedColor}}>{props.user}: </strong>
    )
}

