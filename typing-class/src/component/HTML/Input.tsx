import {ComponentProps} from 'react'
 
 type inputprops = ComponentProps<'input'>

const Input = ({...rest} : inputprops) => {
    return (
        <div>
            <input type="text" {...rest}  />
        </div>
    )
}

export default Input
