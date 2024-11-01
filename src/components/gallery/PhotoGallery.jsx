import React, { useState } from "react";
import PhotoModal from "./PhotoModal";

export default function PhotoGallery({ images }) {
  // const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
        {/* Heading */}
         <div className="p-5 flex">
          <h1 className="font-bold text-xl">Free Photos: provided by PEXELS</h1>
        </div>

            {/* Image Collection */}
      <div className="grid grid-cols-3 gap-5 mt-5 ">
        {images.map((img) => (
          <div className="relative group  cursor-pointer">
            <img
              className="hover:scale-[1.02] hover:opacity-80 transition-all duration-700  "
              key={img.id}
              src={img.src.portrait}
              alt={img.alt}
              //   height={"300px"}
              //   onClick={() => handleDownload(img.src.original, img.alt)}
            />

            <div className="absolute top-0 hidden group-hover:block bg-black bg-opacity-10 p-5 w-full">
              <div className="text-white">
                <h4>{img.alt}</h4>
              </div>
              <span className="flex space-x-2 items-center">
                <img
                  src="https://banner2.cleanpng.com/20180613/oaw/aa73wo5kh.webp"
                  alt={img.photographer}
                  className="h-7 rounded-md bg-white"
                />
                <h4 className="font-bold text-white">{img.photographer}</h4>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
