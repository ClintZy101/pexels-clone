import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { CiImageOn, CiSearch, CiVideoOn } from "react-icons/ci";
import { Link, useNavigate} from "react-router-dom";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchType, setSearchType] = useState("Photos");
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleInputChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e) => {
    // Pass data along with navigation using the `state` option
    e.preventDefault();
    navigate("/search", { state: { searchType, searchWord }});
  };


  return (
    <form 
    onSubmit={handleSubmit}
    className="flex bg-white rounded relative ">
      <div className="border-r rounded grid items-center cursor-pointer relative">
        <div
          className="flex p-2 space-x-2 items-center justify-center w-[150px]"
          onClick={() => handleDropdown()}
        >
          <h1 className="">{searchType}</h1>

          <BiChevronDown />
        </div>
        {/* Drop Down */}
        <div
          className={`absolute -bottom-24 border  bg-white rounded h-24 w-[150px] gap-2 py-2 justify-center items-center  ${
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
          // value={searchWord}
          onChange={handleInputChange}
        />
    <Link to="/search" state={{searchType, searchWord}}>
      <div
        className="border-l flex items-center justify-center p-2 cursor-pointer"
      >
        <CiSearch className="text-3xl text-gray-500" />
      </div>
      </Link>
    </form>
  );
}
