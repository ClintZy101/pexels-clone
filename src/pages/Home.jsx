import React from "react";
import PhotoGallery from "../components/gallery/PhotoGallery";
import { useState, useEffect } from "react";
import SearchBar from "../components/search/SearchBar";

export default function Home() {

    const [chosenGallery, setChosenGallery] = useState('photos')
  const curatedEndPoint = ` https://api.pexels.com/v1/curated?per_page=80`;

  const [searchQuery, setSearchQuery] = useState("");
  const searchEndPoint = `https://api.pexels.com/v1/search?${searchQuery}=nature&per_page=80`;
  const API_URL = "https://api.pexels.com/v1/";

  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(curatedEndPoint, {
        method: "GET",
        headers: {
          Authorization:
            "BPf0TOusbUHw2nGmGqLIctXjZEOYeURg1clScDimB5FEllMFMTCzgdbC",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setImages(data.photos);
    } catch (error) {
      window.console.error("Error:", error);
    }
  };

  useEffect(() => {
    // fetchImages();
  }, []);

  console.log(images);

  // create functions
  // filter images by size
  // create a modal for each picture


  return (
    <div>
        {/* Hero */}
      <div className=" h-[600px] bg-[url('bg-1.jpg')]  bg-no-repeat bg-cover border-b border-solid grid justify-center items-center">
        <div>
        <h1 className="text-white font-semibold text-3xl mb-2">The best free stock photos,  royalty free <br/> images & videos shared by creators.</h1>
        <SearchBar />
        </div>
            
      </div>

      <div className="flex justify-center space-x-5 pt-5">
        <h1 className={`${chosenGallery === 'photos' ? 'font-bold' : ''} text-2xl  cursor-pointer hover:underline`}  onClick={()=> setChosenGallery('photos')}>Photos</h1>
        <h1 className={`${chosenGallery === 'videos' ? 'font-bold' : ''} text-2xl  cursor-pointer hover:underline`} onClick={()=> setChosenGallery('videos')}>Videos</h1>
        <h1 className={`${chosenGallery === 'trending' ? 'font-bold' : ''} text-2xl  cursor-pointer hover:underline`} onClick={()=> setChosenGallery('trending')}>Trending</h1>
      </div>
      <PhotoGallery images={images} />
    </div>
  );
}
