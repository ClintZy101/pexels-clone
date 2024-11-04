import React from "react";
import LitUpBorderButton from "../buttons/LitUpBorderButton";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function DownloadModal({
  photographer,
  photo_url,
  photographer_url,
  isOpen,
  setIsOpen,
}) {
  const handlePropagation = (e) => {
    e.stopPropagation;
  };
  return (
    // whole view port, modal background

    <div className="absolute top-0 z-50 w-screen h-[2000px] bg-black bg-opacity-70">
      {/* Modal */}
      <div className="w-5/6 h-max lg:w-3/5 lg:h-[400px] bg-white mx-auto mt-[150px] grid gap-5 place-items-center rounded-lg p-5">
        <div className="flex justify-between   w-full">
          <div
            onClick={() => setIsOpen(false)}
            className="hover:bg-black p-2 cursor-pointer rounded-full duration-500 "
          >
            <CgClose className="text-2xl hover:text-white duration-500" />
          </div>
          <Link to={'/'}>
          <div className="flex space-x-2 items-center cursor-pointer  hover:font-bold duration:500 transition-all">
            <IoMdArrowRoundBack /> <h3>Go back Home</h3>
          </div>
          </Link>
        </div>
        <h1 className="font-bold text-2xl"> Downloaded Successfully!</h1>

        <div className="grid lg:flex items-center space-x-2">
          <img src={photo_url} alt="image" className="rounded mx-auto" />

          <div className="grid gap-5 p-5">
            <h2 className="font-bold text-2xl">Say Thanks!</h2>
            <h2>
              Show some love to <strong>{photographer}</strong> by following his
              page and sending a donation.
            </h2>

            <div className="flex justify-end w-full">
              <a href={photographer_url}>
                <LitUpBorderButton title="Click To Follow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
