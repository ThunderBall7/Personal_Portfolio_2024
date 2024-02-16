import React from 'react';
import image1 from './images/pr1m.png';
import image2 from './images/pr1s.png';
import './style.css'
import ToggleButton from '../toggleButton/ToggleButton';

const Work = () => {
  return (
    <>
    <div className='absolute right-10 hidden lg:block'>
      <ToggleButton/>
      </div>
    <div className='flex lg:ml-20 '>
        <div className='text-[var(--text-color);] mt-4 w-48 hidden lg:block'>
          <p className='work_title relative mb-4'>Ongoing Project</p>
          <p className='project_title relative mb-3'>Pleese Cheese</p>
          <p className='border  bg-gray-100 rounded-md p-1 text-black'>It's a New York based plant based cheese company (A freelance project)</p>

        </div>
        <div className='lg:w-1/2 m-auto text-center lg:pl-10 pl-1 sm:pr-1 text-[var(--text-color);]'>

          <main className='mt-4 flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <img src={image1} className='lg:w-[624px] w-11/12 h-auto border border-gray-400 rounded-xl' />
                <img src={image2} className='lg:w-[624px] w-11/12 h-auto border border-gray-400 rounded-xl' />
            </div>
            <div className='lg:w-[624px] mt-5 sm:px-2'>
              <h3 className='text-left text-2xl mb-3'>Pleese Cheese</h3>
              <div className='flex'>
                <p className='text-gray-400 w-24 text-left'>Client:</p>
                <p>Pleese Cheese</p>
              </div>
              <div className='flex mt-1'>
                <p className='text-gray-400 text-left w-24'>Timeline:</p>
                <p>Feb-12 - Feb20</p>
              </div>
              <div className='flex mt-1'>
                <p className='text-gray-400 text-left w-24'>Role:</p>
                <p>Frontend development and Inmproving UI</p>
              </div>
              <div className='flex mt-1'>
                <p className='text-gray-400 text-left w-28'>Outcome:</p>
                <p className='text-left w-full '>The old website was not upto the mark. New website will be responsive which will work seemlesly on all screen sizes in the market and it'll be updated with modern touch.</p>
              </div>
            </div>
            <div>

            </div>
          </main>
          <section className='mt-20 text-gray-500'>
        &#169; 2023 Manish Maurya.
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam dignissimos ex enim optio vero voluptas in sunt aliquid maxime
          </p>
        </section>
        </div>

    </div>
    </>
  );
}

export default Work