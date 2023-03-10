import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import { AuthContextProvider } from './context/AuthContext.js'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import ProtectedRoute from './components/ProtectedRoute.js'

const App = () => {
  return (
   
     <>
     <AuthContextProvider>
     <Navbar/>
     <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/login' element = {<Login/>} />
      <Route path='/signup' element = {<Signup/>} />
      <Route path='/account' element = {<ProtectedRoute><Account/></ProtectedRoute>} />
     </Routes>
     </AuthContextProvider>
     </>
  )
}

export default App