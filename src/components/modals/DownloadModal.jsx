import React, { useRef, useEffect } from "react";
import LitUpBorderButton from "../buttons/LitUpBorderButton";
import { CgClose } from "react-icons/cg";

import LinkToHomeButton from "../buttons/LinkToHomeButton";

export default function DownloadModal({
  photographer,
  photo_url,
  photographer_url,
  isOpen,
  setIsOpen,
}) {
 const modalRef = useRef(null);
 const handleCloseModal = () => {
    setIsOpen(!isOpen)
 }

  useEffect(() => {
    // Function to detect click outside modal
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // onClose();
        handleCloseModal()
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseModal]);
  return (
    // whole view port, modal background

    <div className="absolute top-0 z-50 w-screen h-[2000px] bg-black bg-opacity-70">
      {/* Modal */}
      <div 
      ref={modalRef}
      className="w-5/6 h-max lg:w-3/5 lg:h-[400px] bg-white mx-auto mt-[150px] grid gap-5 place-items-center rounded-lg p-5">
        <div className="flex justify-between   w-full">
          <div
            onClick={() => setIsOpen(false)}
            className="hover:bg-black p-2 cursor-pointer rounded-full duration-500 "
          >
            <CgClose className="text-2xl hover:text-white duration-500" />
          </div>

          <LinkToHomeButton />

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
