import {createContext} from "react";
import {useState} from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
    
const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token")||"");
  const [user, setUser] = useState(null);
    const login=(token,user)=>{
        localStorage.setItem("token",token);
        setToken(token);
        setUser(user);
        console.log("Token:", token);
console.log("User:", user);
        // console.log(user);
    }
    return (
        <AuthContext.Provider value={{token,login,user}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;