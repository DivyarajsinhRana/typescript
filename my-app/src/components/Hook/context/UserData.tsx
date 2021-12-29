import { useContext } from "react"
import { userContext } from "./UserContextProvider"
const UserData = () => {
    const user = useContext(userContext)
    const handleLogin = () => {
        
                user.setuser({
                    name:"Divyaraj",
                    email:"dc@gmail.com"
                })
            
    }
    const handleLogout = () => {
    
            user.setuser(null)
        
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>Name of user is {user.user?.name}:</h1>
            <h1>Email of user is {user.user?.email}:</h1>
        </div>
    )
}

export default UserData
