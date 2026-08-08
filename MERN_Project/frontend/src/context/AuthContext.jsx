import {createContext} from "react";
import {useState} from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
    
const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token")||"");
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
});
   const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setToken(token);
    setUser(user);
};

const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken("");
    setUser(null);
};
    return (
        <AuthContext.Provider value={{token,login,user,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;