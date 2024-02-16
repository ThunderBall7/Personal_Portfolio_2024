import React from 'react';
import profile from '../../assets/Profile.png'

import ToggleButton from '../toggleButton/ToggleButton';

const About = () => {
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
        <div className='lg:w-1/2 m-auto text-center lg:pl-10 px-1 text-[var(--text-color);]'>
          <main className='mt-4 flex flex-col justify-center items-center text-center'>
            <div >
              <img src={profile} className='lg:w-[624px] w-96 h-auto border border-gray-400 rounded-xl' alt="Main Image" />

            </div>
            <div className='lg:w-[624px] mt-5'>
              <h3 className='text-left text-2xl mb-3'>Manish Maurya</h3>
              <p className='text-left mb-4'>
              I've transitioned into development, I discovered my true passion in Sofware Development. There's something incredibly satisfying about building products from scratch, shaping them with clean JavaScript code and designs that adapt seamlessly to any device.
              </p>
              <p className='text-left mb-6'>Before diving into coding, I spent three rewarding years engaging with clients, leveraging my business management degree to understand their needs deeply.
              </p>

              <div className='flex'>
                <p className='text-gray-400 w-24 text-left'>Location:</p>
                <p>Mumbai, India</p>
              </div>

              <div className='flex mt-1'>
                <p className='text-gray-400 text-left w-24'>Experience:</p>
                <div className='text-left ml-4 flex flex-col'>3 years in client engagement, transitioning to Frontend Development
                  <strong className='mb-2 mt-4'>Technical Course Designer</strong>

                        <p className='mb-1'>Improved online curriculum engagement by enhancing presentations and
                        creating engaging video content.</p>

                        <p className='mb-1'>Developed interactive materials, conducted market research, and tracked
                        analytics for continuous improvement.</p>

                        <p className='mb-1'>Crafted user-friendly video tutorials, guides, and presentations, fostering effective learner interaction.</p>
                        <strong className='mb-4'>
                          And some freelance projects
                        </strong>

                </div>

              </div>
              <div className='flex mt-1'>
                <p className='text-gray-400 text-left w-24'>Skills:</p>
                <p>HTML, CSS, JavaScript, React.js, Tailwind CSS, Redux</p>
              </div>
              <div className='flex mt-1'>
                <p className='text-gray-400 text-left w-24'>Interests:</p>
                <p>Building responsive and modern web applications, UI/UX development</p>
              </div>
            </div>
          </main>

        </div>

      </div>
      <section className=' w-1/2 mx-auto text-center mt-20 text-gray-500'>
            &#169; 2023 Manish Maurya.
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam dignissimos ex enim optio vero voluptas in sunt aliquid maxime
            </p>
          </section>
    </>
  );
}

export default About;
