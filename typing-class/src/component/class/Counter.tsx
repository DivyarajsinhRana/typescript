import React, { Component } from 'react'

type countmessageprops ={
    message : string
}
type countstatetype = {
    count : number
}

 class Counter extends Component<countmessageprops,countstatetype> {
     state = {
         count : 0
     }
     
    render() {
        const handleClick = ()=>{
            this.setState((prev)=>{
                return ({count:prev.count+1})})
        }
        return (
            <div>
                <button onClick={handleClick}>Increment</button>
                <p>{this.props.message}{this.state.count}</p>
            </div>
        )
    }
}

export default Counter
