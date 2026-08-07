
import Login from './pages/login'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import StudentDashboard from './pages/StudentDashboard'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
function App() {
  
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin/dashboard' element={<ProtectedRoutes role="admin"><AdminDashboard/></ProtectedRoutes>}/>
      <Route path='/student/dashboard' element={<ProtectedRoutes role="student"><StudentDashboard/></ProtectedRoutes>}/>
     
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
