import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
    return (
    <>
    <nav className="container mb-[20px] ">
    <div className="max-w-5xl mx-auto px-5">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <h1 className='text-[28px] lg:ml-[-80px] text-black font-bold'>Book Vibe</h1>
          </div>
        </div>
        <div className="flex">
          <div className="hidden md:flex items-center">
        <Link to="/"> <a href="#" className="text-black px-3 py-2">Home</a></Link>
   
        <Link to="/booklist"  ><a href="#" className="text-black px-3 py-2">Listed Books</a></Link> 
         <Link to="/pageread">   <a href="#" className="text-black px-3 py-2">Pages to Read</a> </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white block md:hidden px-2 py-1"
            >
              <FaBars className='text-black h-[30px] w-[40px]' />
            </button>
          </div>
        </div>
        <div className="hidden md:flex ml-[-40px] items-center">
          <button href="#" className="w-[116px] h-[57px] rounded-md text-white font-semibold  bg-[#23BE0A] ml-[10px]">Sign Up</button>
          <button href="#" className="w-[116px] h-[57px] rounded-md  text-white font-semibold bg-[#59C6D2] ml-[10px]">Sign In</button>
        </div>
      </div>
    </div>
    {isOpen && (
      <div className="md:hidden">
        <Link to="/" href="#" className="block   text-black   px-3 py-2">Home</Link>
        <Link to='/booklist' href="#" className="block  text-black    px-3 py-2">Listed Books</Link>
        <Link to='/pageread' href="#" className="block  text-black    px-3 py-2">Pages to Read</Link>
        <button href="#" className="w-[116px] h-[57px] rounded-md text-white font-semibold  bg-[#23BE0A] ml-[10px]">Sign Up</button>
        <button href="#" className="w-[116px] h-[57px] rounded-md  text-white font-semibold bg-[#59C6D2] ml-[10px]">Sign In</button>
      </div>
    )}
  </nav>
    </>
  )
}

export default Nav
