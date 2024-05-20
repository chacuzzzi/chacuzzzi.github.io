import React from 'react'
import banner from '../public/homebanner.jpg'

function Home() {
  return (
    <div className='flex flex-row justify-center items-center w-11/12'>
      <div className='relative w-1/4 h-72 bg-blueTheme flex justify-center border-r-8 border-pinkTheme border-solid border-0'>
        <div className='flex items-center'>
            <div className='text-white font-bold text-left m-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
              <span>Compassionate Care in the</span>
              <br />
              <span>Comfort of Your Home</span>
            </div>
        </div>
      </div>
      <div className='relative w-3/4 h-72 bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${banner})`, backgroundPosition: 'right top'}}>
      </div>
    </div>
  )
}

export default Home