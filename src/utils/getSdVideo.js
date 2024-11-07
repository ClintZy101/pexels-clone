// export const getSdVideoFile = (video_files) => {
//     return video_files?.find((vid) => vid.quality === "sd");
//   };

// conditional
  export const getSdVideoFile = (video_files) => {
    // Try to find an SD file first
    let sdVideo = video_files?.find((vid) => vid.quality === "sd");
    
    // If no SD file is found, fallback to HD
    if (!sdVideo) {
      sdVideo = video_files?.find((vid) => vid.quality === "hd");
    }
    
    return sdVideo; // Will be SD if available, otherwise HD, or undefined if neither are found
  };