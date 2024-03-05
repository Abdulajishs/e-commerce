import React from "react";
const AuthContext = React.createContext({
    token : "",
    isLoggedIn : null,
    logIn : ()=>{},
    logOut : ()=>{}
})
export default AuthContext;