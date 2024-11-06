import React, { useState } from "react";
import LitUpBorderButton from "./LitUpBorderButton";
import { saveAs } from "file-saver";

// const handleDownload = (url, title) => {
//   saveAs(url, title);
// };

export default function VideoButtonWithDropdown({ video_files, setIsOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload =() => {
    setIsOpen(true)
  }

  

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
    
    <LitUpBorderButton />
      {/* Dropdown content */}
      {isHovered && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="grid gap-2 place-items-center  w-[400px]  absolute right-0 bg-white rounded border shadow-lg z-50"
        >
          {video_files.map((vid, index) => (
            <button
              onClick={() => {
                handleDownload();
                setIsHovered(false);
              }}
              key={index} // Add a unique key for each item
              className="flex space-x-5 hover:bg-gray-100 w-full justify-center items-center border-b h-12"
            >
              <p className="font-bold uppercase">{vid.quality}</p>
              <p>{`${vid.width}x${vid.height}`}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
