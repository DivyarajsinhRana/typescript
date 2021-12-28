import { type } from 'os'
import React from 'react'

// defining type props
type GreetType ={
    name:string,
    age?:number, //optional props
    isLoggedIn:boolean
}

const Greet = (props:GreetType) => {
    let {age} = props; // destructuring age from props
    age=21; // default age
    return (
        <div>
            {
                props.isLoggedIn ? (<h1>Hi i am {props.name} , my age is {age} year</h1>) :
                (<h1>Welcome guest</h1>)
            }
        </div>
    )
}
export default Greet
