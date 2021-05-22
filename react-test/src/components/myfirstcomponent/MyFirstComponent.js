import React from 'react'
import './MyFirstComponent.css'

export const MyFIrstComponent = (props) => {

    return (
        <>
            <h1 className="title">{props.name}
                {props.age}</h1>
        </>
    )
} 