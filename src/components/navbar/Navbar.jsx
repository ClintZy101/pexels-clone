import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="z-50 text-center fixed w-full bg-gradient-to-tr from-indigo-600 to-purple-500 bg-opacity-80 text-white  h-14 items-center flex p-5  justify-between ">
       <Link to="/">
        <h1 className='font-semibold text-xl cursor-pointer'>Pexels Clone</h1>
        </Link>
        <div></div>
        
      </div>
  )
}
