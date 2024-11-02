import React, { useRef } from 'react';

const HoverPlayVideo = ({ videoSrc, width = 'w-full', height = 'h-auto' }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Reset to the beginning when hover ends
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`overflow-hidden ${width} ${height}`}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        className="object-cover w-full h-full"
        muted
        loop
      />
    </div>
  );
};

export default HoverPlayVideo;
