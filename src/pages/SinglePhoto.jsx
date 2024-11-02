import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ButtonWithDropDown from "../components/buttons/ButtonWithDropDown";

export default function SinglePhoto() {
  const location = useLocation();
  const { id } = useParams();

  const image = location.state;

  return (
    // whole view port
    <div className="w-screen h-screen grid place-items-center ">
      <div className="w-4/5 h-max grid gap-5 p-5 mt-14 shadow-lg">
        <div className="w-full flex justify-between mt-2">
          {/* link to photographer profile in pexels */}
          <a href={image.photographer_url}>
            <div className="flex space-x-2  ">
              <img
                src="https://banner2.cleanpng.com/20180613/oaw/aa73wo5kh.webp"
                alt={image.photographer}
                className="h-7 rounded-md bg-white"
              />
              <h4 className="font-bold   hover:bg-slate-50 transition-all duration-500">
                {image.photographer}
              </h4>
            </div>
          </a>

          {/* Download Options */}
          <div className="">
            <ButtonWithDropDown
              photo_title={image.alt || image.id}
              photo_url={image.src}
              orig_width={image.width}
              orig_height={image.height}
            />
          </div>
        </div>

        {/* Image Portrait */}
        <img
          src={image.src.portrait}
          alt={image.alt}
          className="max-h-[800px] mx-auto"
        />
      </div>
    </div>
  );
}
