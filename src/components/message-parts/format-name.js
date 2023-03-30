import { randomColor as rand} from "randomcolor";
import React, { useEffect, useState } from "react"
import { useColorCorrection } from "../hook/color-correction"

export function DisplayName(props) {

    //Setting color as the same TMI gives in case the user already has one
    let newColor = props.color

    console.log("incoming color:", newColor)

    //Creating a random HEX color in case the user hasn't set one for themselves
    const [createColor, setCreateColor] = useState([]);
    const randomColor = rand({
        luminosity: 'light',
        format: 'hex',
     })

    useEffect(() => {
        setCreateColor(randomColor)
    }, []);

    // console.log("created color:", createColor)

    //Checking if the user has a color, if not, make one
    if (!newColor) {
        newColor = createColor
        console.log("new color:", newColor)
    };

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

