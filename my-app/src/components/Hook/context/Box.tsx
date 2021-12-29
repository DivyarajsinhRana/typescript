import { useContext } from "react"
import { ThemeContext } from "./ThemeContextProvider"


const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div style={{backgroundColor : theme.dark.background, color:theme.dark.foreground}}>
            Theme context
        </div>
    )
}

export default Box
