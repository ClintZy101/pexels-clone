import React, { Suspense, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PhotoGallery from "../components/gallery/PhotoGallery";
import VideoGallery from "../components/gallery/VideoGallery";

const Loading = () => <div>loading...</div>;

export default function Search() {
  const location = useLocation();
  const { searchType, searchWord } = location.state;
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const imageSearchEndPoint = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=80`;
  const videoSearchEndPoint = `https://api.pexels.com/videos/search?query=${searchWord}&per_page=80`;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //  console.log(location.state)
  //   console.log(searchType, searchWord)

  const fetchData = async () => {
    if (searchType === "Photos") {
      setIsLoading(true);
      try {
        const response = await fetch(imageSearchEndPoint, {
          method: "GET",
          headers: {
            Authorization:
              "BPf0TOusbUHw2nGmGqLIctXjZEOYeURg1clScDimB5FEllMFMTCzgdbC",
          },
        });
        const data = await response.json();
        setImages(data.photos);
        console.log(data);
      } catch (error) {
        setError("Something went wrong...");
      } finally {
        setIsLoading(false);
      }
    } else if (searchType === "Videos") {
      setIsLoading(true);
      try {
        const response = await fetch(videoSearchEndPoint, {
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
    fetchData();
  }, []);
  console.log(images || videos);
  return (
    <Suspense fallback={<Loading />}>
      <div className="pb-20">
        {searchType === "Photos" && <PhotoGallery images={images} />}
        {searchType === "Videos" && <VideoGallery videos={videos} />}
      </div>
    </Suspense>
  );
}
