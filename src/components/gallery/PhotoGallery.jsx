import React from "react";
import { Link } from "react-router-dom";
import useStore from "../../api/store/globalStore";

export default function PhotoGallery({ images }) {
  const {query, searchType} = useStore();

  return (
    <div className="">
      {/* Heading */}
      <div className="p-5 flex items-baseline space-x-3">
        <h1 className="font-semibold text-3xl">{`Free Photos`}</h1>
        <h2 className="font-medium">(provided by PEXELS)</h2>
      </div>

      {/* Image Collection */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 px-5">
        {images.map((img) => (
          <div key={img.id} className="relative group  cursor-pointer">
            <Link to={`/photo/${img.id}`} state={img}>
              <img
                className="hover:scale-[1.02] hover:opacity-80 transition-all duration-700  "
                key={img.id}
                src={img.src.portrait}
                alt={img.alt}
                //   height={"300px"}
                //   onClick={() => handleDownload(img.src.original, img.alt)}
              />
            </Link>
            {/* Photographer Link */}
            <div className="absolute top-0 hidden group-hover:block bg-black bg-opacity-10 p-5 w-full">
              <div className="text-white">
                <h4>{img.alt}</h4>
              </div>
              <a href={img.photographer_url}>
                <span className="flex space-x-2 items-center  ">
                  <img
                    src="https://banner2.cleanpng.com/20180613/oaw/aa73wo5kh.webp"
                    alt={img.photographer}
                    className="h-7 rounded-md bg-white"
                  />
                  <h4 className="font-bold text-white hover:text-black hover:bg-slate-50 transition-all duration-500">
                    {img.photographer}
                  </h4>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
