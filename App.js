import React from 'react'
import NavBar from './NavBar'
import Main from './Main'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <authContextProvider>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      </authContextProvider>
    
    </div>
  )
}

export default App