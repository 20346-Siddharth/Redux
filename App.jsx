import { useState } from 'react'
import {Link, Route, Routes} from "react-router-dom"
import Home from './components/Home'
import Products from './components/Products'
import Users from './components/Users'

function App() {
  
  return (
    <>
    <div className='w-screen h-screen'>
        <nav className='py-5 flex gap-10 justify-center'>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/products">Products</Link>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/products" element={<Products/>}/>
          </Routes>
          </div>     
    </>
  )
}

export default App
