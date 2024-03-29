import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Book from './images/Book.png'
const Hero = () => {
  return <>
  
     <div className="container bg-gray-200 rounded-md h-[554px] w-[1170px] grid lg:grid-cols-2 sm:grid-cols-1 lg:place-content-center lg:place-items-center sm:place-items-center sm:place-content-center ">
     <div className="textcont h-[281px] w-[526px] ml-[40px] flex flex-col lg:items-start sm:items-center lg:justify-center sm:justify-center">
     <h1 className="lg:text-[56px] sm:text-[40px]  text-black"> Books to freshen up  </h1>
     <h1 className="lg:text-[56px] sm:text-[40px]  text-black"> your bookshelf </h1>
      <Link to="/booklist">
     <button className="h-[65px] w-[190px] mt-[30px] bg-[#23BE0A] text-white text-[20px] rounded-[8px]">View the list</button>
     </Link>
     </div>
     <img className="lg:h-[394px] sm:h-[250px] sm:w-[270px]  lg:w-[318px]" src={Book}></img>
     
     </div>
  
  
  </>;
};

export default Hero;
