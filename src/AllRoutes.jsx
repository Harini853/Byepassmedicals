import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Categories from './Components/Category/Category'
import Home from './Pages/Home/Home'
import Lander from './Pages/Lander/Lander'
import Cart from './Pages/Cart/Cart'
import Products from './Pages/Products/Products'
import ViewProduct from './Pages/ViewProduct/ViewProduct'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element={<Lander/>}/>
        <Route path='/lander' element={<Lander />} />
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/register' element={<Register/>} /> */}
        <Route path='/home' element={<Home/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/view' element={<ViewProduct/>}/>
        
       
    </Routes>
  )
}
export default AllRoutes;