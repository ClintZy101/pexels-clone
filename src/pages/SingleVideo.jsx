import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LinkToHomeButton from "../components/buttons/LinkToHomeButton";
import VideoButtonWIthDropDodwn from "../components/buttons/VideoButtonWIthDropDodwn";
import VidDownloadModal from "../components/modals/VideoDownloadModal";



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
