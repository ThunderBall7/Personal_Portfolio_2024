import React from 'react'
import Time from '../extras/Time'
import profile from '../../assets/Profile.png'
import { FaSquareGithub } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import portfolioImage from './images/previousPortfolio/Portfolio1.png'
import pp2 from './images/previousPortfolio/pp2.png';
import pp3 from './images/previousPortfolio/pp3.png';
import pp1 from './images/previousPortfolio/pp1.png';
import ecommImage from './images/ecomm/ecommProject.png';
import ec1  from './images/ecomm/ec1.png';
import ec2  from './images/ecomm/ec2.png';
import ec3  from './images/ecomm/ec3.png';
import ageCalc from './images/ageCalc/ageCalc.png';
import ac1 from './images/ageCalc/ac1.png';
import ac2 from './images/ageCalc/ac2.png';
import ac3 from './images/ageCalc/ac3.png';

import todo from './images/todo/todo.png';
import td1 from './images/todo/td1.png';
import td2 from './images/todo/td2.png';
import td3 from './images/todo/td3.png';

import movix from './images/movix/movix.png';
import mx1 from './images/movix/mx1.png';
import mx2 from './images/movix/mx2.png';
import mx3 from './images/movix/mx3.png';

import './style.css'
import ToggleButton from '../toggleButton/ToggleButton'

const Home = () => {

  const copyFunction = () => {
    let copiedText = document.getElementById('email');
    console.log(copiedText.innerText);

    navigator.clipboard.writeText(copiedText.innerText);
    showCopyAlert();
  }

  const showCopyAlert = () => {
    const copyAlert = document.getElementById('copyAlert');

    copyAlert.classList.remove('hidden');

    setTimeout(() => {
      copyAlert.classList.add('hidden');
    }, 2000);
  };




  return (
    <div className='lg:w-1/2 m-auto text-center pl-1 pr-1 lg:pl-10 text-[var(--text-color);] overflow-hidden'>
      <div className='absolute right-10 hidden lg:block'>
      <ToggleButton/>
      </div>
      <main className='mt-4'>
        <div>
          <Time/>
        </div>
        <div>
          <img src={profile} alt="image" className='lg:w-[125px] lg:h-[125px] w-20 mx-auto mb-4 rounded-full object-cover'/>
          <p className='mb-2'>Manish Maurya</p>
          <p className='mb-2'>Front End Developer</p>
          <p className='mb-4'>
            <span className='glowDot text-green-500'></span> <span className='ml-2'>Available for new opportunites</span></p>
            <div className='flex justify-center items-center gap-4 mb-4'>
            <FaSquareGithub className="w-8 h-8 fill-[var(--text-color-2)]"/>
            <FaTelegram className="w-7 h-7 fill-[var(--text-color-2)]"/>
            <GrLinkedin className="w-7 h-7 fill-[var(--text-color-2)]" />
            <FaSquareWhatsapp className="w-8 h-8 fill-[var(--text-color-2)]" />
          </div>

          <div className='flex justify-center relative mb-4'>
            <p id='email' className='border border-gray-300 p-2 rounded'>manishmaurya.2204@gmail.com</p>
            <button onClick={copyFunction} className='bg-blue-500 text-white px-4 py-2 rounded ml-2'>Copy</button>
            <div id='copyAlert' className='hidden ml-[485px]'>
              <p className='bg-green-500 w-36 text-white px-4 py-2 rounded'>
              Email Copied
              </p>
            </div>
          </div>



          <div className='mb-16'>
            <p>MUMBAI, INDIA &#x2022; 24.6582&#xb0; N, 25.4234&#xb0; S</p>
          </div>

        </div>
        </main>

        <section className='mb-16 lg:w-[545px] mx-auto text-left relative'>
          <p className='mb-4'>
          I'm Manish Maurya transitioned into development, I've found my passion lies in Frontend Development and building products from scratch.
          </p>
          <p className='mb-4'>
          I love writing clean, well-documented JavaScript code and creating designs that adapt to any device.
          </p>
          <p className='mb-4'>
          Prior to this, I honed my skills in client engagement for 3 years, leveraging a business management degree.
          </p>
          <span className="absolute top-0 -left-20 text-md before:content-['About '] hidden lg:block">About:</span>
        </section>
        <section className='mb-16 lg:w-[545px] mx-auto relative'>

        <div className='project1 w-80 h-42 lg:w-[565px] lg:h-[362px] mx-auto mb-10 rounded-lg bg-stone-100 relative'>
          <p className='h-14 text-black transform translate-y-3'>Previous Portfolio</p>
          <div className='lg:w-[535px] mx-auto lg:h-[270px] w-72  h-40 bg-zinc-200 rounded-lg'>
            <div>
              <img src={portfolioImage} className='rounded-md' alt="" />
            </div>
          </div>
          <div className="hoverButton absolute top-3 z-20 right-6 w-36 h-7 bg-white border border-gray-400 rounded-xl cursor-pointer hover:shadow-[0_4px_0px_rgb(220,220,220)] hover:-translate-y-1 transition-all text-black hidden lg:block">Hover on me</div>
          <div className='workPopUp hidden lg:block'>
            <div className='popup-item absolute -left-52 top-6 right-2 w-80 h-80 bg-gray-100 drop-shadow-2xl border border-gray-400 z-10'>
              <img className='object-contain w-full h-full' src={pp1}/>
            </div>
            <div className='popup-item absolute left-28 top-6 w-80 h-80 bg-gray-100 drop-shadow-2xl border border-gray-400 z-10'>
              <img className='object-contain w-full h-full' src={pp2}/>
            </div>
            <div className='popup-item absolute -right-44 top-6 w-80 h-80 bg-gray-100 drop-shadow-2xl border border-gray-400 z-10'>
              <img className='object-contain w-full h-full' src={pp3}/>
            </div>
            </div>
        </div>

        <div className='project1  lg:w-[565px] lg:h-[362px] w-80 h-42 mx-auto mb-10 rounded-lg bg-stone-100 relative'>
          <p className='h-14 text-black transform translate-y-3'>Ecommerce - Stone Store</p>
          <div className='lg:w-[535px] mx-auto lg:h-[270px] w-72  h-40 bg-zinc-200 rounded-lg'>
            <img src={ecommImage} alt="" />
          </div>
          <div className="hoverButton absolute top-3 z-20 right-6 w-36 h-7 bg-white border border-gray-400 rounded-xl cursor-pointer text-black hidden lg:block">Hover on me</div>
          <div className='workPopUp hidden lg:block'>
            <div className='popup-item absolute -left-52 top-6 right-2 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={ec1} alt="" />
            </div>
            <div className='popup-item absolute left-28 top-6 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={ec2} alt="" />
            </div>
            <div className='popup-item absolute -right-44 top-6 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={ec3} alt="" />
            </div>
            </div>
        </div>

        <div className='project1  w-80 h-42 lg:w-[565px] lg:h-[362px] mx-auto mb-10 rounded-lg bg-stone-100 relative'>
          <p className='h-14 text-black transform translate-y-3 '>MovieX</p>
          <div className='lg:w-[535px] mx-auto lg:h-[270px] w-72  h-40 bg-zinc-200 rounded-lg'>
            <img className='object-contain w-full h-full' src={movix} alt="" />
          </div>
          <div className="hoverButton absolute top-3 z-20 right-6 w-36 h-7 bg-white border border-gray-400 rounded-xl cursor-pointer text-black hidden lg:block">Hover on me</div>
          <div className='workPopUp md:display:none'>
            <div className='popup-item absolute -left-52 top-6 right-2 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={mx1} alt="" />
            </div>
            <div className='popup-item absolute left-28 top-6 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={mx2} alt="" />
            </div>
            <div className='popup-item absolute -right-44 top-6 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={mx3} alt="" />
            </div>
            </div>
        </div>

        <div className='project1  w-80 h-42 lg:w-[565px] lg:h-[362px] mx-auto mb-10 rounded-lg bg-stone-100 relative'>
          <p className='h-14 text-black transform translate-y-3 '>Age Calculator</p>
          <div className='lg:w-[535px] mx-auto lg:h-[270px] w-72  h-40 bg-zinc-200 rounded-lg'>
            <img className='object-contain w-full h-full' src={ageCalc} alt="" />
          </div>
          <div className="hoverButton absolute top-3 z-20 right-6 w-36 h-7 bg-white border border-gray-400 rounded-xl cursor-pointer text-black hidden lg:block">Hover on me</div>
          <div className='workPopUp md:display:none'>
            <div className='popup-item absolute -left-52 top-6 right-2 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={ac1} alt="" />
            </div>
            <div className='popup-item absolute left-28 top-6 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={ac2} alt="" />
            </div>
            <div className='popup-item absolute -right-44 top-6 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={ac3} alt="" />
            </div>
            </div>
        </div>

        <div className='project1  w-80 h-42 lg:w-[565px] lg:h-[362px] mx-auto mb-10 rounded-lg bg-stone-100 relative'>
          <p className='h-14 text-black transform translate-y-3'>To do List</p>
          <div className='lg:w-[535px] mx-auto lg:h-[270px] w-72  h-40 bg-zinc-200 rounded-lg'>
            <img src={todo} className='object-contain w-full h-full' alt="" />
          </div>
          <div className="hoverButton absolute top-3 z-20 right-6 w-36 h-7 bg-white border border-gray-400 rounded-xl cursor-pointer text-black hidden lg:block">Hover on me</div>
          <div className='workPopUp md:display:none'>
            <div className='popup-item absolute -left-52 top-6 right-2 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={td1} alt="" />
            </div>
            <div className='popup-item absolute left-28 top-6 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={td2} alt="" />
            </div>
            <div className='popup-item absolute -right-44 top-6 w-80 h-80 bg-gray-100 drop-shadow-2xl z-10 border border-gray-400'>
            <img className='object-contain w-full h-full' src={td3} alt="" />
            </div>
            </div>
        </div>


          <span className="absolute top-0 -left-20 text-md before:content-['About '] hidden lg:block">Work:</span>

        </section>


        <section className='text-gray-500'>
        &#169; 2023 Manish Maurya.
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam dignissimos ex enim optio vero voluptas in sunt aliquid maxime
          </p>
        </section>

    </div>
  )
}

export default Home;

