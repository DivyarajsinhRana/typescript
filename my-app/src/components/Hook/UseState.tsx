import {useState} from 'react'

 // normal usestate
const UseState = () => {
    const [isLoggedin,setIsLoggedin] =useState (false);
     const handleLogin = () => {
         setIsLoggedin(true)
     }
     const handleLogout = () => {
         setIsLoggedin(false);
     }
    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>User is { isLoggedin ? "Logged in " : "Loggedout" }</h1>
        </div>
    )
}
//usestate using typescript

type Authuser = {
    name : string,
    email : string
}

const User = () => {
    const [user,setuser] = useState<Authuser |null> (null)

    const handleLogin = ()=>{
        setuser({
            name:"divyaraj",
            email:"dc@gmail.com"
        })
    }
    const handleLogout = ()=>{
        setuser(null)
    }

    return (
        <div>
             <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>Name of user is {user?.name}</p>
            <p>Email  of user is{user?.email} </p>
        </div>
    )
}

export   {UseState,User}
