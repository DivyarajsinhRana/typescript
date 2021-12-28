import { type } from 'os'
import React from 'react'

type GreetType ={
    name:string,
    count:number
}

const Greet = (props:GreetType) => {
    return (
        <div>
            <h1>Hi {props.name}! you have {props.count} unread messages</h1>
        </div>
    )
}

export default Greet
