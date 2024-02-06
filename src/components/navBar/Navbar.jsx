import React from 'react'
import about from './icons/about.svg'
import contact from './icons/contact.svg'
import stack from './icons/stack.svg'
import work from './icons/work.svg'

import { RiHomeLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { RiStackFill } from "react-icons/ri";
import { BiSolidContact } from "react-icons/bi";




import './style.css'

const Navbar = () => {
  return (
    <div className='w-16 h-screen fixed left-0 top-0 bg-neutral-50 flex flex-col justify-center text-center gap-8 border-r-2
    '>

      <div className='icon-container w-6 mx-auto cursor-pointer'>
      <RiHomeLine className="fill-gray-500 hover:fill-blue-500 size-6" />
        <span className="label">Home</span>
      </div>

      <div className='icon-container w-6 mx-auto cursor-pointer'>
        <GoProjectSymlink  className='fill-gray-500 hover:fill-blue-500 size-6 '/>
        <span className="label">Work</span>
      </div>
      <div className='icon-container w-6 mx-auto cursor-pointer'>
        <RiStackFill className='fill-gray-500 hover:fill-blue-500 size-6'/>
        <span className="label">Stack</span>
      </div>
      <div className='icon-container w-6 mx-auto cursor-pointer'>
        <IoPersonSharp className='fill-gray-500 hover:fill-blue-500 size-6'/>
        <span className="label">About</span>
      </div>
      <div className='icon-container w-6 mx-auto cursor-pointer'>
        <BiSolidContact className='fill-gray-500 hover:fill-blue-500 size-6' />
        <span className="label">Contact</span>
      </div>


    </div>
  )
}

export default Navbar