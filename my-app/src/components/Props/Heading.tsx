import { type } from 'os'
import React, { FC } from 'react'
//  type headingType = {
//      children : string
//  }
const Heading : FC = ({children}) => {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    )
}

export default Heading
