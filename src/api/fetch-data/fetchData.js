import { data } from "autoprefixer";
import { useState } from "react";

export default function useFetchSearchData() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
const [images, setImages] = useState([])
const [videos, setVideos] = useState([])

 
  useEffect(() => {

  const fetchData = async (imageURL, videoURL) => {
  
    if (searchType === "Photos") {
      setIsLoading(true);
      try {
        const response = await fetch(imageURL, {
          method: "GET",
          headers: {
            Authorization:
              "BPf0TOusbUHw2nGmGqLIctXjZEOYeURg1clScDimB5FEllMFMTCzgdbC",
          },
        });
        const data = await response.json();
        setImages(data.photos);
        console.log(data)
      } catch (error) {
        setError("Something went wrong...");
      } finally {
        setIsLoading(false);
      }
    } else if (searchType === "Videos") {
      setIsLoading(true);
      try {
        const response = await fetch(videoURL, {
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
    fetchData();
  }, [url]); // Re-fetch data when URL changes

  return { images,videos, loading, error }; // Return data, loading, and error states
}
