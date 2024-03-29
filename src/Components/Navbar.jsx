import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      }
  
    return (
    <>
    <nav className="bg-white flex items-center justify-between px-4 py-2 my-5">
    <div className="flex flex-row items-center justify-between">
      {/* Logo */}
      <h1 className='font-bold text-[32px] text-[#150B2B]'>Book Vibe</h1>
      {/* Menu items */}

      <div className='flex'>
      <ul className="flex space-x-4 ml-[360px] text-gray-900 text-[16px] font-medium">
        <li>
          <a href="/" className="hover:text-gray-400 text-[18px] text-black">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-400 text-[18px] text-black">Listed Books</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-400 text-[18px] text-black">Page to read</a>
        </li>
        
      </ul>
      <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white block md:hidden px-2 py-1"
      >
        <FaBars />
      </button>
    </div>
    </div>
    </div>
    <div className="flex items-center">
     <button className='w-[116px] h-[57px] rounded-md text-white font-semibold  bg-[#23BE0A] ml-[10px]' >Sign In</button>
     <button className='w-[116px] h-[57px] rounded-md  text-white font-semibold bg-[#59C6D2] ml-[10px]' >Sign up</button>
    </div>
    {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block text-white px-3 py-2">Home</a>
          <a href="#" className="block text-white px-3 py-2">Listed Books</a>
          <a href="#" className="block text-white px-3 py-2">Pages to Read</a>
          <a href="#" className="block text-white px-3 py-2">Sign Up</a>
          <a href="#" className="block text-white px-3 py-2">Sign In</a>
        </div>
      )}
   
  </nav>  
    </>
  )
}

export default Navbar
