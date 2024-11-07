import React, { useEffect, useRef } from 'react';

const HoverPlayVideo = ({ videoSrc, width = '400px', height = '300px' }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Reset to the beginning when hover ends
  };

  let pauseTimeout;

  // const handleMouseEnter = () => {
  //   if (pauseTimeout) clearTimeout(pauseTimeout); // Clear any pending pause
  //   if (videoRef.current) videoRef.current.play();
  // };

  // const handleMouseLeave = () => {
  //   // Add a slight delay before pausing
  //   pauseTimeout = setTimeout(() => {
  //     if (videoRef.current) {
  //       videoRef.current.pause();
  //       videoRef.current.currentTime = 0;
  //     }
  //   }, 100); // Adjust delay as needed
  // };

  // useEffect(()=>{
  //   console.log(videoSrc)
  // },[])

  return (
    <div
      
      className={`overflow-hidden ${width} ${height} cursor-pointer`}
    >
      <video
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        ref={videoRef}
        className="w-full object-cover h-[300px]"
        width={400}
        height={300}
        muted
        loop
      >
        <source src={videoSrc.link} type={videoSrc.file_type} />
      {/* <source src={videoSrc} type="video/webm" />
      <source src={videoSrc}type="video/ogg" /> */}
      </video>
      
    </div>
  );
};

export default HoverPlayVideo;


