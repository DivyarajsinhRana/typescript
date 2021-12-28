import { ChangeEvent } from "react"

type inputType ={
    value : string,
    handleChange : (event : ChangeEvent<HTMLInputElement>) => void
}

const Input = (props : inputType) => {
    const handleInputChange = (e : ChangeEvent<HTMLInputElement>) =>{
        console.log(e)
    }
    return (
        <div>
        <input type="text" value={props.value} onChange={props.handleChange} />            
        </div>
    )
}

export default Input
