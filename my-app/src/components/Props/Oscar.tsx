import React, { FC, ReactNode } from 'react'
 type oscarType ={
    children : ReactNode
 }
const Oscar  = (props : oscarType) => {
    return (
        <div>
            <h1>{props.children}</h1>
        </div>
    )
}
export default Oscar
