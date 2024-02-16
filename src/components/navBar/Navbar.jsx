import React from 'react'


import { RiHomeLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { RiStackFill } from "react-icons/ri";
import { BiSolidContact } from "react-icons/bi";
import { Link } from 'react-router-dom';




import './style.css'

const Navbar = () => {
  return (
    <>
    <div className=''>
    <div className='lg:w-16 lg:h-screen fixed lg:bottom-0 md:left-0 bottom-0 z-50 w-full h-12 bg-neutral-50 flex lg:flex-col items-center justify-center text-center lg:gap-10 border-r-2'>

      <div className='icon-container lg:w-6 mx-auto cursor-pointer'>
        <Link to="/">
          <RiHomeLine className="fill-gray-500 hover:fill-blue-500 size-6" />
        </Link>
        <span className="label">Home</span>
      </div>

      <div className='icon-container lg:w-6 mx-auto cursor-pointer'>
        <Link to="/work">
          <GoProjectSymlink  className='fill-gray-500 hover:fill-blue-500 size-6 '/>
        </Link>
        <span className="label">Work</span>
      </div>
      <div className='icon-container lg:w-6 mx-auto cursor-pointer'>
        <Link to="/stack">
          <RiStackFill className='fill-gray-500 hover:fill-blue-500 size-6'/>
        </Link>
        <span className="label">Stack</span>
      </div>
      <div className='icon-container lg:w-6 mx-auto cursor-pointer'>
        <Link to="/about">
          <IoPersonSharp className='fill-gray-500 hover:fill-blue-500 size-6'/>
        </Link>
        <span className="label">About</span>
      </div>
      <div className='icon-container lg:w-6 mx-auto cursor-pointer'>
        <Link to="/contact">
          <BiSolidContact className='fill-gray-500 hover:fill-blue-500 size-6' />
        </Link>
        <span className="label">Contact</span>
      </div>


    </div>
    </div>
    </>
  )
}

export default Navbar;