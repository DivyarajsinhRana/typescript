import { CSSProperties } from "react"

type styleProp ={
    styles : CSSProperties
}

const Container = (props : styleProp) => {
    return (
        <div style={props.styles}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis consectetur dolorem fugit rem. Accusantium voluptates nostrum dicta officia provident illum assumenda obcaecati vel? Ipsa rerum animi in a fugit architecto.
        </div>
    )
}

export default Container
