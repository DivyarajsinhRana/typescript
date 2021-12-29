import { createContext,useState, ReactNode } from "react"

type UsercontextProviderProps = {
    children : ReactNode
}
type AuthUser = {
    name : string,
    email : string
}
type UserContextType = {
    user : AuthUser | null,
    setuser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}
 const userContext = createContext<UserContextType>({} as UserContextType);

const UserContextProvider = ({children} : UsercontextProviderProps) => {
    const [user,setuser] = useState<AuthUser | null>(null)
    return (
        <>
         <userContext.Provider value={{user,setuser}}>
             {children}
             </userContext.Provider>   
        </>
    )
}

export default UserContextProvider
export {userContext}
