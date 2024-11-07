import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { CiImageOn, CiSearch, CiVideoOn } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useStore from "../../api/store/globalStore";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isAtHome, setIsAtHome] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const {
    setSearchType,
    setQuery,
    searchType,
    query,
    fetchPhotos,
    fetchVideos,
  } = useStore();

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (searchType === "Photos") {
    //   fetchPhotos(query);
    // } else if (searchType === "Videos") {
    //   fetchVideos(query);
    // };
    switch(searchType){
      case "Photos":
        fetchPhotos(query)
        break;
      case "Videos":
        fetchVideos(query)
    }

    if (location.pathname === "/") {
      navigate("/search");
    } else {
      console.log(location.pathname)
    }
  };

  // console.log(location.pathname);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-white rounded  text-black border w-full    md:w-[700px] mx-auto"
    >
      <div className="border-r rounded grid items-center cursor-pointer relative">
        <div
          className="flex p-2 space-x-2 items-center justify-center sm:w-[150px]"
          onClick={() => handleDropdown()}
        >
          <h1 className="">{!searchType ? "Photos" : searchType}</h1>

          <BiChevronDown />
        </div>
        {/* Drop Down */}
        <div
          className={`absolute -bottom-24 border  bg-white rounded h-24 sm:w-[150px] gap-2 py-2 justify-center items-center  ${
            isOpen ? "grid" : "hidden"
          }  `}
        >
          <div
            className="flex space-x-2 items-center justify-center hover:bg-gray-100 group w-[150px] h-8"
            onClick={() => {
              setSearchType("Photos");
              setIsOpen(false);
            }}
          >
            <CiImageOn />
            <h2 className="group-hover:font-bold">Photos</h2>
          </div>
          <div
            className="flex space-x-2 items-center justify-center hover:bg-gray-100 group w-[150px] h-8"
            onClick={() => {
              setSearchType("Videos");
              setIsOpen(false);
            }}
          >
            <CiVideoOn />
            <h2 className="group-hover:font-bold">Videos</h2>
          </div>
        </div>
      </div>

      <input
        type="text"
        placeholder={`Search Free ${searchType}`}
        className="h-12 w-full outline-none px-2 rounded"
        value={query}
        onChange={handleInputChange}
      />

      <div
        onClick={handleSubmit}
        className="border-l group  flex items-center justify-center p-2 cursor-pointer"
      >
        <CiSearch className="text-3xl text-gray-500  " />
      </div>
    </form>
  );
}
