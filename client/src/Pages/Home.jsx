import React from 'react'
import banner from '../public/homebanner.jpg'

function Home() {
  return (
    <div className='w-full'>
      <div className='flex flex-col w-full justify-center items-center pt-20 sm:flex-row'>
        <div className='w-11/12 h-20 sm:w-4/12 sm:h-72 bg-blueTheme flex justify-center sm:border-r-8 sm:border-b-0 border-b-4 border-pinkTheme border-solid border-0'>
          <div className='flex items-center'>
            <div className='text-white font-bold text-left m-4 text-2xl md:text-3xl lg:text-4xl italic'>
              <span>Compassionate Care in the</span>  
              <br />
              <span>Comfort of Your Home</span>
            </div>
          </div>
        </div>
        <div className='w-11/12 h-20 sm:w-7/12 sm:h-72 bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${banner})`, backgroundPosition: 'right top'}}></div>
      </div>
      <div className='w-11/12 m-auto text-center'>
        <div className='flex flex-col font-semibold text-4xl'>
          <span>
            At Divine Care Home Health, we believe in providing exceptional care with a personal touch.
            Your well-being is our priority, and we are here to support you every step of the way.
          </span>
          <span>
            We look forward to partnering with you on your journey to better health and a more comfortable life at home.
          </span>
        </div>
      </div>
      <div className='w-11/12 m-auto'>
        <div className='flex flex-col sm:flex-row justify-between p-0 text-white text-xl'>
          <ul className='list-none px-4 py-2 bg-pinkTheme sm:w-1/4 rounded-md shadow-lg'>
            <li>
              Quote
            </li>
            <li>
              Name
            </li>
          </ul>
          <ul className='list-none px-4 py-2 bg-pinkTheme sm:w-1/4 rounded-md shadow-lg'>
            <li>
              Quote
            </li>
            <li>
              Name
            </li>
          </ul>
          <ul className='list-none px-4 py-2 bg-pinkTheme sm:w-1/4 rounded-md shadow-lg'>
            <li>
              Quote
            </li>
            <li>
              Name
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home