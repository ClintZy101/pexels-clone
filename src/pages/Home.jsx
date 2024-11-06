import React from "react";
import PhotoGallery from "../components/gallery/PhotoGallery";
import { useState, useEffect } from "react";
import SearchBar from "../components/search/SearchBar";
import HoverPlayVideo from "../components/gallery/HoverPlayVideo";
import VideoGallery from "../components/gallery/VideoGallery";
// import { useStore } from "zustand";
import useStore from "../api/store/globalStore";

export default function Home() {

  // create component for video rendering
  // implement cloudinary to play video on hover


  const [chosenGallery, setChosenGallery] = useState("Photos");
  const [query, setQuery] = useState("");

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

  return (
    <div className="smooth-scroll">
      {/* Hero */}
      <div className=" h-[600px] bg-[url('/bg-1.jpg')]  bg-no-repeat bg-cover border-b border-solid grid justify-center items-center ">
        <div className="mx-5">
          <h1 className="text-white font-semibold text-3xl mb-2">
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
        {/* <h1
          className={`${
            chosenGallery === "trending" ? "font-bold" : ""
          } text-2xl  cursor-pointer hover:underline`}
          onClick={() => setChosenGallery("trending")}
        >
          Trending
        </h1> */}
      </div>
      {chosenGallery === "Photos" && <PhotoGallery images={images} />}
      {chosenGallery === "Videos" && <VideoGallery videos={videos} />}
    </div>
  );
}
