import React, { useState } from "react";
import PhotoModal from "./PhotoModal";

export default function VideoGallery({  videos }) {
  // const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      {/* Heading */}
      <div className="p-5 flex">
        <h1 className="font-bold text-xl">Free Photos: provided by PEXELS</h1>
      </div>

      {/* Video Collection */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 px-5 mx-auto ">
       {/* Video Thumbnails that will link to the Video */}
        {videos.map((vid) => (
          <div key={vid.id} className="relative group  cursor-pointer xl:h-[300px] xl:w-[400px]">
             <img
                className="hover:scale-[1.02] hover:opacity-80 transition-all duration-700  xl:h-[300px] xl:w-[400px] "
                key={vid.id}
                src={vid.image}
                alt={vid.id}
                //   height={"300px"}
                //   onClick={() => handleDownload(img.src.original, img.alt)}
              />


            {/* Photographer Link */}
            <div className="absolute top-0 hidden group-hover:block bg-black bg-opacity-10 p-5 w-full">
              {/* <div className="text-white">
                <h4>{vid.alt}</h4>
              </div> */}
              <a href={vid.user.url}>
                <span className="flex space-x-2 items-center ">
                  <img
                    src="https://banner2.cleanpng.com/20180613/oaw/aa73wo5kh.webp"
                    alt={vid.user.name}
                    className="h-7 rounded-md bg-white "
                  />
                  <h4 className="font-bold text-white hover:text-black hover:bg-slate-50 transition-all duration-500">{vid.user.name}</h4>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
