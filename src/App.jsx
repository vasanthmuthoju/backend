import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import Footer from './Components/Footer'
import Login from './Components/Login'
import SignUp from './Components/Signup'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'

function App() {
  return (
    <div>  
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={< SignUp />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
       
      </Routes>
    

      <Footer/>
    </div>
  )
}

export default App