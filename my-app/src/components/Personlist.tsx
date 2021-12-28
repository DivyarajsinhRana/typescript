import React from 'react'

type personlist = {
    names : {
        first : String
        last : String
    }[]
}
const Personlist = (props : personlist) => {
    return (
        <div>
            {
                props.names.map ((name,id)=>{
                    return (
                        <h1 key={id}>{name.first} {name.last}</h1>
                    )
                })
            }
        </div>
    )
}

export default Personlist
