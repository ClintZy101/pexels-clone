import React from "react";
import PhotoGallery from "../components/gallery/PhotoGallery";
import { useState, useEffect } from "react";
import SearchBar from "../components/search/SearchBar";
import useStore from "../api/store/globalStore";
import VideoGallery2 from "../components/gallery/VideoGallery2";
import { bgURL } from "../api/data/backgroundURL";
import Loader from "../components/loader/Loader";

export default function Home() {
  // create component for video rendering
  // implement cloudinary to play video on hover

  const [chosenGallery, setChosenGallery] = useState("Photos");
  const [query, setQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    images,
    videos,
    loadingPhotos,
    loadingVideos,
    error,
    fetchPhotos,
    fetchVideos,
  } = useStore();

  useEffect(() => {
    if (chosenGallery === "Photos") {
      fetchPhotos(query);
    } else if (chosenGallery === "Videos") {
      fetchVideos(query);
    }
  }, [chosenGallery]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === bgURL.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [bgURL]);

  return (
    <div className="smooth-scroll">
      {/* Hero */}
      {/* bg-[url('/bg-1.jpg')]  */}
      {/* bg-gradient-to-r from-violet-500 to-fuchsia-500 */}
      <div
        className={` h-[600px]   bg-no-repeat bg-cover border-b border-solid grid justify-center items-center `}
        // style={{ backgroundImage: url('/bg-1.jpg') }}
        style={{
          backgroundImage:
            bgURL.length > 0 ? `url(${bgURL[currentImageIndex].url})` : "none",
        }}
      >
        <div className="mx-5 bg-black bg-opacity-50 p-5 rounded-xl inline-block">
          <h1 className="text-white font-semibold text-3xl mb-2 ">
            The best free stock photos, royalty free <br /> images & videos
            shared by creators.
          </h1>
          <SearchBar />
        </div>
      </div>

      <div className="flex justify-center space-x-5 pt-5">
        <h1
          className={`${
            chosenGallery === "Photos" ? "font-bold" : ""
          } text-2xl  cursor-pointer hover:underline`}
          onClick={() => setChosenGallery("Photos")}
        >
          Photos
        </h1>
        <h1
          className={`${
            chosenGallery === "Videos" ? "font-bold" : ""
          } text-2xl  cursor-pointer hover:underline`}
          onClick={() => setChosenGallery("Videos")}
        >
          Videos
        </h1>
      
      </div>
      {loadingPhotos ? (
        <Loader />
      ) : (
        chosenGallery === "Photos" && <PhotoGallery images={images} />
      )}
      {loadingVideos ? (
        <Loader />
      ) : (
        chosenGallery === "Videos" && <VideoGallery2 videos={videos} />
      )}
    </div>
  );
}
