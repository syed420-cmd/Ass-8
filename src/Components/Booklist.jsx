import React from "react";
import { useState } from "react";
import data from "./Data.json";
import Img1 from "./images/Book.png";
import Img2 from "./images/Book2.png";
import Img3 from "./images/Book3.png";
import Img4 from "./images/Book4.png";
import Img5 from "./images/Book5.png";
import Img6 from "./images/Book6.png";
import Nav from "./Nav";
import { FaAngleDown } from 'react-icons/fa';
import { MdPeopleOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { TbBrandPagekit } from "react-icons/tb";
import text from "./images/navshudo.png";
import { Link } from "react-router-dom";
const images = {
  1: Img1,
  2: Img2,
  3: Img3,
  4: Img4,
  5: Img5,
  6: Img6,
};

const Booklist = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Sort By");
    const handleSelectItem = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
      };
  return (
    <>
      <Nav />
          
      <h1 className="text-[28px] text-[#131313] mt-[10px]  rounded-lg font-bold text-center m-20">
        Books
      </h1>
      <div className="flex justify-center items-center">
      <div className="relative">
        <button
          className="bg-[#23BE0A] text-white h-[52px] w-[145px] rounded-lg px-4 py-2 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedItem} <FaAngleDown className="ml-1" />
        </button>

        {isOpen && (
          <div className="absolute mt-2 w-64 bg-white rounded-lg shadow-lg">
            {/* Dropdown content goes here */}
            <ul className="">
              <li  className="cursor-pointer"   onClick={() => handleSelectItem("Publisher")}>Publiser</li>
              <li  className="cursor-pointer"  onClick={() => handleSelectItem("Date")}>Date</li>
              <li  className="cursor-pointer"  onClick={() => handleSelectItem("Writer")}>Writer</li>
            </ul>
          </div>
        )}
      </div>
    </div>
      <div className="flex justify-start items-center m-20">
        <button className="w-[137px] h-[49px] bg-white border text-black font-semibold border-[#282828] rounded-lg">
          Read Books
        </button>
        <button className="w-[137px] h-[49px] ml-5 bg-white border text-black font-semibold border-[#282828] rounded-lg">
          Wishlist
        </button>
        <button></button>
      </div>
      <div className="grid grid-cols-1 place-content-center place-items-center gap-3  ">
        {data.map((data) => (
          <div className="w-full h-[277px] flex lg:flex-row sm:flex-col lg:mt-0 sm:mt-[260px]   justify-between">
            <div className="w-[230px] h-[229px] bg-[#d3d6db] rounded-lg flex justify-center items-center lg:mt-0 sm:mt-[100px]">
              <img
                className="h-[172px] w-[129px]"
                src={images[data.book_id]}
              ></img>
            </div>
            <div className="textcont w-[887px] h-[229px] flex flex-col justify-center items-start lg:mt-0 sm:mt-20">
              <h1 className="text-[24px] font-bold">{data.book_name}</h1>
              <h1 className="text-[16px] mt-[15px] text-[#282828]">
                By: {data.author}
              </h1>
              <div className="flex flex-row justify-start ml-[-10px]  items-start">
                {data.category.map((category, index) => (
                  <div className="mt-[20px] ml-[10px]" key={index}>
                    <h1 className="text-[18px] text-[#23BE0A] leading-3">
                      {" "}
                      {category}{" "}
                    </h1>
                  </div>
                ))}
              </div>
              <div className="flex  justify-between mt-[20px]">
                <CiLocationOn className="h-[20px] w-[20px]" />
                <h1 className="text-[#282828]  text-[16px]">
                  Year of Publishing:{data.year_of_publishing}
                </h1>
              </div>
              <div className="flex justify-between mt-[20px]">
                <div className="flex">
                  <MdPeopleOutline className="h-[20px] w-[20px]" />
                  <h1 className="text-[#282828]  text-[16px]">
                    Publisher:{data.publisher}
                  </h1>
                </div>
                <div className="flex ml-[20px]">
                  <TbBrandPagekit className="h-[20px] w-[20px]" />
                  <h1 className="text-[#282828]  text-[16px]">
                    Pages:{data.total_pages}
                  </h1>
                </div>
              </div>
              <div className="flex justify-between mt-[15px]">
               <Link to="/bookdlts"> <button className="w-[174px] h-[42px] flex rounded-lg bg-[#23BE0A] justify-center items-center text-white  font-semibold">
                  HELLO
                </button>
                </Link>
                <Link to="/bookdlts">
                <button className="w-[174px] h-[42px] flex rounded-lg ml-[10px] bg-[#808000] justify-center items-center text-white  font-semibold">
                  HELLO
                </button>
                </Link>
                
                <Link to="/bookdlts">
                <button className="w-[174px] h-[42px] flex rounded-lg ml-[10px] bg-[#00FFFF] justify-center items-center text-white  font-semibold">
                  HELLO
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Booklist;
