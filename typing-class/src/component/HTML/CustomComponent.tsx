import React, { ComponentProps } from 'react'
import Counter from '../class/Counter'

const CustomComponent = (props : ComponentProps<typeof Counter>) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

export default CustomComponent