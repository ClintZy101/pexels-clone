import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  // const [placeholder, setPlaceHolder] =useState('Search Free Photos')
  return (
    <form className='flex bg-white rounded'>
      {/* <div className='border-[1px] '>
        <div>Photos</div>
      </div> */}
      <input type="text" placeholder='Search Free Photos and Videos' className='h-12 w-full outline-none px-2 rounded'/>
      <div className='border-l flex items-center justify-center p-2 cursor-pointer'>
      <CiSearch className='text-3xl text-gray-500'/>
      </div>
     
    </form>
  )
}
