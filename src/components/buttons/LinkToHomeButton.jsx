import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function LinkToHomeButton() {
  return (
    <Link to={'/'}>
    <div className="flex space-x-2 items-center cursor-pointer  hover:font-bold duration:500 transition-all">
      <IoMdArrowRoundBack /> <h3>Go back Home</h3>
    </div>
    </Link>
  )
}
