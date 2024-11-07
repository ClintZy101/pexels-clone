import { create } from "zustand";
import { curatedEndPoint, popularVideosEndPoint } from "../url/endpoints";

// query maximum objects per page: 80

const useStore = create((set) => ({
  images: [],
  videos: [],
  loadingPhotos: false,
  loadingVideos: false,
  error: null,
  query: '',
  searchType: 'Photos',

  setQuery: (newQuery) => set({query: newQuery}),
  setSearchType: (newSearchType)=>set({searchType: newSearchType}),
  fetchPhotos: async (query) => {
    set({ loadingPhotos: true });
    if (query === "") {
      try {
        const response = await fetch(curatedEndPoint, {
          headers: {
            Authorization:
              "BPf0TOusbUHw2nGmGqLIctXjZEOYeURg1clScDimB5FEllMFMTCzgdbC",
          },
        });
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        const data = await response.json();
        // console.log(data);
        set({ images: data.photos, loadingPhotos: false });
      } catch (error) {
        set({ error: error.message, loadingPhotos: false });
      }
    } else {
      try {
        set({ loadingPhotos: true });
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${query}&per_page=80`,
          {
            headers: {
              Authorization:
                "BPf0TOusbUHw2nGmGqLIctXjZEOYeURg1clScDimB5FEllMFMTCzgdbC",
            },
          }
        );
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        const data = await response.json();
        set({ images: data.photos, loadingPhotos: false });
      } catch (error) {
        set({ error: error.message, loadingPhotos: false });
      }
    }
  },

  fetchVideos: async (query) => {
    set({ loadingVideos: true });
    if (query === "") {
      set({ loadingVideos: true });
      try {
        const response = await fetch(popularVideosEndPoint, {
          headers: {
            Authorization:
              "BPf0TOusbUHw2nGmGqLIctXjZEOYeURg1clScDimB5FEllMFMTCzgdbC",
          },
        });
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        const data = await response.json();
        // console.log(data)
        set({ videos: data.videos, loadingVideos: false });
      } catch (error) {
        set({ error: error.message, loadingVideos: false });
      }
    } else {
      try {
        set({ loadingVideos: true });
        const response = await fetch(
          `https://api.pexels.com/videos/search?query=${query}&per_page=80`,
          {
            headers: {
              Authorization:
                "BPf0TOusbUHw2nGmGqLIctXjZEOYeURg1clScDimB5FEllMFMTCzgdbC",
            },
          }
        );
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        const data = await response.json();
        set({ videos: data.videos, loadingVideos: false });
      } catch (error) {
        set({ error: error.message, loadingVideos: false });
      }
    }
  },
}));

export default useStore;

