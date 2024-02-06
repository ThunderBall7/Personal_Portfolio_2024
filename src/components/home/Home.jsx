import React from 'react'
import Time from '../extras/Time'
import profile from '../../assets/Profile.png'
import GitHub from '../../assets/GitHub.png'
import LinkedIn from '../../assets/LinkedIn.png'
import Telegram from '../../assets/Telegram.png'
import whatsapp from '../../assets/whatsapp.png'
import './style.css'

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
    <div className='w-1/2 m-auto text-center pl-10'>
      <main className='mt-4'>
        <div>
          <Time/>
        </div>
        <div>
          <img src={profile} alt="image" className='w-[125px] h-[125px] mx-auto mb-4 rounded-full object-cover'/>
          <p className='mb-2'>Manish Maurya</p>
          <p className='mb-2'>Front End Developer</p>
          <p className='mb-4'>
            <span className='glowDot text-green-500'></span> <span className='ml-2'>Available for new opportunites</span></p>
            <div className='flex justify-center gap-4 mb-4'>
            <img className="w-7 h-7" src={GitHub} />
            <img className="w-7 h-7" src={Telegram} />
            <img className="w-7 h-7" src={LinkedIn} />
            <img className="w-7 h-7" src={whatsapp} />
          </div>

          <div className='flex justify-center relative mb-4'>
            <p id='email' className='border border-gray-300 p-2 rounded'>manishmaurya.2204@gmail.com</p>
            <button onClick={copyFunction} className='bg-blue-500 text-white px-4 py-2 rounded ml-2'>Copy</button>
            <div id='copyAlert' className='hidden ml-4'>
            <p className='bg-green-500 text-white px-4 py-2 rounded'>
            Email Copied
          </p>
            </div>
          </div>



          <div className='mb-16'>
            <p>MUMBAI, INDIA &#x2022; 24.6582&#xb0; N, 25.4234&#xb0; S</p>
          </div>

        </div>
        </main>

        <section className='mb-16 w-[545px] mx-auto text-left relative'>
          <p className='mb-4'>
          I'm Manish Maurya transitioned into development, I've found my passion lies in Frontend Development and building products from scratch.
          </p>
          <p className='mb-4'>
          I love writing clean, well-documented JavaScript code and creating designs that adapt to any device.
          </p>
          <p className='mb-4'>
          Prior to this, I honed my skills in client engagement for 3 years, leveraging a business management degree.
          </p>
          <span className="absolute top-0 -left-20 text-md before:content-['About ']">About:</span>
        </section>
        <section className='mb-16 w-[545px] mx-auto relative'>

          <div className='project1 w-[545px] h-[312px] mx-auto mb-10     rounded-lg bg-stone-100 relative'>
            <p className='mb-8'>Project 1</p>
            <div className='w-[535px] mx-auto h-[250px] bg-zinc-200 rounded-lg'>
              image
            </div>
              <div className='workPopUp'>
                <div className='absolute -left-52 top-6 right-2 w-64 h-64 bg-gray-100 drop-shadow-2xl'>
                  Screenshot 1
                </div>
                <div className='absolute left-36 top-6 w-64 h-64 bg-gray-100 drop-shadow-2xl'>
                  Screenshot 2
                </div>
                <div className='absolute -right-52 top-6 w-64 h-64 bg-gray-100 drop-shadow-2xl'>
                  Screenshot 3
                </div>
              </div>
          </div>

// create hover area on top of project div, it will look cool

          <div className='project2 w-[545px] h-[312px] mx-auto mb-10 rounded-lg bg-stone-100'>
            <p className='mb-8'>Project 2</p>
            <div className='w-[535px] mx-auto h-[250px] bg-zinc-200 rounded-lg'>
              image
            </div>
          </div>

          <div className='project3 w-[545px] h-[312px] mx-auto mb-10 rounded-lg bg-stone-100'>
            <p className='mb-8'>Project 3</p>
            <div className='w-[535px] mx-auto h-[250px] bg-zinc-200 rounded-lg'>
              image
            </div>
          </div>

          <div className='project4 w-[545px] h-[312px] mx-auto mb-10 rounded-lg bg-stone-100'>
            <p className='mb-8'>Project 4</p>
            <div className='w-[535px] mx-auto h-[250px] bg-zinc-200 rounded-lg'>
              image
            </div>
          </div>

          <span className="absolute top-0 -left-20 text-md before:content-['About ']">Work:</span>

        </section>
        <section>
        &#169; 2023 Manish Maurya.
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam dignissimos ex enim optio vero voluptas in sunt aliquid maxime
          </p>
        </section>
    </div>
  )
}

export default Home;

