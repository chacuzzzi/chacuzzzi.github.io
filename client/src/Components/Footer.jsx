import React from 'react'
import icon from '../public/logo.png'

function Footer() {
  return (
    <div className='w-full bg-blueTheme'>
      <div className='flex flex-col items-start mx-16'>
        <div className='flex items-center'>
          <img src={icon} width={75} className='mx-2 mt-2' alt='Divine Care Home Health LLC'></img>
          <div className='text-l font-semibold text-white'>
            <span>Divine Care Home</span>
            <br />
            <span>Health LLC</span>
          </div>
        </div>
        <div>
          <ul className='list-none text-l font-medium flex'>
            <li>
              <ul className='list-none p-0 text-white'>
                <li className='text-pinkTheme'>Divine Care Home Health Office:</li>
                <li className='pl-3'>
                  <span>10815 Tobar Falls Cir</span>
                  <br />
                  <span>Houston, TX, 77064</span>
                </li>
              </ul>
            </li>
            
            <li className='pl-12'>
              <ul className='list-none text-white'>
                <li className='text-pinkTheme'>Tel #:</li>
                <li className='pl-3'>281-919-7324</li>
                <li className='pl-3'>832-794-5086</li>
                <li className='text-pinkTheme'>Fax #:</li>
                <li className='pl-3'>281-885-2606</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer