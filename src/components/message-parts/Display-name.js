import React, { useEffect, useState } from "react"

export function DisplayName(props) {

    let newColor = props.color

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

    if (props.color === null) {
        newColor = createColor
    }

    return (
       <strong className='user-name' style={{color: newColor}}>{props.user}: </strong>
    )
}

