import { ReactNode,ComponentProps } from "react"

type buttonprops = {
    variant : "primary" | "secondary"
    children : string
} & Omit<ComponentProps<'button'>,'children'>

const Button = ({variant,children,...rest} : buttonprops) => {
    return (
        <div>
            <button className={`btn-${variant}`} {...rest}>{children}</button>
        </div>
    )
}

export default Button
