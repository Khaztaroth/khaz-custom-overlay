import React from "react"

export function DisplayName(props) {
    return (
       <strong className='user-name' style={{color: props.color}}>{props.user}: </strong>
    )
}

