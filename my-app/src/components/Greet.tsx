import { type } from 'os'
import React from 'react'

// defining type props
type GreetType ={
    name:string,
    age:number,
    isLoggedIn:boolean
}

const Greet = (props:GreetType) => {
    return (
        <div>
            {
                props.isLoggedIn ? (<h1>Hi i am {props.name} , my age {props.age} year</h1>) :
                (<h1>Welcome guest</h1>)
            }
        </div>
    )
}
export default Greet
