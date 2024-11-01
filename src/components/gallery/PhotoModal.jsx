import React from 'react'
import { saveAs } from "file-saver";

export default function PhotoModal({photoUrl='',photoTitle='Photo Title',}) {
    const handleDownload = (url, alt) => {
        saveAs(url, alt);
      };
  return (
    <div className='w-screen h-screen bg-white absolute z-50'>
        <h1>{photoTitle}</h1>
        <div className='h-1/3 w-1/3'>
            <img src={photoUrl} alt="" />
        </div>
    </div>
  )
}
