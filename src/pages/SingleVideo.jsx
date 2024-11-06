import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonWithDropDown from "../components/buttons/ButtonWithDropDown";
import DownloadModal from "../components/modals/DownloadModal";
import LinkToHomeButton from "../components/buttons/LinkToHomeButton";
import VideoButtonWIthDropDodwn from "../components/buttons/VideoButtonWIthDropDodwn";
import LitUpBorderButton from "../components/buttons/LitUpBorderButton";

const VidDownloadModal = ({setIsOpen}) => {
  const message =
    "Sorry! Pexels API doesn't offer a downloadable video file at the moment...";

  return (
    <div className="w-screen h-[1000px] bg-black bg-opacity-80 absolute top-0 z-50">
      <div className="w-[500px] h-[300px] bg-white z-50 rounded-lg mx-auto mt-[150px] grid place-items-center gap-5  p-5">
        <LinkToHomeButton />
        <div className="grid gap-5">
          <h1 className="font-bold text-xl">Message:</h1>
          <p className="text-black font-semibold">{message}</p>
          <LitUpBorderButton title="Okay..." onClick={()=> setIsOpen(false)}/>
        </div>
      </div>
    </div>
  );
};

export default function SinglePhoto() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const video = location.state;

  return (
    // whole view port
    <div className="w-screen h-screen grid place-items-center ">
      {isOpen && <VidDownloadModal setIsOpen={setIsOpen} />}

      <div className="w-4/5 h-max grid gap-5 p-5 mt-14 shadow-lg">
        <div className="w-full flex justify-end">
          <LinkToHomeButton />
        </div>
        <div className="w-full text-center font-semibold">
          <h1>{video.user.name || "Photo Title"}</h1>
        </div>
        <div className="w-full flex items-center justify-between mt-2">
          {/* link to photographer profile in pexels */}
          <a href={video.user.url}>
            <div className="flex space-x-2  ">
              <img
                src="https://banner2.cleanpng.com/20180613/oaw/aa73wo5kh.webp"
                alt={video.user.name}
                className="h-7 rounded-md bg-white"
              />
              <h4 className="font-bold   hover:bg-slate-50 transition-all duration-500">
                {video.user.name}
              </h4>
            </div>
          </a>

          {/* Download Options */}
          <div className="">
            <VideoButtonWIthDropDodwn
              video_files={video.video_files}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>

        {/* Image Portrait */}
        <video controls autoPlay>
          <source src={video.video_files[0].link} />
        </video>
      </div>
    </div>
  );
}
