import React from 'react'
import { Link } from 'react-router-dom'

// bg-gradient-to-tr from-indigo-600 to-purple-500
export default function Navbar() {
  return (
    <div className="z-50 text-center fixed w-full bg-black  bg-opacity-70 text-white  h-14 items-center flex p-5  justify-between  ">
       <Link to="/">
        <h1 className='font-semibold text-xl cursor-pointer'>Pexels Clone</h1>
        </Link>
        <div><h1 className='font-light text-xs'>App by: Clint</h1></div>
      </div>
  )
}
