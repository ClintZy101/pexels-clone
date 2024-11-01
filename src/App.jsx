import { useState, useEffect } from "react";
import "@fontsource-variable/montserrat";
import Navbar from "./components/navbar/Navbar";
import PhotoGallery from "./components/gallery/PhotoGallery";


function App() {
 

  const [searchQuery, setSearchQuery] = useState("");
  const searchEndPoint = `https://api.pexels.com/v1/search?${searchQuery}=nature&per_page=80`;

  const curatedEndPoint = ` https://api.pexels.com/v1/curated?per_page=80`;
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
    <>
      <Navbar />
      <div className="h-[600px] bg-[url('bg-1.jpg')]  bg-no-repeat bg-cover border-b border-solid ">
        {/* <img
          src="https://images.pexels.com/photos/1033728/pexels-photo-1033728.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="sample"
          onClick={() =>
            handleDownload(
              "https://images.pexels.com/photos/1033728/pexels-photo-1033728.jpeg?auto=compress&cs=tinysrgb&w=800",
              "sample"
            )
          }
        /> */}
      </div>
      <PhotoGallery images={images} />
    </>
  );
}

export default App;
