import React from "react";
import PhotoGallery from "../components/gallery/PhotoGallery";
import { useState, useEffect } from "react";
import SearchBar from "../components/search/SearchBar";
import HoverPlayVideo from "../components/gallery/HoverPlayVideo";
import VideoGallery from "../components/gallery/VideoGallery";

export default function Home() {
  // implement a useHook on this for performance's sake

  const API_URL = "https://api.pexels.com/v1/";
  const curatedEndPoint = ` https://api.pexels.com/v1/curated?per_page=80`;
  const popularVideosEndPoint =
    "https://api.pexels.com/videos/popular?per_page=80";
  const [chosenGallery, setChosenGallery] = useState("photos");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const searchEndPoint = `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=80`;

  const fetchImages = async () => {
    if (chosenGallery === "photos") {
      setIsLoading(true);
      try {
        const response = await fetch(curatedEndPoint, {
          method: "GET",
          headers: {
            Authorization:
              "BPf0TOusbUHw2nGmGqLIctXjZEOYeURg1clScDimB5FEllMFMTCzgdbC",
          },
        });
        const data = await response.json();
        setImages(data.photos);
      } catch (error) {
        setError("Something went wrong...");
      } finally {
        setIsLoading(false);
      }
    } else if (chosenGallery === "videos") {
      setIsLoading(true);
      try {
        const response = await fetch(popularVideosEndPoint, {
          method: "GET",
          headers: {
            Authorization:
              "BPf0TOusbUHw2nGmGqLIctXjZEOYeURg1clScDimB5FEllMFMTCzgdbC",
          },
        });
        const data = await response.json();
        setVideos(data.videos);
      } catch (error) {
        setError("Something went wrong...");
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    // fetchImages();
  }, [chosenGallery]);

  //   console.log(images);

  // create functions  implement useHooks
  // filter images by size
  // create a modal for each picture

  return (
    <div>
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
            chosenGallery === "photos" ? "font-bold" : ""
          } text-2xl  cursor-pointer hover:underline`}
          onClick={() => setChosenGallery("photos")}
        >
          Photos
        </h1>
        <h1
          className={`${
            chosenGallery === "videos" ? "font-bold" : ""
          } text-2xl  cursor-pointer hover:underline`}
          onClick={() => setChosenGallery("videos")}
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
      {chosenGallery === 'photos' && <PhotoGallery images={images} /> }
      {chosenGallery === 'videos' && <VideoGallery videos={videos}/> }
      
    
    </div>
  );
}
