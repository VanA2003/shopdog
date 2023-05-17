import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/dogs">Dogs</Link>
            <Link to="/checkout">My Cart</Link>
        </nav>
    </>
  )
}
