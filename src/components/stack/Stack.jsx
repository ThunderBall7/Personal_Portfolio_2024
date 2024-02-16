import React from 'react';
import { SiBrave } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";

import monitor from './images/monitor.png';
import nitro5 from './images/nitro5.png';




const Stack = () => {
  return (
    <>
      <div className='lg:w-1/2 m-auto lg:pl-10 text-[var(--text-color);] mt-12 flex flex-col justify-center items-center'>
        <div className='text-center mb-5 lg:w-[520px]'>
          <h1 className='text-3xl text-left '>Stack</h1>
          <p className='text-gray-500 text-xl text-left'>Software and Physical products I use.</p>
        </div>
        <div className=' flex flex-wrap gap-4 justify-center mb-4 relative'>

          <div className='w-40 bg-gray-100 rounded-lg h-auto'>
            <SiBrave className='text-9xl fill-orange-500 p-5 mx-auto' />
            <p className='px-2 text-gray-600'>Browser</p>
            <p className='p-2'>Brave</p>
          </div>

          <div className='w-40 bg-gray-100 rounded-lg h-auto'>
            <FaFigma className='text-9xl mx-auto p-5 fill-red-500' />
            <p className='px-2 text-gray-600'>UI Design</p>
            <p className='p-2'>Figma</p>
          </div>
          <div className='w-40 bg-gray-100 rounded-lg h-auto'>
            <TbBrandVscode className='text-9xl mx-auto p-5 fill-blue-500'/>
            <p className='px-2 text-gray-600'>Code Editor</p>
            <p className='p-2'>VS Code</p>
          </div>
          <span className="text-gray-400 absolute top-0 -left-24 text-md before:content-[''] hidden lg:block">Software:</span>

        </div>
        <div className='flex flex-wrap gap-4 justify-center mb-4 relative'>
          <div className='w-40 bg-gray-100 rounded-lg h-auto'>
            <FaHtml5 className='text-9xl mx-auto p-5 fill-blue-500'/>
            <p className='p-2'>HTML</p>
          </div>
          <div className='w-40 bg-gray-100 rounded-lg h-auto'>
            <IoLogoCss3 className='text-9xl mx-auto p-5 fill-blue-600'/>
            <p className='p-2'>CSS</p>
          </div>
          <div className='w-40 bg-gray-100 rounded-lg h-auto'>
            <SiJavascript className='text-9xl mx-auto p-5 fill-yellow-500'/>
            <p className='p-2'>JavaScript</p>
          </div>
          <span className="text-gray-400 absolute top-0 -left-24 text-md before:content-[''] hidden lg:block">Techs:</span>

        </div>
        <div className='flex flex-wrap gap-4 justify-center mb-8'>
          <div className='w-40 bg-gray-100 rounded-lg h-auto'>
            <FaReact className='text-9xl mx-auto p-5 fill-blue-400'/>
            <p  className='p-2'>React.js</p>
          </div>
          <div className='w-40 bg-gray-100 rounded-lg h-auto'>
            <SiTailwindcss className='text-9xl mx-auto p-5 fill-blue-400'/>
            <p className='p-2'>Tailwind CSS</p>
          </div>
          <div className='w-40 bg-gray-100 rounded-lg h-auto'>
            <SiRedux className='text-9xl mx-auto p-5 fill-purple-600'/>
            <p className='p-2'>Redux</p>
          </div>
        </div>

        <div className='flex gap-3 justify-center relative'>
          <div className=' bg-gray-100 rounded-lg'>
            <img src={monitor} className='lg:w-64 w-52 p-4'  />
            <p className='px-2 text-gray-600'>Screen</p>
            <p className='p-2'>Dell Display</p>
          </div>
          <div className='bg-gray-100 rounded-lg px-1'>
            <img src={nitro5} className='lg:w-64 w-52 p-4' />
            <p className='px-2 text-gray-600'>Laptop</p>
            <p className='p-2'>Acer Nitro-5 RTX</p>
          </div>
          <span className="text-gray-400 absolute top-0 -left-24 text-md before:content-['']  hidden lg:block">Physical:</span>

        </div>
        <section className='text-center mt-14 text-gray-500'>
        &#169; 2023 Manish Maurya.
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam dignissimos ex enim optio vero voluptas in sunt aliquid maxime
          </p>
        </section>
      </div>
    </>
  )
}

export default Stack;