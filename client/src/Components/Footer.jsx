import React from 'react'
import icon from '../public/logo.png'

function Footer() {
  return (
    <div className='w-full bg-blueTheme'>
      <div className='flex flex-col mx-16'>
        <div className='flex items-center justify-center'>
          <img src={icon} width={75} className='mx-2 mt-2' alt='Divine Care Home Health LLC'></img>
          <div className='font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            Divine Care Home Health LLC
          </div>
        </div>
        <div className='flex justify-center'>
          <ul className='list-none text-l font-medium flex flex-col p-0 sm:flex-row'>
            <li>
              <ul className='list-none p-0 sm:mr-16 text-white'>
                <li className='text-pinkTheme'>Divine Care Home Health Office:</li>
                <li className='pl-3'>
                  <span>10815 Tobar Falls Cir</span>
                  <br />
                  <span>Houston, TX, 77064</span>
                </li>
              </ul>
            </li>
            <li>
              <ul className='list-none p-0 sm:mr-16 text-white'>
                <li className='text-pinkTheme'>Email:</li>
                <li className='pl-3'>admin@divinecarehomehealth.com</li>
              </ul>
            </li>
            
            <li>
              <ul className='list-none p-0 sm:mr-16 text-white'>
                <li className='text-pinkTheme'>Tel #:</li>
                <li className='pl-3'>(281) 919-7324</li>
                <li className='pl-3'>(832) 794-5086</li>
              </ul>
            </li>

            <li>
              <ul className='list-none p-0 sm:mr-16 text-white'>
                <li className='text-pinkTheme'>Fax #:</li>
                <li className='pl-3'>(281) 885-2606</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='flex w-full justify-center m-2'>
          <span className='text-pinkTheme text-l font-medium border-0 border-t border-solid border-white'>© 2024 Divine Care Home Health - All Rights Reserved</span>
        </div>
      </div>
    </div>
  )
}

export default Footer