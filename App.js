import React from 'react'
import NavBar from './NavBar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './pages/ProtectedRoute'
import Account from './pages/Account'

const App = () => {
  return (
    <div>
      <AuthContextProvider>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><NavBar /><Home/></>}/>
          <Route path="/signup" element={<><NavBar /><Signup/></>}/>
          <Route path="/signin" element={<><NavBar /><Login/></>}/>
          <Route path="/account" element={<ProtectedRoute><NavBar /><Account/></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    
    </div>
  )
}

export default App