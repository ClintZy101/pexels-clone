import React, { useEffect } from "react";
import PhotoGallery from "../components/gallery/PhotoGallery";
import SearchBar from "../components/search/SearchBar";
import useStore from "../api/store/globalStore";
import VideoGallery2 from "../components/gallery/VideoGallery2";
import Loader from "../components/loader/Loader";


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
    if (searchType === "Photos") {
      fetchPhotos(query);
    } else if (searchType === "Videos") {
      fetchVideos(query);
    }
  }, [searchType]);
  // console.log(images || videos);
  console.log(searchType, query);
  return (
    <div className="pt-20 ">
      <div className="w-full flex justify-center sticky top-1 z-50 ">
        <SearchBar />
      </div>
      <div>
        {loadingPhotos ? (
          <Loader />
        ) : (
          searchType === "Photos" && <PhotoGallery images={images} />
        )}
        {loadingVideos ? (
          <Loader />
        ) : (
          searchType === "Videos" && <VideoGallery2 videos={videos} />
        )}
        {}
      </div>
    </div>
  );
}
