import React, { Suspense, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PhotoGallery from "../components/gallery/PhotoGallery";
import VideoGallery from "../components/gallery/VideoGallery";
import SearchBar from "../components/search/SearchBar";
import useStore from "../api/store/globalStore";

const Loading = () => (
  <div className="absolute top-0 w-screen h-[1000px]">
    <button type="button" class="bg-indigo-500 ..." disabled>
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Loading...
    </button>
  </div>
);

export default function Search() {
  const {
    images,
    videos,
    loadingPhotos,
    loadingVideos,
    error,
    query,
    setQuery,
    searchType,
    setSearchType,
    fetchPhotos,
    fetchVideos,
  } = useStore();

  // const location = useLocation();
  // const { searchType, searchWord } = location.state;
  
  useEffect(() => {
    if (searchType === 'Photos'){
      fetchPhotos(query)
    } else if(searchType === 'Videos'){
      fetchVideos(query)
    }
   
  }, [searchType]);
  // console.log(images || videos);
  console.log(searchType, query)
  return (
    <div className="pt-20 ">
      <div className="w-full flex justify-center sticky top-1 z-50 "><SearchBar /></div>
      <Suspense fallback={<Loading />}>
        {searchType === "Photos" && <PhotoGallery images={images} />}
        {searchType === "Videos" && <VideoGallery videos={videos} />}
      </Suspense>
    </div>
  );
}
