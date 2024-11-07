import React from "react";
import useStore from "../../api/store/globalStore";
import HoverPlayVideo from "./HoverPlayVideo";
import { Link } from "react-router-dom";
import { getSdVideoFile } from "../../utils/getSdVideo";

export default function VideoGallery2() {
  const { videos, loadingVideos, error } = useStore();

  // Function to get the SD quality video file
  // const getSdVideoFile = (video_files) => {
  //   return video_files?.find((vid) => vid.quality === "sd");
  // };

  return (
    <div>
      <div className="p-5 flex items-baseline space-x-3">
        <h1 className="font-semibold text-3xl">{`Free ${videos.length} Videos`}</h1>
        <h2 className="font-medium">(provided by PEXELS)</h2>
      </div>
      {!videos ? (
        <div>No videos available at the moment</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 px-5 mx-auto">
          {videos?.map((vid) => {
            const sdVideo = getSdVideoFile(vid.video_files); // Get the SD video file

            return (
              <div
                key={vid.id}
                className="relative group cursor-pointer xl:h-[300px] xl:w-[400px]"
              >
                <Link to={`/video/${vid.id}`} state={vid}>
                  <HoverPlayVideo videoSrc={sdVideo} />{" "}
                  {/* Pass SD video to HoverPlayVideo */}
                </Link>

                {/* Photographer Link */}
                <div className="absolute top-0 hidden group-hover:block bg-black bg-opacity-10 p-5 w-full">
                  <a href={vid.user.url}>
                    <span className="flex space-x-2 items-center">
                      <img
                        src="https://t3.ftcdn.net/jpg/01/09/40/34/360_F_109403483_qocRmeSFXJ6KlF3yoaDBuI3CZOiNGfCw.jpg"
                        alt={vid.user.name}
                        className="h-7 rounded-md bg-white"
                      />
                      <h4 className="font-bold text-white hover:text-black hover:bg-slate-50 transition-all duration-500">
                        {vid.user.name}
                      </h4>
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* Video Collection */}
    </div>
  );
}
