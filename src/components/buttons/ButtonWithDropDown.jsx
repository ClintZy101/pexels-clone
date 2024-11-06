import React, { useState } from "react";
import LitUpBorderButton from "./LitUpBorderButton";
import { getImageDimensions } from "../../utils/getImageDimensions";
import { saveAs } from "file-saver";

// create  more functionality for saying thanks to photographers and links to pexel
const handleDownload = (url, title) => {
    saveAs(url, title);
  };

const ImageDimensionButton = ({
  image_url,
  photo_title,
  imageOrientation,
  imageDimension,
  setIsOpen
}) => {
  return (
    <button
      onClick={() => {handleDownload(image_url, photo_title); setIsOpen(true)}}
      className="flex space-x-5 hover:bg-gray-100 w-full justify-center items-center border-b h-12"
    >
      <h2 className="font-bold">{imageOrientation}</h2>
      <p>{imageDimension}</p>
    </button>
  );
};

export default function ButtonWithDropDown({
  photo_title,
  photo_url,
  orig_width,
  orig_height,
  setIsOpen
}) {
  

  const [isHovered, setIsHovered] = useState(false);
  
  const tinyImageUrl = photo_url.tiny;
  const smallImageUrl = photo_url.small;
  const mediumImageUrl = photo_url.medium;
  const largeImageUrl = photo_url.large;
  const portraitImageUrl = photo_url.portrait;
  const landscapeImageUrl = photo_url.landscape;
  const originalImageUrl = photo_url.original;

  const tinyImageDimensions = getImageDimensions(tinyImageUrl);
  const smallImageDimensions = getImageDimensions(smallImageUrl);
  const mediumImageDimensions = getImageDimensions(mediumImageUrl);
  const largeImageDimensions = getImageDimensions(largeImageUrl);
  const portraitImageDimensions = getImageDimensions(portraitImageUrl);
  const landscapeImageDimensions = getImageDimensions(landscapeImageUrl);
//   const originalImageDimensions = getImageDimensions(originalImageUrl);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <LitUpBorderButton />
      {/* show on hover */}
      {isHovered && (
        <div className="grid gap-2 place-items-center  p-2  w-[400px]  absolute right-0 bg-white rounded border ">
          {/* Original Dimension */}
          <button
            onClick={() => {handleDownload(originalImageUrl,photo_title);setIsOpen(true)}}
            className="flex space-x-5 hover:bg-gray-100 w-full justify-center items-center border-b h-12"
          >
            <h2 className="font-bold">Original</h2>
            <p>{`${orig_width}x${orig_height}`}</p>
          </button>

          <ImageDimensionButton
            photo_title={photo_title}
            image_url={landscapeImageUrl}
            imageDimension={landscapeImageDimensions}
            imageOrientation="Landscape"
            setIsOpen={setIsOpen}
          />
          <ImageDimensionButton
            photo_title={photo_title}
            image_url={portraitImageUrl}
            imageDimension={portraitImageDimensions}
            imageOrientation="Portrait"
            setIsOpen={setIsOpen}
          />
          <ImageDimensionButton
            photo_title={photo_title}
            image_url={largeImageUrl}
            imageDimension={largeImageDimensions}
            imageOrientation="Large"
            setIsOpen={setIsOpen}
          />
          {/* <ImageDimensionButton
            photo_title={photo_title}
            image_url={mediumImageUrl}
            imageDimension={mediumImageDimensions}
            imageOrientation="Medium"
          />
          <ImageDimensionButton
            photo_title={photo_title}
            image_url={smallImageUrl}
            imageDimension={smallImageDimensions}
            imageOrientation="Small"
          /> */}

          <ImageDimensionButton
            photo_title={photo_title}
            image_url={tinyImageUrl}
            imageDimension={tinyImageDimensions}
            imageOrientation="Tiny"
            setIsOpen={setIsOpen}
          />
        </div>
      )}
    </div>
  );
}
