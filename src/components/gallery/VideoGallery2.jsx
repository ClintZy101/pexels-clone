import React from "react";
import useStore from "../../api/store/globalStore";
import HoverPlayVideo from "./HoverPlayVideo";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";

export default function VideoGallery2() {
  const { videos, loadingVideos, error } = useStore();
  console.log(videos);
  return (
    <div>
      <div className="p-5 flex">
        <h1 className="font-semibold text-3xl">
          Free Videos: Provided by PEXELS
        </h1>
      </div>
      {/* Video Collection */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 px-5 mx-auto ">
        {/* video_files[1] = hd quality */}
        {videos.map((vid) => (
          <div className="relative group  cursor-pointer xl:h-[300px] xl:w-[400px]">
            <Link to={`/video/${vid.id}`} state={vid}>
            <HoverPlayVideo videoSrc={vid.video_files[1]} key={vid.id} />
            </Link>
            {/* Photographer Link */}
            <div className="absolute top-0 hidden group-hover:block bg-black bg-opacity-10 p-5 w-full">
              <a href={vid.user.url}>
                <span className="flex space-x-2 items-center ">
                  <img
                    src="https://banner2.cleanpng.com/20180613/oaw/aa73wo5kh.webp"
                    alt={vid.user.name}
                    className="h-7 rounded-md bg-white "
                  />
                  <h4 className="font-bold text-white hover:text-black hover:bg-slate-50 transition-all duration-500">
                    {vid.user.name}
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
