import { createContext, ReactNode } from "react"
import theme from "./theme"
 const ThemeContext= createContext(theme)

 type ThemeContextProviderProps = {
     children : ReactNode
 }

const ThemeContextProvider = ({children} : ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>
                {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
export {ThemeContext}
