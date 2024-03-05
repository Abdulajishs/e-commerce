import { useState } from "react"
import AuthContext from "./auth-context"

const AuthContextProvider = (props) => {

    const [enteredToken, setEnteredToken] = useState(null);
    const isLoggedIn = !!enteredToken

    const logInHandler = (token) => {
        setEnteredToken(token)
        localStorage.setItem("token",token)
    }

    const logOutHandler = () =>{
        setEnteredToken(null)
        localStorage.removeItem("token")
    }

    const authContext = {
        token: "",
        isLoggedIn: isLoggedIn,
        logIn: logInHandler,
        logOut: logOutHandler,
    }
    return (
        <>
            {console.log(authContext.token)}
            <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
        </>
    )
}

export default AuthContextProvider;