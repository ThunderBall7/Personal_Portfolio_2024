import React from 'react';
import ToggleButton from '../toggleButton/ToggleButton';

const Contact = () => {
  return (
    <>
      <div className='absolute right-10 hidden lg:block'>
        <ToggleButton/>
      </div>
      <div className='flex lg:ml-20 px-2'>
        <div className='text-[var(--text-color);] mt-4 w-48 hidden lg:block'>
          <p className='work_title relative mb-4'>About Me</p>
          <p className='project_title relative mb-3'>Manish Maurya</p>
          <p className='border bg-gray-100 rounded-md p-1 text-black'>Front End Developer</p>
        </div>

        <div className='lg:w-1/2 m-auto text-center lg:pl-10 sm:px-2 text-[var(--text-color);]'>
          <main className='mt-4 flex flex-col justify-center items-center text-center'>
            <div className='lg:w-[624px] mt-5'>
              <h3 className='text-left text-2xl mb-3'>Contact Information</h3>
              <div className='flex mt-1'>
                <p className='text-gray-400 text-left w-24'>Email:</p>
                <p>manishmaurya.2204@gmail.com</p>
              </div>
              <div className='flex mt-1'>
                <p className='text-gray-400 text-left w-24'>Phone:</p>
                <p>+91 9867319116</p>
              </div>
              <div className='flex mt-1'>
                <p className='text-gray-400 text-left w-24'>Address:</p>
                <p>Mumbai, India</p>
              </div>
              <div className='flex mt-1'>
                <p className='text-gray-400 text-left w-24'>Social:</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/manish-maurya-229a98102/">Manish Maurya</a></p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <section className='lg:w-1/2 mx-auto text-center mt-20 text-gray-500'>
        &#169; 2023 Manish Maurya.
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam dignissimos ex enim optio vero voluptas in sunt aliquid maxime
        </p>
      </section>
    </>
  );
}

export default Contact;
