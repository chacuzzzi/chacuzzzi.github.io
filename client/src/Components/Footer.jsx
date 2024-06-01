import React from 'react'
import icon from '../public/logo.png'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  return (
    <div className='w-full bg-blueTheme'>
      <div className='flex flex-col mx-16'>
        <div className='flex flex-col sm:flex-row items-center justify-center'>
          <img src={icon} width={50} className='m-2' alt='Divine Care Home Health LLC'></img>
          <div className='font-semibold text-white text-xl sm:text-2xl md:text-3xl text-center'>
            Divine Care Home Health LLC
          </div>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <ul className='flex flex-col sm:flex-row sm:space-x-6 list-none p-0 text-xl font-semibold text-pinkTheme m-0 text-center'>
            <li className='hover:cursor-pointer hover:text-white' onClick={() => navigate('/about')}>About Us</li>
            <li className='hover:cursor-pointer hover:text-white' onClick={() => navigate('/contact')}>Contact Us</li>
          </ul>
          <li className='list-none text-xl text-pinkTheme mt-2 text-center flex flex-col sm:block'>
            Business Hours:
            <span className='text-white text-base'> Mon - Fri | 8:30 AM - 5 PM</span>
          </li>
          <ul className='list-none text-l font-medium flex flex-col lg:flex-row items-center justify-center lg:items-start border-0 border-y border-solid border-white p-4 space-y-6 lg:space-y-0'>
            <li>
              <ul className='list-none p-0 lg:mr-16 text-white flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 384 512" className='fill-current text-pinkTheme mb-1'>
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                </svg>
                <li>
                  <span>10815 Tobar Falls Cir</span>
                  <br />
                  <span>Houston, TX, 77064</span>
                </li>
              </ul>
            </li>
            
            <li>
              <ul className='list-none p-0 lg:mr-16 text-white flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 384 512" className='fill-current text-pinkTheme mb-1'>
                  <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/>
                </svg>
                <ul className='list-none p-0'>
                  <li>(281) 919-7324</li>
                  <li>(832) 794-5086</li>
                </ul>
              </ul>
            </li>

            <li>
              <ul className='list-none p-0 lg:mr-16 text-white text-center'>
                <li className='text-pinkTheme mb-1'>Fax #:</li>
                <li>(281) 885-2606</li>
              </ul>
            </li>

            <li>
              <ul className='list-none p-0 h-10 text-white flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512" className='fill-current text-pinkTheme mb-1'>
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
                <li>admin@divinecarehomehealth.com</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='flex w-full justify-center m-2'>
          <span className='text-pinkTheme text-l font-medium'>© 2024 Divine Care Home Health - All Rights Reserved</span>
        </div>
      </div>
    </div>
  )
}

export default Footer