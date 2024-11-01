import React from "react";
import { saveAs } from "file-saver";

export default function PhotoGallery({ images }) {
//   const handleDownload = (url) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "pexels-photo.jpg";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

  const handleDownload = (url, alt) => {
    saveAs(url, alt);
  };
  {
    /* Portrait Gallery with 3 Columns */
  }
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {images.map((img) => (
        <div className="relative">
          <a href={img.src.portrait} download>
            <img
              className="hover:scale-105  transition-all duration-700 "
              key={img.id}
              src={img.src.portrait}
              alt={img.alt}
            //   onClick={() => handleDownload(img.src.original)}
            />
          </a>
          <div className="abolute bottom-20">
            <span className="flex space-x-2 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/266/266033.png"
                alt={img.photographer}
                className="h-5 w-5 rounded-full"
              />
              <h4>{img.photographer}</h4>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
