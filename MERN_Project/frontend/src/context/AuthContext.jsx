import {createContext} from "react";
import {useState} from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
    
const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token")||"");
    const [user,setUser]=useState(localStorage.getItem("user")||"");
    const login=(token,user)=>{
        localStorage.setItem("token",token);
        setToken(token);
        setUser(localStorage.setItem("user",JSON.stringify(user)));
    }
    return (
        <AuthContext.Provider value={{token,user,login}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;