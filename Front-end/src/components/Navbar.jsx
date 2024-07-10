import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-6 ' >
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/mens"} >Men's</NavLink>
        <NavLink to={"/womens"}>Women's</NavLink>
        <NavLink to={"/kids"}>Kid's</NavLink>
    </div>
  )
}

export default Navbar