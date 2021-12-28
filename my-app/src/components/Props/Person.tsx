import { type } from 'os'
import React from 'react'

type person = {
 name :{
     fn : string,
     ln : string
 }
}

const Person = (props : person) => {
    return (
        <div>
            <h1>{props.name.fn} {props.name.ln}</h1>
        </div>
    )
}

export default Person
