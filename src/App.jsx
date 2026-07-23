import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './component/Landingpage'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Destination from './component/Destination'
import About from './component/About'
import Contact from './component/Contact'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage/>}  /> 
        <Route path='/home' element={<Home/>}  /> 
        <Route path='/destination' element={<Destination/>}  /> 
        <Route path='/about' element={<About/>}  /> 
        <Route path='/contact' element={<Contact/>}  /> 
         
      </Routes>
    </Router>
    </>
  )
}

export default App
