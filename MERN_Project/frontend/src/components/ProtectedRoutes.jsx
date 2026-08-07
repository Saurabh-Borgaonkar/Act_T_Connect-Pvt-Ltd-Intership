
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
const ProtectedRoutes = ({children,role}) => {
    const {token,user}=useContext(AuthContext);
  if (!token || !user) {
    return <Navigate to="/" replace />;
}
   if(token && user.role == role){
    return children;
   }
   return <Navigate to="/" replace />;
}

export default ProtectedRoutes
