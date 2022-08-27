import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignUp } from './Signup_Login/SignUp'
import { Footer } from './Components/Footer'
import { Navbar } from './Components/Navbar'
import { Home } from './LandingPage/Home'
import { Camera } from './Pages/Camera/Camera'
import {Phone}  from './Pages/CellPhone/Cellphone'
import { Computer } from './Pages/ComputerTablet/Computer';
import { Tv } from './Pages/HomeTheater/Tv';
import Login from './Signup_Login/Login'
import { CartPage } from './Pages/CartPage';
import { CheckOut } from './Pages/Checkoutpage/CheckOut'
// import { Card } from './Pages/components/Card'

 const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
           {/* <Card/> */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/phone' element={<Phone/>}/>
            <Route path='/tv' element={<Tv/>}/>
            <Route path='/computer' element={<Computer/>}/>
            <Route path='/camera' element={<Camera/>}/>
           <Route path='/cart' element={<CartPage/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes
