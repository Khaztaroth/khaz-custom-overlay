import React from "react"

export function UserName(props) {
    return (
       <strong className='user-name' style={{color: props.color}}>{props.user}: </strong>
    )
}

